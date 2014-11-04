var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var hbs = require('hbs');
var i18n = require('i18n');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

i18n.configure({
    // setup some locales - other locales default to en silently
    locales: ['en', 'fr'],

    // you may alter a site wide default locale
    defaultLocale: 'en',
    
    // sets a custom cookie name to parse locale settings from
    cookie: 'locale',
    
    // where to store json files
    directory: path.join(__dirname, "config/locales")
});

// init i18n module for this loop
app.use(i18n.init);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

hbs.registerPartials(path.join(__dirname, 'views/partials'));
 
// register hbs helpers in res.locals' context which provides this.locale
hbs.registerHelper('__', function () {
    return i18n.__.apply(this, arguments);
});

hbs.registerHelper('__n', function () {
    return i18n.__n.apply(this, arguments);
});

hbs.registerHelper('active', function(pid) {
    if (pid === this.pid) {
        return ' class=active';   
    }
});

app.use(function(req, res, next) {
    res.locals.brand = "Faktori";
    
    var lang = req.query.lang || req.getLocale();
    res.setLocale(lang);
    req.setLocale(lang);
    i18n.setLocale(lang);
    res.locals.lang = lang.toUpperCase();

    res.locals.backUrl = req.header('Referer') || '/';
    res.locals.url = req.path;
    if (req.path === '/') {
        res.locals.pid = 'home';
    }
    else {
        res.locals.pid = req.originalUrl.substring(1);
    }
    next();
});

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;