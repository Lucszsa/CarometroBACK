module.exports = {
    development: {
        username: process.env.DB_USER || 'root',

        password: 'senaisp',
        database: 'carometro',
        host: 'localhost',
        port: 3306,
        dialect: 'misql',
        logging: false

    },
}