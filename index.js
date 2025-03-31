require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const errorHandler = require('./middlewares/errorHandler')

const app = express();
const furniture_routes = require('./routes/furnitures')

const allowedOrigins = process.env.ALLOWED_ORIGINS;

app.use(express.json());
app.use(cors({
  origin: allowedOrigins,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'] 
}));

const MONGO_URI = process.env.MONGO_URI

// Conexión a MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
})
.then(() => console.log("Conectado a MongoDB Atlas"))
.catch(err => console.error("Error conectando a MongoDB:", err));

app.use('/furniture', furniture_routes);

app.use(errorHandler);

module.exports = app;
