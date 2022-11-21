const {Sequelize ,DataTypes,Op} = require('sequelize')

const sequelize = new ("experion","root","fida@8918",{
    host:'localhost',
    dialect:'mysql'
});
const User = sequelize.define('user',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true

    },
    name:{
        type:DataTypes.STRING(50),
        allownull:false
    },
    email:{
        type:DataTypes.STRING(50),
        allowNull:false,
        unique:true
    },
    age:{
        type:DataTypes.INTEGER,
        defaultValue:18,
        allowNull:false
    },
    country:{
        type:DataTypes.STRING(50),
        defaultValue:'IN',
        allowNull:false

    }

    
});

// User.sync({alter: true});

// User.create({name:'finu',email :'finu@mail' , age:23})
// .then((user)=>{
//     console.log("Data saved suuccessfully",user.toJSON())
// })
// .catch(err=>{
//     console.log("error")
// })


User.findAll({
    where:{
        id:{
            [Op.gte]:2
        }
    }
}).then(function(users){
    users.forEach(function(user){
        console.log(user.dataValues.id,user.dataValues.name)
    })
    
})

// User.findByPk(1).then(user=>{
//     console.log(user.dataValues.id,user.dataValues.name)
// })





// sequelize.authenticate()
// .then(()=>{
//     console.log('Connection established successfully')
// })
 
// .catch((error)=>{
//     console.error("unable to coonect to the database:",error)
// })