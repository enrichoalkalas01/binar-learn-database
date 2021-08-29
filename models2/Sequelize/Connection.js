const { Sequelize } = require('sequelize');

const Connection = async () => {
    const sequelize = new Sequelize(
        'test', // Database Name
        'root', // Username Mysql
        '', // Password Mysql
        { 
            host: 'localhost', // Host Mysql
            dialect: 'mysql' // Tipe Database
        }
    )

    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

exports.Connection = Connection