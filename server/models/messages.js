const {dbConnection} = require('../../database/config.js');


// TODO: Add user parameters once user table set up

module.exports.addMessage = (message) => {
    return new Promise((resolve, reject) => {
        
        let query = `INSERT INTO chat_app.messages (
            message
        ) VALUES (
            '${message}'
        )`;

        dbConnection.query(query, (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        });
    });
};

// get every message in db
module.exports.getAllMessages = () => {
    return new Promise((resolve, reject) => {
        let query = `SELECT * FROM chat_app.messages`;

        dbConnection.query(query, (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        });
    });
};