const { addMessage, getAllMessages } = require('./models/messages.js'); 

module.exports = {
    start: io => {
        // socket.io listening
        io.on('connection', (socket) => {
            
            let username = 'User';

            // user disconnects
            socket.on('disconnect', () => {
                console.log('user disconnected');
                io.emit('connectionMessage', `${username} has left the chat`);
            });

            // new user connection message
            socket.on('connectionMessage', (msg) => {
                // set username for disconnect
                username = msg.split(' ')[0];
                
                socket.broadcast.emit('connectionMessage', msg);
            });

            // user sends message
            socket.on('message', async (msg) => {
                
                // add message to db
                await addMessage(msg.message, msg.username, msg.room)
                    .then(res => {
                        console.log('Message added to db');
                    })
                    .catch(err => {
                        console.log('Error adding message to db', err);
                    });
                
                // get all messages from db
                await getAllMessages()
                    .then(res => {
                        // send all data back to client
                        io.emit('message', res.rows);
                    })
                    .catch(err => {
                        console.log('Error getting messages in Socket.on message event', err);
                    });  
            });
        });
    }
}