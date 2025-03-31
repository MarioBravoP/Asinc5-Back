const express = require('express');
const router = express.Router();
const furnitureController = require('../controllers/furnitureController');

router.get('/', furnitureController.getFurnitures);
router.post('/create', furnitureController.createFurniture)

module.exports = router
