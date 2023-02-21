const Sequelize = require('sequelize');
const sequelize = require('../util/database')

const Details = sequelize.define('detail', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: 
    {type: Sequelize.STRING,
        allowNull: false,

    },
    phone: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        distinct:true
    
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false,
        distinct:true
    }
});
module.exports=Details;
