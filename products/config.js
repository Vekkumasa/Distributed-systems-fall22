const config = {
    db_read: {
        /* don't expose password or any sensitive info, done only for demo */
        host: process.env.MYSQL_HOST_READ,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        // database: process.env.MYSQL_DATABASE,
        port: 3306
    },
    db_write: {
        /* don't expose password or any sensitive info, done only for demo */
        host: process.env.MYSQL_HOST_WRITE,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        // database: process.env.MYSQL_DATABASE,
        port: 3306
    },
};
module.exports = config;