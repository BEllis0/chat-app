const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const path = require('path');

require('dotenv').config();

const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const PORT = process.env.PORT || 3000;

// middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// ==== serve static files
app.use(express.static(path.join(__dirname, '../client/public')));


// socket.io listening
io.on('connection', (socket) => {
    console.log('a user connected');

    // user disconnects
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    // user sends message
    socket.on('message', (msg) => {
        console.log('message: ' + msg);
    });
  });

//server listen
http.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});