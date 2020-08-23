const { getAllMessages, addMessage } = require('../models/messages.js');

module.exports = {
    messages: {
        get: {
            all: async (req, res) => {
                await getAllMessages()
                    .then(response => {
                        res.status(200).json(response);
                    })
                    .catch(err => {
                        console.log('Error getting all messages', err);
                        res.status(400).json({
                            status: 400,
                            error: err
                        });
                    });
            },
            byUser: (req, res) => {
                // add once user table is set up
            }
        },
        post: async (req, res) => {
            await addMessage(req.params.message)
                .then(response => {
                    res.status(201).json({
                        status: 201,
                        message: 'Message created',
                        data: response
                    });
                })
                .catch(err => {
                    console.log('Error posting message to db', err);
                    res.status(400).json({
                        status: 400,
                        error: err
                    });
                });
        },
        put: (req, res) => {

        },
        delete: (req, res) => {

        }
    }
};