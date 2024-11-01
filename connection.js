const mongoose = require('mongoose')



const connectionString = process.env.DATABASE

mongoose.connect(connectionString).then(()=>{
    console.log('Mongodb connect successfully');
}).catch((error)=>{
    console.log(`connection fail ${error}`);
})