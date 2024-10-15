const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');

// กำหนดเส้นทางสำหรับ Payment
router.get('/payments', paymentController.getPayments);               // ดึงข้อมูลการชำระเงินทั้งหมด
router.get('/payments/:id', paymentController.getPaymentById);        // ดึงข้อมูลการชำระเงินตาม ID
router.post('/payments', paymentController.createPayment);            // สร้างการชำระเงินใหม่
router.put('/payments/:id', paymentController.updatePayment);         // อัปเดตการชำระเงิน
router.delete('/payments/:id', paymentController.deletePayment);      // ลบการชำระเงิน

module.exports = router;
