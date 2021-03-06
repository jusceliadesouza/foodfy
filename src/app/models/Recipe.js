const { date } = require("../../lib/utils");

const db = require("../../config/db");

module.exports = {
  all(callback) {
    db.query(
      `
      SELECT recipes.*, chefs.name AS chef_name
      FROM recipes
      LEFT JOIN chefs ON (recipes.chef_id = chefs.id)
      ORDER BY created_at DESC`,
      function (err, results) {
        if (err) throw `Database Error! ${err}`;
        callback(results.rows);
      }
    );
  },
  create(data, callback) {
    const query = `
      INSERT INTO recipes (
        chef_id,
        title,
        ingredients,
        preparation,
        information,
        created_at
      ) VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING id
    `;

    const values = [
      data.chef,
      data.title,
      data.ingredients,
      data.preparation,
      data.information,
      date(Date.now()).isoCompleted,
    ];

    db.query(query, values, function (err, results) {
      if (err) throw `Database Error! ${err}`;
      callback(results.rows[0]);
    });
  },
  find(id, callback) {
    db.query(
      `SELECT recipes.*, chefs.name AS chef_name
      FROM recipes
      LEFT JOIN chefs ON (recipes.chef_id = chefs.id)
      WHERE recipes.id = $1`,
      [id],
      function (err, results) {
        if (err) throw `Database Error! ${err}`;
        callback(results.rows[0]);
      }
    );
  },
  findBy(filter, callback) {
    db.query(
      `
      SELECT recipes.*, chefs.name AS chef_name
      FROM recipes
      LEFT JOIN chefs ON (recipes.chef_id = chefs.id)
      WHERE recipes.title ILIKE '%${filter}%'
      ORDER BY created_at DESC`,
      function (err, results) {
        if (err) throw `Database Error! ${err}`;
        callback(results.rows);
      }
    );
  },
  update(data, callback) {
    const query = `
      UPDATE recipes SET
        chef_id=($1), 
        title=($2),
        ingredients=($3),
        preparation=($4), 
        information=($5)
      WHERE id = $6
    `;

    const values = [
      data.chef,
      data.title,
      data.ingredients,
      data.preparation,
      data.information,
      data.id,
    ];

    db.query(query, values, function (err, results) {
      if (err) throw `Database Error ${err}`;
      return callback();
    });
  },
  delete(id, callback) {
    db.query(
      `DELETE FROM recipes WHERE id = $1`,
      [id],
      function (err, results) {
        if (err) throw `Database Error! ${err}`;
        return callback();
      }
    );
  },
  chefsSelectOptions(callback) {
    db.query(`SELECT id, name FROM chefs`, function (err, results) {
      if (err) throw "Database Error!";
      callback(results.rows);
    });
  },
  paginate(params) {
    const { filter, limit, offset, callback } = params;

    let query = "",
      filterQuery = "",
      totalQuery = `(
            SELECT count(*) FROM recipes
        ) AS total`;
    orderBy = "ORDER BY recipes.created_at DESC";

    if (filter) {
      filterQuery = `
        WHERE recipes.title ILIKE '%${filter}%'`;

      totalQuery = `(
            SELECT count(*) FROM recipes
            ${filterQuery}
        ) AS total`;
    }

    query = `
    SELECT recipes.*, ${totalQuery}, chefs.name as chef_name
    FROM recipes
    LEFT JOIN chefs ON (recipes.chef_id = chefs.id)
    ${filterQuery}
    ${orderBy}
    LIMIT $1 OFFSET $2
    `;

    db.query(query, [limit, offset], function (err, results) {
      if (err) throw "Database Error!";
      callback(results.rows);
    });
  },
};
