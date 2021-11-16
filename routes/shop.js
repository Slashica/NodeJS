const express = require('express');
const path = require('path');

const router = express.Router();

const rootDir = require('../util/path');

router.get('/', (request, response, next) => {
    console.log('next into the middleware');
    response.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;