const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// กำหนดเส้นทางสำหรับ User
router.get('/users', userController.getUsers);           // ดึงข้อมูลผู้ใช้ทั้งหมด
router.get('/users/:id', userController.getUserById);    // ดึงข้อมูลผู้ใช้ตาม ID
router.post('/users', userController.createUser);        // สร้างผู้ใช้ใหม่
router.put('/users/:id', userController.updateUser);     // อัปเดตข้อมูลผู้ใช้
router.delete('/users/:id', userController.deleteUser);  // ลบผู้ใช้

module.exports = router;
