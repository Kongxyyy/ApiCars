const User = require('../models/User');

// สร้างผู้ใช้ใหม่
exports.createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// ดึงผู้ใช้ทั้งหมด
exports.getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// ค้นหาผู้ใช้ตาม ID
exports.getUserById = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// แก้ไขผู้ใช้
exports.updateUser = async (req, res) => {
    try {
        const [updated] = await User.update(req.body, {
            where: { user_id: req.params.id },
        });
        if (!updated) {
            return res.status(404).json({ message: 'User not found' });
        }
        const updatedUser = await User.findByPk(req.params.id);
        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// ลบผู้ใช้
exports.deleteUser = async (req, res) => {
    try {
        const deleted = await User.destroy({
            where: { user_id: req.params.id },
        });
        if (!deleted) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
