const Rental = require('../models/Rental');

const rentalController = {
    createRental: async (req, res) => {
        try {
            const { user_id, car_id, rental_date, return_date, total_amount } = req.body;
            const rental = await Rental.create({ user_id, car_id, rental_date, return_date, total_amount });
            res.status(201).json(rental);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    getAllRentals: async (req, res) => {
        try {
            const rentals = await Rental.findAll();
            res.json(rentals);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    getRentalById: async (req, res) => {
        try {
            const rental = await Rental.findByPk(req.params.id);
            if (rental) {
                res.json(rental);
            } else {
                res.status(404).json({ message: 'Rental not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    updateRental: async (req, res) => {
        try {
            const rental = await Rental.findByPk(req.params.id);
            if (rental) {
                const { user_id, car_id, rental_date, return_date, total_amount } = req.body;
                await rental.update({ user_id, car_id, rental_date, return_date, total_amount });
                res.json(rental);
            } else {
                res.status(404).json({ message: 'Rental not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    deleteRental: async (req, res) => {
        try {
            const rental = await Rental.findByPk(req.params.id);
            if (rental) {
                await rental.destroy();
                res.status(204).send();
            } else {
                res.status(404).json({ message: 'Rental not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
};

module.exports = rentalController;
