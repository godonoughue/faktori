
     ,-----.,--.                  ,--. ,---.   ,--.,------.  ,------.
    '  .--./|  | ,---. ,--.,--. ,-|  || o   \  |  ||  .-.  \ |  .---'
    |  |    |  || .-. ||  ||  |' .-. |`..'  |  |  ||  |  \  :|  `--, 
    '  '--'\|  |' '-' ''  ''  '\ `-' | .'  /   |  ||  '--'  /|  `---.
     `-----'`--' `---'  `----'  `---'  `--'    `--'`-------' `------'
    ----------------------------------------------------------------- 


Hi there! Welcome to Cloud9 IDE!

To get you started, create some files, play with the terminal,
or visit http://docs.c9.io for our documentation.
If you want, you can also go watch some training videos at
http://www.youtube.com/user/c9ide.

Happy coding!
The Cloud9 IDE team

npm install -g bower
npm install -g express
npm install -g express-session
npm install -g method-override
npm install -g express-generator
npm install -g grunt

express --hbs --cess stylus
npm install --save i18n
npm install --save passport
npm install

bower install jquery
bower install bootstrap

mkdir -p config/locales
mkdir views/partials/
mv public/javascripts public/scripts

ln -s bower_components/bootstrap/dist public/stylesheets/bootstrap
ln -s bower_components/jquery/dist public/scripts/jquery

app.js
var i18n = require('i18n');
var hbs = require('hbs');

app.use(cookieParser());

i18n.configure({
    // setup some locales - other locales default to en silently
    locales: ['en', 'fr'],

    // you may alter a site wide default locale
    defaultLocale: 'fr',

    // sets a custom cookie name to parse locale settings from
    cookie: 'locale',

    // where to store json files
    directory: path.join(__dirname, "config/locales")
});

// init i18n module for this loop
app.use(i18n.init);

hbs.registerPartials(path.join(__dirname, 'views/partials'));

// register hbs helpers in res.locals' context which provides this.locale
hbs.registerHelper('__', function () {
    return i18n.__.apply(this, arguments);
});

hbs.registerHelper('__n', function () {
    return i18n.__n.apply(this, arguments);
});