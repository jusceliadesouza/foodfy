const { date } = require("../../lib/utils");

const Recipe = require("../models/Recipe");
const Chef = require("../models/Chef");

module.exports = {
  index(req, res) {
    let { filter, page, limit } = req.query;

    page = page || 1; //se a página não existir, 1
    limit = limit || 6;
    let offset = limit * (page - 1);

    const params = {
      filter,
      page,
      limit,
      offset,
      callback(recipes) {
        const pagination = {
          total: Math.ceil(recipes[0].total / limit),
          page,
        };

        if (filter) {
          Recipe.findBy(filter, function (recipes) {
            return res.render("main/search", { filter, recipes });
          });
        } else {
          return res.render("main/index", {
            recipes,
            pagination,
            filter,
          });
        }
      },
    };

    Recipe.paginate(params);
  },
  about(req, res) {
    return res.render("main/about");
  },
  recipes(req, res) {
    Recipe.all(function (recipes) {
      return res.render("main/recipes", { recipes });
    });
  },
  show(req, res) {
    Recipe.find(req.params.id, function (recipe) {
      if (!recipe) return res.send("Recipe not found");

      recipe.created_at = date(recipe.created_at).format;

      return res.render("main/recipe", { recipe });
    });
  },
  chefs(req, res) {
    Chef.all(function (chefs) {
      return res.render("main/chefs", { chefs });
    });
  },
};