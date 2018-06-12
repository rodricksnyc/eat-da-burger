const express = require('express');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.use(methodOverride('_method'));
const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var routes = require('./routes/burger_routes.js');
app.use('/', routes);

var PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
	console.log("Listening on PORT: ", PORT);
});
