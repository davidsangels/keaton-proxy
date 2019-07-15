const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const httpProxy = require('http-proxy');
const apiProxy = httpProxy.createProxyServer();
const reservationServer = 'http://localhost:3001';

app.use(express.static(path.resolve(__dirname, '..', 'public')));
app.use(morgan('dev'));

app.get('/bookings', (req, res) => {
    apiProxy.web(req, res, {target: reservationServer});
});

app.listen(3000);
