var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');
/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('index', { title: 'Express' });
});

const apiKey = process.env.apiKey;

//RECIPE INSTRUCTIONS
router.get('/recipe/:id', function (req, res) {
  fetch(`https://api.spoonacular.com/recipes/id=${req.params.id}/information?apiKey=${apiKey}`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
    .catch(err => res.send(err))
});

//RECIPE GENERATOR
router.get('/recipe/:ingredients', function (req, res) {
  fetch(`https://api.spoonacular.com/recipes/findByIngredients=${req.params.findByIngredients}ingredients=&apiKey=${apiKey}`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
    .catch(err => res.send(err))
});

// SHOPPING LIST
router.get('/recipe/:id/ingredient', function (req, res) {
  fetch(`https://api.spoonacular.com/recipes/id=${req.params.id}/ingredientWidget?apiKey=${apiKey}`)
    .then(res => res.text())
    .then(data => {
      console.log(data)
    })
    .catch(err => res.send(err))
});

//MEAL PLANNER
router.get('/recipe/search/:diet/:excludeIngredients/:intolerances/:cuisine', function (req, res) {
  fetch(`https://api.spoonacular.com/recipes/search?diet=${req.params.diet}&excludeIngredients${req.params.excludeIngredients}=&intolerances=${req.params.intolerances}&cuisine=${req.params.cuisine}&number=21&apiKey=${apiKey}`)
    .then(res => res.json())
    .then(data => {
      res.send(data);
    })
    .catch(err => res.send(err))
});



module.exports = router;
