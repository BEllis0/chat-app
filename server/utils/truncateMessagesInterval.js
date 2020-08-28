const { truncateMessages } = require('../models/truncate.js');

/*
To avoid filling database
Set an interval to truncate messages table in db
Use: pass in a number of milliseconds for interval
1 Month = 2592000000
*/

module.exports.truncateMessagesInterval = (milliseconds) => {
    setInterval(() => {
        truncateMessages()
            .then((response) => {
                console.log(`Messages Table Truncated. Will truncate again in ${milliseconds} ms`);
            })
            .catch(err => {
                console.log('Error truncating messages table in interval');
            });
    }, milliseconds)
};