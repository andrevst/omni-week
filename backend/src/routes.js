const express = require('express');

const routes = express.Router();

//routes.get
routes.get('/',  (req, res) => {
    return res.send('hello world');
});

module.exports = routes;