const http = require('http');
const path = require('path');

const express = require('express');
//const bodyParser = require('body-parser'); //depricated

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const rootDir = require('./util/path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((request, response, next) => {
    // response.status(404).send('<h1>Page not found</h1>')
    response.status(404).sendFile(path.join(rootDir, 'views', 'not-found.html'));
});

app.listen(3000); //port setting 