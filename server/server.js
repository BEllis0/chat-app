const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const dbConnection = require('../database/config.js');

const path = require('path');

require('dotenv').config();

const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

// load socket handlers, pass in io object
const socket_events = require('./socket_events.js');
socket_events.start(io);

const PORT = process.env.PORT || 3000;

// middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// ==== serve static files
app.use(express.static(path.join(__dirname, '../client/public')));

//server listen
http.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});