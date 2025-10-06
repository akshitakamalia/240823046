const sequelize= require('sequelize');
const db = require('./db');


const Product = db.define("Product",{
    id:{
        type:sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{ 
        type:sequelize.STRING,
        allowNull:false 
    },
    price:{
        type:sequelize.FLOAT,
        allowNull:false,
    },
    description:{
        type:sequelize.STRING,
        allowNull:true,
    }
});

db.sync()
.then(()=>{
    console.log('Product table created successfully!');
})
.catch(err=>{
    console.error('Unable to create table :',err);
});

module.exports= Product;