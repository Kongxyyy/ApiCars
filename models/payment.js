// models/payment.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('./user');
const Rental = require('./rental');

const Payment = sequelize.define('Payment', {
    amount: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    payment_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    payment_method: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: true,
});

// กำหนดความสัมพันธ์
Payment.belongsTo(Rental, { foreignKey: 'rentalId' });

module.exports = Payment;
