const Channel = require('../models/Channel');


module.exports = {
    async index(req, res) {
        try {
            const channelListByLanguage = await Channel.find({ language: req.params.language }, ' key channel link language -_id');
            return res.json(channelListByLanguage)
        } catch (err) {
            console.log(err);
            return res.json({ message: 'An error occurred while trying to perform the operation' });
        }
    }
}