const Car = require('../models/Car');

// สร้างรถใหม่
exports.createCar = async (req, res) => {
    try {
        const car = await Car.create(req.body);
        res.status(201).json(car);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// ดึงรถทั้งหมด
exports.getCars = async (req, res) => {
    try {
        const cars = await Car.findAll();
        res.status(200).json(cars);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// ค้นหารถตาม ID
exports.getCarById = async (req, res) => {
    try {
        const car = await Car.findByPk(req.params.id);
        if (!car) {
            return res.status(404).json({ message: 'Car not found' });
        }
        res.status(200).json(car);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// แก้ไขรถ
exports.updateCar = async (req, res) => {
    try {
        const [updated] = await Car.update(req.body, {
            where: { car_id: req.params.id },
        });
        if (!updated) {
            return res.status(404).json({ message: 'Car not found' });
        }
        const updatedCar = await Car.findByPk(req.params.id);
        res.status(200).json(updatedCar);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// ลบรถ
exports.deleteCar = async (req, res) => {
    try {
        const deleted = await Car.destroy({
            where: { car_id: req.params.id },
        });
        if (!deleted) {
            return res.status(404).json({ message: 'Car not found' });
        }
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
