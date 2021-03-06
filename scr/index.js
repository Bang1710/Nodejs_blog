const path = require('path');
const express = require("express");
const app = express();
const port = 3000;
const morgan = require('morgan')
const handlebars = require('express-handlebars')

app.use(express.static(path.join(__dirname, 'public')))

app.use(morgan('combined'))

app.engine('hbs', handlebars.engine(
	{
		extname: '.hbs',
	}
));
app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'resources\\views'));

app.get("/", (req, res) => {
	res.render('home');
});

app.get("/my-blog", (req, res) => {
	res.render('my-blog');
});
app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
