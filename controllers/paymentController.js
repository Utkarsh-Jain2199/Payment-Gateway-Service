const Payment = require('../models/paymentModel');

// Create a payment
exports.createPayment = async (req, res) => {
    try {
        const payment = new Payment(req.body);
        await payment.save();
        res.status(201).json(payment);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Process a payment (simplified for demonstration)
exports.processPayment = async (req, res) => {
    try {
        const payment = await Payment.findById(req.params.id);
        if (!payment) {
            return res.status(404).json({ error: 'Payment not found' });
        }
        payment.status = 'completed';
        await payment.save();
        res.status(200).json(payment);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Retrieve payment status
exports.getPaymentStatus = async (req, res) => {
    try {
        const payment = await Payment.findById(req.params.id);
        if (!payment) {
            return res.status(404).json({ error: 'Payment not found' });
        }
        res.status(200).json({ status: payment.status });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Handle refunds (simplified for demonstration)
exports.handleRefund = async (req, res) => {
    try {
        const payment = await Payment.findById(req.params.id);
        if (!payment) {
            return res.status(404).json({ error: 'Payment not found' });
        }
        payment.status = 'refunded';
        await payment.save();
        res.status(200).json(payment);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
