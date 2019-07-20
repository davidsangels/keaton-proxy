const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const httpProxy = require('http-proxy');
const apiProxy = httpProxy.createProxyServer();
const reservationServer = 'http://13.57.205.162';
// const reservationServer = 'http://localhost:3001';
const reviewsServer = 'http://18.224.181.77';
const data = 'http://13.56.158.243';

app.use('/:idPlace', express.static(path.resolve(__dirname, '..', 'public')));
app.use(morgan('dev'));

app.get('/something', (req ,res) => {
  console.log('the something path');
  res.send('helloasfasdfasdf');
})

app.get('/bookings/:idPlace', (req, res) => {
    apiProxy.web(req, res, {target: reservationServer});
});

app.get('/reviews/:idPlace', (req, res) => {
  apiProxy.web(req, res, {target: reviewsServer});
});
  
  // Get all the reviews for a specific place
app.get('/reviews/ratings/:idPlace', (req, res) => {
  apiProxy.web(req, res, {target: reviewsServer});
});

// Get all the ratings for a specific place
app.get('/reviews/search/:idPlace/:query', (req, res) => {
  apiProxy.web(req, res, {target: reviewsServer});
});

//David's image data
app.get('/data', (req , res) => {
    apiProxy.web(req, res, {target: data});
});

app.listen(3000, () => {
  console.log('qwerqwer');
});
