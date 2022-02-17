const db = require("../../config/db");

module.exports = {
  index(req, res) {
    db.query(`SELECT * FROM recipes`, function (err, results) {
      if (err) return res.send("Database Error!");
      return res.render("main/index", { recipes: results.rows });
    });
  },
  about(req, res) {
    return res.render("main/about");
  },
  recipes(req, res) {
    db.query(`SELECT * FROM recipes`, function (err, results) {
      if (err) return res.send("Database Error!");
      return res.render("main/recipes", { recipes: results.rows });
    });
  },
  show(req, res) {
    return res.render("main/recipe")
  }
};
