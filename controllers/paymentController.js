const Payment = require('../models/Payment');

const paymentController = {
    createPayment: async (req, res) => {
        try {
            const { rental_id, amount, payment_date, payment_method, status } = req.body;
            const payment = await Payment.create({ rental_id, amount, payment_date, payment_method, status });
            res.status(201).json(payment);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    getAllPayments: async (req, res) => {
        try {
            const payments = await Payment.findAll();
            res.json(payments);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    getPaymentById: async (req, res) => {
        try {
            const payment = await Payment.findByPk(req.params.id);
            if (payment) {
                res.json(payment);
            } else {
                res.status(404).json({ message: 'Payment not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    updatePayment: async (req, res) => {
        try {
            const payment = await Payment.findByPk(req.params.id);
            if (payment) {
                const { rental_id, amount, payment_date, payment_method, status } = req.body;
                await payment.update({ rental_id, amount, payment_date, payment_method, status });
                res.json(payment);
            } else {
                res.status(404).json({ message: 'Payment not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    deletePayment: async (req, res) => {
        try {
            const payment = await Payment.findByPk(req.params.id);
            if (payment) {
                await payment.destroy();
                res.status(204).send();
            } else {
                res.status(404).json({ message: 'Payment not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
};

module.exports = paymentController;
