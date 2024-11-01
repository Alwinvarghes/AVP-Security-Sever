require('dotenv').config()

const express = require('express')

const cors = require('cors')

const routes = require('./router')

require('./connection')

const AvpSecurity =  express()

AvpSecurity.use(cors())

AvpSecurity.use(express.json())

AvpSecurity.use(routes)

const PORT = 4000 || process.env.PORT

AvpSecurity.listen(PORT,()=>{
    console.log('AVP security server running successfull');
})