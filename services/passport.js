const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');


const User = mongoose.model('users'); //users model was appended to mongoose object in User.js model file

//create cookie with ID from database to send to client
passport.serializeUser((user, done) => { //user comes from if/else statement of codeblock below in passport.use
    done(null, user.id); //user.id is NOT the profile / google ID in our schema, it's a database-specific id created at each entry by Mongo
    //turns user model instance into an id stuffed into a cookie sent to client
});

//when we receive a request from client, get ID from cookie to retrieve full user info from database
passport.deserializeUser((id, done) => {
    //turns an id from cookie into mongoose model instance for full profile
    User.findById(id)
    .then(user => {
        console.log('User inside deserialize: ', user);
        done(null, user);
    })
});

//Passport library config
passport.use('google', new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback',
            proxy: true
        }, async (accessToken, refreshToken, profile, done) => { //this step occurs when user hits /auth/google/callback, a code is exchanged for its corresponding Google profile
            const existingUser = await User.findOne({ googleId: profile.id });
            if(existingUser) {
                done(null, existingUser); //All done, send user we found
            } 
            else {
                const newUser = await new User({
                    googleId: profile.id,
                    firstName: profile.name.givenName,
                    lastName: profile.name.familyName,
                    email: profile.emails[0].value,
                    photo: profile.photos[0].value
                }).save();
                
                done(null, newUser); //All done, send user we created
            }
        }
    )
); 