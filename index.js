require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const errorHandler = require('./middlewares/errorHandler')

const furniture_routes = require('./routes/furnitures')

const app = express();
app.use(express.json());
app.use(cors());

const MONGO_URI = process.env.MONGO_URI

// Conexión a MongoDB
mongoose.connect(MONGO_URI)
    .then(() => console.log('✅ Conectado con éxito'))
    .catch(err => console.error('❌ Error al conectar:', err));

app.use('/furniture', furniture_routes);

app.use(errorHandler);

// Arranque de servidor
app.listen(3000, () => console.log('Servidor corriendo en http://localhost:3000'));
