const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const { Console } = require('console');
const app = express();
const port = 3000;

const route = require('./routes/index');

//connnet to db
const db = require('./config/db');
db.connect()



//static file
app.use(express.static(path.join(__dirname, 'public')));
// xét đường dẫn đến các file tĩnh để có thể truy cập bằng url


// xử lý data đc gửi bằng post(form-data) => req.body.(**)
app.use(express.urlencoded({
	extended: true
}));
app.use(express.json())

//template engine
app.engine('hbs', exphbs({
	extname: ".hbs"
}));
app.set('view engine', 'hbs');

// chỉnh lại đường dẫn view so với layout_folder gốc
app.set('views', path.join(__dirname, 'resources', 'views'));


//chạy app
route(app);

app.listen(port, () => console.log(`listen from port ${port}`))


// npm start: khoi dong app