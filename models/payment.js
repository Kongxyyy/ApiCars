const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Rental = require('./Rental');

const Payment = sequelize.define('Payment', {
    payment_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    amount: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    payment_date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    rental_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Rental,
            key: 'rental_id'
        }
    }
}, {
    timestamps: true
});

Rental.hasMany(Payment, { foreignKey: 'rental_id' });
Payment.belongsTo(Rental, { foreignKey: 'rental_id' });

module.exports = Payment;
