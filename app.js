const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

const port = 3000;

app.set('views', path.join(__dirname, 'Resources/views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/Public'));

const category_route = require('./Router/category.route');
const page_route = require('./Router/pages.route');

category_route(app);
page_route(app);

app.listen(port, ()=> {
    console.log(`Server is running: http://localhost:${port}`);
});