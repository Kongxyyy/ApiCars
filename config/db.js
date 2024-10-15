const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('database_name', 'username', 'password', {
    host: 'your_host', // เช่น 'localhost' หรือ 'Dpg-cs72h6ogph6c73fch8p0-a'
    dialect: 'postgres',
    port: 5432, // พอร์ตที่ฐานข้อมูลใช้
});

module.exports = sequelize;
