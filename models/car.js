const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Rental = require('./Rental');

const Car = sequelize.define('Car', {
    make: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    model: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
});

// ความสัมพันธ์: Car มี Rental หลายรายการ
Car.hasMany(Rental, { foreignKey: 'carId' });
Rental.belongsTo(Car, { foreignKey: 'carId' });

module.exports = Car;
