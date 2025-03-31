const mongoose = require('mongoose');

const furnitureSchema = new mongoose.Schema({
    name: { type: String, unique: true, required: true },
    description: { type: String, required: true },
    author: { type: String, required: true },
    image: { type: String }
});

const Furniture = mongoose.model('Furniture', furnitureSchema);
module.exports = Furniture