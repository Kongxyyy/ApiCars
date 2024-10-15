const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('Apicar_um2j', 'Apicar_um2j_user', 'p7I6knjui7XkgeouZvxCkCVoM3MKK0ti', {
    host: 'Dpg-cs72h6ogph6c73fch8p0-a',
    dialect: 'postgres',
});

module.exports = sequelize;
