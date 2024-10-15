const express = require('express');
const router = express.Router();
const carController = require('../controllers/carController');

// กำหนดเส้นทางสำหรับ Car
router.get('/cars', carController.getCars);               // ดึงข้อมูลรถทั้งหมด
router.get('/cars/:id', carController.getCarById);        // ดึงข้อมูลรถตาม ID
router.post('/cars', carController.createCar);            // สร้างรถใหม่
router.put('/cars/:id', carController.updateCar);         // อัปเดตรถ
router.delete('/cars/:id', carController.deleteCar);      // ลบรถ

module.exports = router;
