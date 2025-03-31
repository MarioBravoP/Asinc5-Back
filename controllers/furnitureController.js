const Furniture = require('../models/furnitureModel');
const fs = require('fs');

exports.getFurnitures = async (req, res) => {
    try {
        const furnitures = await Furniture.find();
        res.status(200).json(furnitures);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
}

exports.createFurniture = async (req, res) => {
    try {
        const { name, description, author } = req.body;

        if (!req.file) {
            return res.status(400).json({ message: "Es necesario subir una foto."})
        }

        const image = fs.readFileSync(req.file.path, { encoding: "base64" })

        const furniture = new Furniture({ name, description, author, image });
        await furniture.save();
        fs.unlinkSync(req.file.path);

        res.status(200).json({"Elemento añadido correctamente": furniture});
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}