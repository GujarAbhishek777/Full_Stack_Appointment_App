const path = require('path');

const express = require('express');
const sequelize = require('./util/database')
//app.set('view engine', 'ejs');
//sapp.set('views', 'views');
const cors = require('cors');

const bodyParser = require('body-parser');

const app = express();



app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(cors());

const mainRoutes = require('./routes/main')
app.use(mainRoutes);


 
// app.use((req,res,next)=>
// res.status(404).write("<h1> 404 error </h1>"));


 sequelize.sync().then((result)=>{
    //console.log(result)
     app.listen(3000);
 })
 .catch((err)=>console.log(err));

