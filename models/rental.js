const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./user');
const Car = require('./car');

const Rental = sequelize.define('Rental', {
    rental_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'user_id',
        },
    },
    car_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Car,
            key: 'car_id',
        },
    },
    rental_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    return_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    total_amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
}, {
    tableName: 'Rentals',
    timestamps: false,
});

module.exports = Rental;
