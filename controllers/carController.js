const Car = require('../models/Car');

const carController = {
    createCar: async (req, res) => {
        try {
            const { make, model, year, price_per_day, availability, image_url } = req.body;
            const car = await Car.create({ make, model, year, price_per_day, availability, image_url });
            res.status(201).json(car);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    getAllCars: async (req, res) => {
        try {
            const cars = await Car.findAll();
            res.json(cars);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    getCarById: async (req, res) => {
        try {
            const car = await Car.findByPk(req.params.id);
            if (car) {
                res.json(car);
            } else {
                res.status(404).json({ message: 'Car not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    updateCar: async (req, res) => {
        try {
            const car = await Car.findByPk(req.params.id);
            if (car) {
                const { make, model, year, price_per_day, availability, image_url } = req.body;
                await car.update({ make, model, year, price_per_day, availability, image_url });
                res.json(car);
            } else {
                res.status(404).json({ message: 'Car not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    deleteCar: async (req, res) => {
        try {
            const car = await Car.findByPk(req.params.id);
            if (car) {
                await car.destroy();
                res.status(204).send();
            } else {
                res.status(404).json({ message: 'Car not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
};

module.exports = carController;
