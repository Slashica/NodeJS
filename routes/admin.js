const express = require('express');
const path = require('path');

const router = express.Router();

const rootDir = require('../util/path');

router.get('/add-product', (request, response, next) => {
    //response.send('<html><form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add product</button></form></html>');
    response.sendFile(path.join(rootDir, 'views', 'add-product.html'));
}); //middleware function

router.post('/add-product', (request, response, next) => {
    console.log(request.body);
    response.redirect('/');
});

module.exports = router;