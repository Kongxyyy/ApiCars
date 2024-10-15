const Rental = require('../models/Rental');

// สร้างการเช่ารถใหม่
exports.createRental = async (req, res) => {
    try {
        const rental = await Rental.create(req.body);
        res.status(201).json(rental);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// ดึงการเช่าทั้งหมด
exports.getRentals = async (req, res) => {
    try {
        const rentals = await Rental.findAll();
        res.status(200).json(rentals);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// ค้นหาการเช่ารถตาม ID
exports.getRentalById = async (req, res) => {
    try {
        const rental = await Rental.findByPk(req.params.id);
        if (!rental) {
            return res.status(404).json({ message: 'Rental not found' });
        }
        res.status(200).json(rental);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// แก้ไขการเช่ารถ
exports.updateRental = async (req, res) => {
    try {
        const [updated] = await Rental.update(req.body, {
            where: { rental_id: req.params.id },
        });
        if (!updated) {
            return res.status(404).json({ message: 'Rental not found' });
        }
        const updatedRental = await Rental.findByPk(req.params.id);
        res.status(200).json(updatedRental);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// ลบการเช่ารถ
exports.deleteRental = async (req, res) => {
    try {
        const deleted = await Rental.destroy({
            where: { rental_id: req.params.id },
        });
        if (!deleted) {
            return res.status(404).json({ message: 'Rental not found' });
        }
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
