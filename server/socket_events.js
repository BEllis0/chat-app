const { addMessage, getAllMessages } = require('./models/messages.js'); 

module.exports = {
    start: io => {
        // socket.io listening
        io.on('connection', (socket) => {
            
            // message for new user
            // socket.emit('message', 'Welcome to chat');

            socket.emit('chatMessage', 'test message')

            // broadcast is shared with all connections other than new user
            // socket.broadcast.emit('message', 'A user has joined the chat');
            
            // user disconnects
            socket.on('disconnect', () => {
                console.log('user disconnected');
                // io.emit('message', 'A user has left the chat')
            });

            // user sends message
            socket.on('message', async (msg) => {
                
                await addMessage(msg)
                    .then(res => {
                        console.log('Message added to db');
                    })
                    .catch(err => {
                        console.log('Error adding message to db', err);
                    });
                
                await getAllMessages()
                    .then(res => {
                        io.emit('message', res.rows);
                    })
                    .catch(err => {
                        console.log('Error getting messages in Socket.on message event', err);
                    });  
            });
        });
    }
}