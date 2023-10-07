const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const helpers = require('./utils/helpers');

// const routes = require('./routes');
// import sequelize connection
const sequalize = require('./config/connection')
const SequelizeStore = require('connect-session-sequelize')(session.Store);


const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequalize
  })
};



const app = express();
const PORT = process.env.PORT || 3001;

app.use(session(sess));
app.use(function (req, res, next) {
    res.locals.session = req.session;
    next();
});

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/'));

// sync sequelize models to the database, then turn on the server
sequalize.sync({force: false}).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });

})

