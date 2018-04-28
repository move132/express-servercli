var express = require('express'),
    path = require('path'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    bodyParser = require('body-parser');
var logger = require('morgan');
var routes = require('./home');
var fs=require('fs');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



app.use(logger('dev'));
app.use(logger('short', {
  stream: fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'})
}))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(express.static(path.join(__dirname, './webapp/')));

//跨域问题处理
// app.use(cors());
app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, PATCH,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials', 'true'); //告诉客户端可以在HTTP请求中带上Cookie
    next();
})

app.use('/', routes);

 
app.listen(3002, function() {
    console.log('hbgms_vueweb/',`Please open in the browser localhost:3002/`);
});
    
