const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./User');
const Car = require('./Car');

const Rental = sequelize.define('Rental', {
    rental_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    rental_date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    return_date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    total_amount: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'user_id'
        }
    },
    car_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Car,
            key: 'car_id'
        }
    }
}, {
    timestamps: true
});

User.hasMany(Rental, { foreignKey: 'user_id' });
Car.hasMany(Rental, { foreignKey: 'car_id' });
Rental.belongsTo(User, { foreignKey: 'user_id' });
Rental.belongsTo(Car, { foreignKey: 'car_id' });

module.exports = Rental;
