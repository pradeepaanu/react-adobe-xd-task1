const express = require('express');
const { getUserProfile, updateUserProfile, getAllUsers } = require('../controllers/userController');

const router = express.Router();

router.get('/', getAllUsers);
router.get('/:id', getUserProfile);
router.put('/:id', updateUserProfile);

module.exports = router;
