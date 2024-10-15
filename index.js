const express = require('express');
const app = express();
const port = 3000;

const userRoutes = require('./routes/userRoutes');
const carRoutes = require('./routes/carRoutes');
const rentalRoutes = require('./routes/rentalRoutes');
const paymentRoutes = require('./routes/paymentRoutes');

app.use(express.json());

// เชื่อมต่อเส้นทาง
app.use('/api', userRoutes);
app.use('/api', carRoutes);
app.use('/api', rentalRoutes);
app.use('/api', paymentRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
