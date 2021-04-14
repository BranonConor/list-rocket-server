const Event = require('../models/Event');
const User = require('../models/User');

module.exports = (app) => {

    app.post('/api/events/new', async (req, res) => {
        res.header('Access-Control-Allow-Credentials', true);
        res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
        //Create new event with request details
        const event = await new Event({
            name: req.body.name,
            creator: req.body.creator
        });
        await event.save();

        //Add new event to user's array of events
        const user = await User.findById(req.body.creator);
        await user.events.push(event._id);
        await user.save();
        res.send(req.body.name);
    });

    app.get('/api/events/all', async (req, res) => {
        res.header('Access-Control-Allow-Credentials', true);
        res.header('Access-Control-Allow-Origin', 'http://localhost:3000');

        const user = await User.findById(req.user._id).populate('events');
        res.send(user.events);
    })
    
}