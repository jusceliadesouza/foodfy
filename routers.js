const express = require("express");
const routes = express.Router();

//data.json
const recipes = require("./data.js");

//principal
routes.get("/", function (req, res) {
  return res.render("index", { items: recipes });
});

routes.get("/about", function (req, res) {
  return res.render("about");
});

routes.get("/recipes", function (req, res) {
  return res.render("recipes", { items: recipes });
});

routes.get("/recipes/:index", function (req, res) {
  const recipeIndex = req.params.index;
  const recipe = recipes[recipeIndex];

  return res.render("recipe", { recipe });
});

module.exports = routes;
