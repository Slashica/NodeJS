const { request, response } = require('express');
const express = require('express');

const app = express();

/* app.use((request, response, next) => {
    console.log('First middleware');
    response.send('<h1>Welcome page!</h1>');
    next();
})

app.use((request, reponse, next) => {
    console.log('Second middleware');
}) */

app.use('/users', (request, response, next) => {
    response.send('<h1>Users page</h1>');
})

app.use('/',(request, response, next) => {
    response.send('<h1>Welcome Page!</h1>');
})


app.listen(3000);