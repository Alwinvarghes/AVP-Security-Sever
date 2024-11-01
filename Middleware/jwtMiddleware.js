

//import middleware
const jwt = require('jsonwebtoken')

const jwtMiddlewareToken = (req,res,next)=>{
   //to verify the token
   console.log('inside jwtmiddleware');
   try {
        const token = req.headers['authorization'].split(' ')[1]
        console.log(token);
        const response = jwt.verify(token,'alwinkey')
        console.log(response);
        req.store = response.userId
        next()



    } catch (error) {
        res.status(401).json(`request fail ${error}`)
    }
}
module.exports = jwtMiddlewareToken