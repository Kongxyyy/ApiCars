const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Rental = require('./Rental');

const User = sequelize.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

// ความสัมพันธ์: User มี Rental หลายรายการ
User.hasMany(Rental, { foreignKey: 'userId' });
Rental.belongsTo(User, { foreignKey: 'userId' });

module.exports = User;
