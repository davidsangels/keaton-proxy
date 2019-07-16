const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const httpProxy = require('http-proxy');
const apiProxy = httpProxy.createProxyServer();
const reservationServer = 'http://localhost:3001';
const reviewsServer = 'http://localhost:3003';
const data = 'http://localhost:3002';

app.use(express.static(path.resolve(__dirname, '..', 'public')));
app.use(morgan('dev'));

app.get('/bookings', (req, res) => {
    apiProxy.web(req, res, {target: reservationServer});
});

app.get('/api/places', (req, res) => {
  apiProxy.web(req, res, {target: reviewsServer});
});
  
  // Get all the reviews for a specific place
app.get('/api/reviews/:idPlace', (req, res) => {
  apiProxy.web(req, res, {target: reviewsServer});
});

// Get all the ratings for a specific place
app.get('/api/ratings/:idPlace', (req, res) => {
  apiProxy.web(req, res, {target: reviewsServer});
});

// Get all the reviews for a specific query and a specific idPlace
app.get('/api/reviews/search/:idPlace/:query', (req, res) => {
  apiProxy.web(req, res, {target: reviewsServer});
});

//David's image data
app.get('/data', (req , res) => {
    apiProxy.web(req, res, {target: data});
});

app.listen(3000);
