const { Router } = require('express');
const routes = Router();
const ChannelController = require('./controllers/ChannelController');
const SearchController = require('./controllers/SearchController');


routes.get('/', (req, res) => {
    res.json({
        message: 'ChannelsAPI',
        version: '1.0.0'
    });
});

routes.get('/channels', ChannelController.index);
routes.get('/channels/:channel', ChannelController.show);
routes.post('/channels', ChannelController.store);
routes.put('/channels/:id', ChannelController.update); 
routes.delete('/channels/:channel/', ChannelController.destroy);

routes.get('/channels/search/:language', SearchController.index);


module.exports = routes;