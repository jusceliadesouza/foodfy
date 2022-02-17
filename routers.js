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

routes.get("/recipe", function (req, res) {
  const id = req.query.id;

  const recipe = recipes.find(function (recipe) {
    return recipe.id == id;
  });
  
  if (!recipe) return res.send("Recipe not found!");
  return res.render("recipe", { recipe });
});

module.exports = routes;
