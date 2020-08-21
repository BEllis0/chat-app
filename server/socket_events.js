const { addMessage } = require('./models/messages.js');

module.exports = {
    start: io => {
        // socket.io listening
        io.on('connection', (socket) => {
            console.log('a user connected');

            // user disconnects
            socket.on('disconnect', () => {
                console.log('user disconnected');
            });

            // user sends message
            socket.on('message', (msg) => {
                
                addMessage(msg)
                    .then(res => {
                        console.log('Message Added')
                    })
                    .catch(err => {
                        console.log('Error adding message to db', err);
                    });
            });
        });
    }
}