const mongoose = require('mongoose');
require('dotenv').config({ path: './config/.env' })
const connect = async() => {
    try{
      await mongoose.connect(`${process.env.DB_URL}`)
      console.log("connected to database")
    }catch(err){
        console.log(err)
    }
    
}

module.exports = connect;