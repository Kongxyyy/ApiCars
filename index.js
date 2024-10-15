const express = require('express');
const sequelize = require('./config/db');
const routes = require('./routes/index');
const User = require('./models/User');
const Car = require('./models/Car');
const Rental = require('./models/Rental');
const Payment = require('./models/Payment');

const app = express();
app.use(express.json());
app.use('/api', routes);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
    console.log("Database & tables created!");
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}).catch(error => console.error(error));
