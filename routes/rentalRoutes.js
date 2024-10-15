const express = require('express');
const router = express.Router();
const rentalController = require('../controllers/rentalController');

// กำหนดเส้นทางสำหรับ Rental
router.get('/rentals', rentalController.getRentals);               // ดึงข้อมูลการเช่าทั้งหมด
router.get('/rentals/:id', rentalController.getRentalById);        // ดึงข้อมูลการเช่าตาม ID
router.post('/rentals', rentalController.createRental);            // สร้างการเช่าใหม่
router.put('/rentals/:id', rentalController.updateRental);         // อัปเดตการเช่า
router.delete('/rentals/:id', rentalController.deleteRental);      // ลบการเช่า

module.exports = router;
