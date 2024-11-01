

const users = require('../Model/userSchema')

const jwt = require('jsonwebtoken')

exports.registerController = async (req,res)=>{
    const {username,email,password} = req.body
    console.log(username,email,password);
    try {
        const AlreadyUser = await users.findOne({email})
        if(AlreadyUser){
          //token generate - sign('data','secretekey')
         res.status(406).json('Already Account Exist')
        }else{
          const newuser = new users({
            username,email,password
          })
          await newuser.save()
          res.status(200).json(newuser)
        }
    } catch (error) {
        res.status(401).json(`request fail${error}`)
    }
}

//login 
exports.loginController = async(req,res)=>{
  const{email,password} = req.body
  console.log(email,password);
  try {
    const AlreadyUser = await users.findOne({email,password})
    if(AlreadyUser){
      const token = jwt.sign({userId:AlreadyUser._id},'alwinkey')
      if(email == 'admin@gmail.com'){
        return res.status(201).json({AlreadyUser,token})
      }
      res.status(200).json({AlreadyUser,token})
    }else{
     return res.status(406).json('Invalid Email Id or Password')
    }
  } catch (error) {
    res.status(401).json(`request fail${error}`)
  }
}