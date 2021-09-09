const express =require("express");
const app=express();
const bodyParser=require("body-parser");
const morgan=require("morgan")
const cors=require("cors")
app.use(cors());
app.options("*",cors());
app.use(bodyParser.json());

require("dotenv/config");

//Routes
const categoriesRoutes = require('./routes/categories');
const productRoutes = require('./routes/products')
const usersRoutes = require('./routes/users')
const ordersRoutes = require('./routes/orders')


const api =process.env.API_URL;

app.use(`${api}/categories`,categoriesRoutes)
app.use(`${api}/products`,productsRoutes)
app.use(`${api}/users`,userRoutes)
app.use(`${api}/orders`,orderRoutes)

app.listen(3000,() =>{
    console.log("server is running http://localhost:3000");
});
