const { Pool, Client } = require('pg');

const localConfig = {
    user: process.env.USER,
    host: process.env.HOST,
    database: 'chat_app',
    password: process.env.PASSWORD,
    port: '5432',
};

const productionConfig = {
    user: process.env.PROD_USER,
    host: process.env.PROD_HOST,
    database: process.env.PROD_DB,
    password: process.env.PROD_PASSWORD,
    port: '5432',
};


// set config based on local or prod
const config = process.env.NODE_ENV === 'production' ? productionConfig : localConfig;

console.log('Environment: ', process.env.NODE_ENV);

module.exports.dbConnection = new Pool(config);

module.exports.dbConnection.connect((err) => {
    if (err) {
        console.log(`Error connecting to db: ${err}`);
    } else {
        console.log('Successfully connected to database');
    }
});

// handle errors in idle clients
module.exports.dbConnection.on('error', (err, client) => {
    if (err) {
        console.log(`Error in idle client: ${err}`);
    }
});

module.exports.dbConnection.on('acquire', (client) => {
    console.log('Client checked out from the pool')
});

module.exports.dbConnection.on('remove', (client) => {
    console.log('Client closed and removed');
});