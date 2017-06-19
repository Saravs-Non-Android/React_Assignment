/**
 * Created by IMFCORP\mohanpratap.singh on 27/3/17.
 */
var express = require("express");
var path = require("path");
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();
var restaurant =  require('./src/controller/restaurantController');
var order =  require('./src/controller/orderController');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname,"../app/dist")));

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, Content-type,Accept,X-Access-Token,X-Key');
    res.header('Access-Control-Allow-Origin', '*');
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.get('/', function (req, res) {
    res.send({status:200,message:'OK'});
    res.end();
});

app.post('/api/restaurant', restaurant.createRestaurant);
app.get('/api/restaurant', restaurant.getAll);
app.get('/api/restaurant/search', restaurant.search);
app.post('/api/restaurant/order', order.createOrder);


app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

app.listen(8888,function(){
    console.log("Started listening on port", 8888);
});

