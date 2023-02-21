const Sequelize = require('sequelize');
const sequelize = new Sequelize('fullstackappointment','root','Sumal@777',{
  dialect :'mysql',
  host:'localhost'
});

module.exports=sequelize;