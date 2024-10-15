const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Payment = require('./Payment');

const Rental = sequelize.define('Rental', {
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    carId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    rentalDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    returnDate: {
        type: DataTypes.DATE,
        allowNull: true,
    },
});

// ความสัมพันธ์: Rental มี Payment หลายรายการ
Rental.hasMany(Payment, { foreignKey: 'rentalId' });
Payment.belongsTo(Rental, { foreignKey: 'rentalId' });

module.exports = Rental;
