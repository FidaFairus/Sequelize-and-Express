const {Sequelize ,DataTypes,Op} = require('sequelize')

const sequelize = new Sequelize("assesment","root","fida@8918",{
    host:'localhost',
    dialect:'mysql'
});
const Cab = sequelize.define('cab',{
   cab_id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true,
        allowNull:false


    },
    cab_no:{
        type:DataTypes.STRING(50),
        allownull:false,
        unique:true
    },
    cab_model:{
        type:DataTypes.STRING(50),
        allowNull:false,
        
    },
    cab_total_capacity:{
        type:DataTypes.INTEGER,
        defaultValue:4,
        allowNull:false
    },
    
    
});
// Cab.sync({alter:true})



Cab.create({cab_no:'KL 7761',cab_model :'Innova' , cab_total_capacity:7})
.then((cab)=>{
    console.log("Data saved suuccessfully",cab.toJSON())
})
.catch(err=>{
    console.log("error")
})

Cab.findAll({
    where:{
        cab_id:{
            [Op.gte]:2
        }
    }
}).then(function(cabs){
    cabs.forEach(function(cab){
        console.log(cab.dataValues.cab_id,cab.dataValues.cab_no)
    })
    
})

