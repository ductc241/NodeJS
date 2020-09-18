const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const { Console } = require('console');
const app = express();
const port = 3000;

const route = require('./routes/index');
const db = require('./config/db');

//connnet to db
db.connect()

//static filey
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({
	extended: true
}));
app.use(express.json())

//template engine
app.engine('hbs', exphbs({
	extname: ".hbs"
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views'));


//route initSs
route(app);

app.listen(port, () => console.log(`listen from port ${port}`))