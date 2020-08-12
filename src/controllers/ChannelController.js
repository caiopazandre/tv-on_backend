const Channel = require('../models/Channel');


module.exports = {
    //list
    async index(req, res) {
        try {
            const channelList = await Channel.find({}, 'key channel link language -_id');
            return res.json(channelList);
        } catch (err) {
            console.log(err);
            return res.json({ message: 'An error occurred while trying to perform the operation' });
        }
    },
    //show
    async show(req, res) {
        try {
            const channelOne = await Channel.findOne({ channel: req.params.channel }, ' key channel link language -_id');
            return res.json(channelOne)
        } catch (err) {
            console.log(err);
            return res.json({ message: 'An error occurred while trying to perform the operation' });
        }
    },
    //create
    async store(req, res) {
        try {
            const {key, channel, link, language } = req.body
            const keyExist = await Channel.findOne({ key });
            const linkExist = await Channel.findOne({ link });

            if (!keyExist & !linkExist) {
                const channelCreate = await Channel.create({
                    key,
                    channel,
                    link,
                    language,
                });
                return res.json(channelCreate);
            } else {
                return res.json({ message: 'The channel already exists!' });
            }
        } catch (err) {
            console.log(err);
            return res.json({ message: 'An error occurred while trying to perform the operation' });
        }
    },
    //update
    async update(req, res) {
        try {
            const id = req.params.id;
            const { channel, link, language, log, createdAt } = req.body
            const channelUpdate = await Channel.updateOne({ _id: id },
                {
                    channel,
                    link,
                    language,
                    logo: undefined,
                    createdAt: undefined,
                }
            );
            return res.json(channelUpdate);
        } catch (err) {
            console.log(err);
            return res.json({ message: 'An error occurred while trying to perform the operation' });
        }
    },
    //delete
    async destroy(req, res) {
        try {
            const channel = req.params.channel;
            const channelDelete = await Channel.deleteOne({ channel: channel })
            return res.json(channelDelete);
        } catch (err) {
            console.log(err);
            return res.json({ message: 'An error occurred while trying to perform the operation' });
        }
    },
}