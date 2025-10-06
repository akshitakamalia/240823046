///npm install express
//npm install sequelize mysql2
//npm install nodemon/to run nodemon- npm start
const express = require('express');
const Sequelize = require('sequelize');

const productRoutes = require('./productRoute');
const sequelize = require('./db')
const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/products', productRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});