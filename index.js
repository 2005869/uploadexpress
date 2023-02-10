const express = require('express');
const app = express();
const SERVERPORT = 8080;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(SERVERPORT, () => {
    console.log('server run');
});