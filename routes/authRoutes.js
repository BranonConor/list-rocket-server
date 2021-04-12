const passport = require('passport');

module.exports = (app) => {
    //Oauth auth get user code route
    app.get('/auth/google',
        passport.authenticate('google', { //passport.use(new GoogleStrategy) above creates new google strategy instance identified as 'google', passed in here
            scope: ['profile', 'email'] //asking Google for the users' email and profile
        })
        //gives us a code that can be used in next step to retrieve full profile, sends us to /auth/google/callback
    );
    
    //Oauth auth profile retrieval route
    app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
        res.redirect('http://localhost:3000/dashboard');
    });

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.redirect('http://localhost:3000');
    });
    
    app.get('/api/current_user', (req, res) => {
        res.header('Access-Control-Allow-Credentials', true);
        res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
        console.log('User route: ', req.user);
        res.send(req.user); //user is appended to request object from passport code (deserialize) if user is authenticated
    });
}