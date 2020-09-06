const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const { Console } = require('console');
const app = express();
const port = 3000;

//static file
app.use(express.static(path.join(__dirname, 'public')));

//template engine
app.engine('hbs', exphbs({
	extname: ".hbs"
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views'));


app.get('/', (rep, res) =>  res.render('home'));

app.get('/search', (req,res) => {
	res.render('search');
});

app.get('/result', (req,res) => {
	console.log(req.query.q)
})

app.listen(port, () => console.log(`listen from port ${port}`))