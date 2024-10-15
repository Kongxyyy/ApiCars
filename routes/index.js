const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const carController = require('../controllers/carController');
const rentalController = require('../controllers/rentalController');
const paymentController = require('../controllers/paymentController');

// User routes
router.post('/users', userController.createUser);
router.get('/users', userController.getUsers);
router.get('/users/:id', userController.getUserById);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);
router.post('/login', userController.login);

// Car routes
router.post('/cars', carController.createCar);
router.get('/cars', carController.getCars);
router.get('/cars/:id', carController.getCarById);
router.put('/cars/:id', carController.updateCar);
router.delete('/cars/:id', carController.deleteCar);

// Rental routes
router.post('/rentals', rentalController.createRental);
router.get('/rentals', rentalController.getRentals);
router.get('/rentals/:id', rentalController.getRentalById);
router.put('/rentals/:id', rentalController.updateRental);
router.delete('/rentals/:id', rentalController.deleteRental);

// Payment routes
router.post('/payments', paymentController.createPayment);
router.get('/payments', paymentController.getPayments);
router.get('/payments/:id', paymentController.getPaymentById);
router.put('/payments/:id', paymentController.updatePayment);
router.delete('/payments/:id', paymentController.deletePayment);

module.exports = router;
