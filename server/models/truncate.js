const dbConnection = require('../../database/config.js');

/* 
Truncate table helpers
*/

// messages table
module.exports.truncateMessages = () => {
    return new Promise((reject, resolve) => {
        let query = `TRUNCATE TABLE chat_app.messages`;

        dbConnection.query(query, (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        })
    });
};

// users table
module.exports.truncateUsers = () => {
    return new Promise((reject, resolve) => {
        let query = `TRUNCATE TABLE chat_app.users`;

        dbConnection.query(query, (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        })
    });
};