

const contacts = require('../Model/contactModel');


exports.contact = async(req,res)=>{
    console.log('inside contactController');
    const userId = req.store
    console.log(userId);
    const{name,email,mobileno,state,pincode,address,comment} = req.body
    try {
        const AlreadyUser = await contacts.findOne({name,userId})
        if(AlreadyUser){
            res.status(406).json('Already user contact list')
        }else{
            const newContact = new contacts({
                name,email,mobileno,state,pincode,address,comment
            })
            await newContact.save()
            res.status(200).json(newContact)
        }
    } catch (error) {
        res.status(401).json(`request fail${error}`)
    }
}
