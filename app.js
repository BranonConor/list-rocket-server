const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User'); //must come before passport auth code so User model exists
require('./services/passport');
const authRoutes = require('./routes/authRotues'); //import auth routes

mongoose.connect(keys.mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

//Initialize express app
const app = express();

//middleware that helps encode the cookie id and declare how long it should last
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);    
app.use(passport.initialize());
app.use(passport.session());

authRoutes(app); //execute auth routes with app object

const PORT = process.env.PORT || 5000;
app.listen(PORT);