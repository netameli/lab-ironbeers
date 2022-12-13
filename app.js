const express = require('express');

const hbs = require('hbs');
const path = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');
const PORT = 3000;
const app = express();
const punkAPI = new PunkAPIWrapper();

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

// Register the location for handlebars partials here:

hbs.registerPartials(__dirname + '/views/partials')

app.get('/', (req, res, next) => {
  res.render('index');
});

app.get('/beers',(req, res, next) => {
  punkAPI.getBeers()
  .then(beers => {
    const items = beers;
    res.render('beers',{items});
  })
  .catch(error => {
    console.log(error)
  })
})
app.get('/randomBeer',(req, res, next) => {
  punkAPI.getRandom()
  .then(beers => {
    const items = beers;
    res.render('randomBeer',{items});
  })
  .catch(error => {
    console.log(error)
  })
  
})
// app.get('/beers', (req, res, ) => {
// //   const beers = punkAPI.getBeers();
// //   beers.then(beersFromApi => { 
// //     console.log('Beers from the database: ', beersFromApi); 
// //     res.render('beers', (allBeers: ))
// //     )
// //   res.render('index');
// // });

// app.get('/random-beer', (reg, res) => {
//   const randomBeer = punkAPI.getRandom () ;
//   randomBeer. then (randomBeerFromApi => {
//     console. log ('Beers from the database:' randomBeerFromApi):
//   res.render ('beers', (randomBeer: randomBeerFromApi);
//   .catch(error => console. log(error));

// });


// Add the route handlers here:

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(3000, () => console.log('🏃‍ on port 3000'));
