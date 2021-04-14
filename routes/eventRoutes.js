const Event = require('../models/Event');

module.exports = (app) => {

    app.post('/api/events/new', async (req, res) => {
        res.header('Access-Control-Allow-Credentials', true);
        res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
        
        const event = await new Event(req.body);
        await event.save();

        res.send(req.body.name);
    });

    app.get('/api/all-events', async (req, res) => {
        res.header('Access-Control-Allow-Credentials', true);
        res.header('Access-Control-Allow-Origin', 'http://localhost:3000');

        const events = await Event.find({});
        
        res.send(events);
    })

}