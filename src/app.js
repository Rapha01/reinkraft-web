const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./routes');
const app = express();




//view Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Basic Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));

// Set Routes
app.use(routes);

//app.get('/', function(req, res){
//  res.render('index');
//})

app.listen(3004, function(){
  console.log("listening to 3004");
});
