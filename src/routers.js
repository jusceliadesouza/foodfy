const express = require("express");
const routes = express.Router();

// controllers
const main = require("./app/controllers/main");
const chefs = require("./app/controllers/chefs");
const recipes = require("./app/controllers/recipes");

// principal
routes.get("/", main.index);
routes.get("/about", main.about);
routes.get("/recipes", main.recipes);
routes.get("/recipes/:id", main.show);
routes.get("/chefs", main.chefs);
// routes.get("/search", main.search);

// admin
routes.get("/admin", function (req, res) {
  res.redirect("/admin/recipes")
})

//--recipes
routes.get("/admin/recipes", recipes.index);
routes.get("/admin/recipes/create", recipes.create);
routes.get("/admin/recipes/:id", recipes.show);
routes.get("/admin/recipes/:id/edit", recipes.edit);
routes.post("/admin/recipes", recipes.post);
routes.put("/admin/recipes", recipes.put);
routes.delete("/admin/recipes", recipes.delete);

//--chefs
routes.get("/admin/chefs", chefs.index);
routes.get('/admin/chefs/create', chefs.create)
routes.get('/admin/chefs/:id', chefs.show)
routes.get('/admin/chefs/:id/edit', chefs.edit)
routes.post('/admin/chefs', chefs.post)
routes.put('/admin/chefs', chefs.put)
routes.delete('/admin/chefs', chefs.delete)

module.exports = routes;
