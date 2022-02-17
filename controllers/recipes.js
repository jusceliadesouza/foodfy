const data = require("../data");

exports.index = function (req, res) {
  return res.render("admin/recipes/index", { recipes: data });
};

exports.show = function (req, res) {
  const { id } = req.params

    const foundRecipe = data.find(function(recipe) {
        return recipe.id == id
    })
    
    if(!foundRecipe) return res.render('not-found')   

    const recipe = {
        ...foundRecipe,
         ingredients: Array.from(foundRecipe.ingredients),
         preparation: Array.from(foundRecipe.preparation),
         created_at: new Intl.DateTimeFormat('pt-BR').format(foundRecipe.created_at),
    }

    return res.render('admin/recipes/show', { recipe }) 
};
