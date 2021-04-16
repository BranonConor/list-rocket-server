const Event = require('../models/Event');
const User = require('../models/User');

module.exports = (app) => {

    app.post('/api/events/new', async (req, res) => {
        res.header('Access-Control-Allow-Credentials', true);
        res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
        //Create new event with request details
        const event = await new Event({
            name: req.body.name,
            description: req.body.description,
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
        if(req.user) {
            const user = await User.findById(req.user._id).populate('events');
            res.send(user.events);
        } else {
            const user = {
                events: []
            };
            res.send(user.events);
        }
    })

    //GET AN EVENT
    app.get('/api/events/:id', async (req, res) => {
        res.header('Access-Control-Allow-Credentials', true);
        res.header('Access-Control-Allow-Origin', 'http://localhost:3000');

        const event = await Event.findById(req.params.id).populate({ path:"creator", model:"users" });
        res.send(event);
    })

    // DELETE AN EVENT
    app.delete('/api/events/:id', async (req, res) => {
        res.header('Access-Control-Allow-Credentials', true);
        res.header('Access-Control-Allow-Origin', 'http://localhost:3000');

        //First, remove it from the events array of the Event's creator
        const event = await Event.findById(req.params.id);
        const user = await User.findById(event.creator);

        //Find the event in the user's events array and remove it
        user.events = user.events.filter(item => {
            return item != req.params.id;
        });
        await user.save();
        //Now delete the event itself
        await Event.findByIdAndDelete(req.params.id);

        res.send(event);
    })
    
}