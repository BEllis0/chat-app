const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const dbConnection = require('../database/config.js');

// routes
const messagesRoutes = require('./routes/messages.js');

const path = require('path');

require('dotenv').config();

const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

// load socket handlers, pass in io object
const socket_events = require('./socket_events.js');
socket_events.start(io);

// routes
app.use('/api/v1/messages', messagesRoutes);

const PORT = process.env.PORT || 3000;

// middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// ==== serve static files
app.use(express.static(path.join(__dirname, '../client/public')));

//routes everything to html page, troubleshoots refreshing
app.get(/.*/, (req, res) => {
    res.sendFile(path.join(__dirname, '../client/public/index.html'));
});

//server listen
http.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});