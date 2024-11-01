const mongoose = require('mongoose')



const contactSchema =new mongoose.Schema({
      
     name:{
        required:true,
        type:String
     },
     email:{
        required:true,
        type:String
     },
     mobileno:{
        required:true,
        type:Number
     },
     state:{
        required:true,
        type:String
     },
     pincode:{
        required:true,
        type:Number
     },
     address:{
        required:true,
        type:String
     },
     comment:{
        required:true,
        type:String
     },
})



const contacts =mongoose.model('contacts',contactSchema)

module.exports = contacts