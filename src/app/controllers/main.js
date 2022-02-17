const { date } = require("../../lib/utils");

const Recipe = require("../models/Recipe");

module.exports = {
  index(req, res) {
    Recipe.all(function (recipes) {
      return res.render("main/index", { recipes });
    });
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
};
