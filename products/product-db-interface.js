const mysql = require('mysql');
const config = require('./config');

function get_connection(read){
    try {
        if (read) {
            connection = mysql.createConnection(config.db_read);
        } else {
            connection = mysql.createConnection(config.db_write);
        } return connection
    } catch (e){
        throw e
    }
}

// async function query(read, sql, params) {
//     let connection;
//
//
//     const [results, ] = await connection.execute(sql, params);
//
//     return results;
// }

module.exports = {
    // query,
    get_connection
}