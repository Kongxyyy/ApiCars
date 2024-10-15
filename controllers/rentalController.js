const Rental = require('../models/Rental');

exports.createRental = async (req, res) => {
    try {
        const rental = await Rental.create(req.body);
        res.status(201).json(rental);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getRentals = async (req, res) => {
    try {
        const rentals = await Rental.findAll();
        res.status(200).json(rentals);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getRentalById = async (req, res) => {
    try {
        const rental = await Rental.findByPk(req.params.id);
        if (rental) {
            res.status(200).json(rental);
        } else {
            res.status(404).json({ message: 'Rental not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateRental = async (req, res) => {
    try {
        const rental = await Rental.findByPk(req.params.id);
        if (rental) {
            await rental.update(req.body);
            res.status(200).json(rental);
        } else {
            res.status(404).json({ message: 'Rental not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteRental = async (req, res) => {
    try {
        const rental = await Rental.findByPk(req.params.id);
        if (rental) {
            await rental.destroy();
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Rental not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
