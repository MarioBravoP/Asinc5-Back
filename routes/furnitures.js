const express = require('express');
const router = express.Router();
const furnitureController = require('../controllers/furnitureController');
const multer = require('multer');

const upload = multer({ dest: 'uploadedFiles/' })

router.get('/', furnitureController.getFurnitures);

router.post('/create', upload.single('image') ,furnitureController.createFurniture)

module.exports = router