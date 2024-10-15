const Payment = require('../models/Payment');

// สร้างการชำระเงินใหม่
exports.createPayment = async (req, res) => {
    try {
        const payment = await Payment.create(req.body);
        res.status(201).json(payment);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// ดึงการชำระเงินทั้งหมด
exports.getPayments = async (req, res) => {
    try {
        const payments = await Payment.findAll();
        res.status(200).json(payments);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// ค้นหาการชำระเงินตาม ID
exports.getPaymentById = async (req, res) => {
    try {
        const payment = await Payment.findByPk(req.params.id);
        if (!payment) {
            return res.status(404).json({ message: 'Payment not found' });
        }
        res.status(200).json(payment);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// แก้ไขการชำระเงิน
exports.updatePayment = async (req, res) => {
    try {
        const [updated] = await Payment.update(req.body, {
            where: { payment_id: req.params.id },
        });
        if (!updated) {
            return res.status(404).json({ message: 'Payment not found' });
        }
        const updatedPayment = await Payment.findByPk(req.params.id);
        res.status(200).json(updatedPayment);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// ลบการชำระเงิน
exports.deletePayment = async (req, res) => {
    try {
        const deleted = await Payment.destroy({
            where: { payment_id: req.params.id },
        });
        if (!deleted) {
            return res.status(404).json({ message: 'Payment not found' });
        }
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
