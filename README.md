
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