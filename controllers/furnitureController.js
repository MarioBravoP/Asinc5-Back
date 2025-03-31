const Furniture = require('../models/furnitureModel');

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
        const { name, description, author, image } = req.body;

        if (!image) {
            return res.status(400).json({ message: "Es necesario subir una imagen en base64." });
        }

        const furniture = new Furniture({ name, description, author, image });
        await furniture.save();

        res.status(200).json({ message: "Elemento añadido correctamente", furniture });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
