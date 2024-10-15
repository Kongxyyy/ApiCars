const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('apicar_2hn6', 'apicar_2hn6_user', '1UlqYtTwGuvVstqRXN09rDipkm64gG0n', {
    host: 'dpg-cs73dujtq21c73cmk1ig-a', // ชื่อโฮสต์ที่ถูกต้อง
    dialect: 'postgres',
    port: 5432, // พอร์ตที่ฐานข้อมูลใช้
});

module.exports = sequelize;
