

const contacts = require('../Model/contactModel');


exports.adminpage = async(req,res)=>{
    try {
        const allDetails = await contacts.find()
        res.status(200).json(allDetails)
    } catch (error) {
        res.status(401).json(`request fail${error}`) 
    }
}

//delete from admin contact
exports.deleteContact = async(req,res)=>{
    const {userId} = req.params
     try {
        const response = await contacts.deleteOne({_userId:userId})
        res.status(200).json(response)
     } catch (error) {
        res.status(401).json(`request fail${error}`) 
     }
}