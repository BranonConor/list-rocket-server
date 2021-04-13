const Event = require('../models/Event');

module.exports = (app) => {

    app.post('/api/events/new', (req, res) => {
        res.header('Access-Control-Allow-Credentials', true);
        res.header('Access-Control-Allow-Origin', 'http://localhost:3000');

        console.log('Request body in server: ', req.body);
        res.send(req.body.name);
    });

}