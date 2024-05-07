const mongoose = require('mongoose');

const localDb = "mongodb://cryptoAdmin:AtHp&2QE^4$-(OP)@37.221.93.179:27017/crypto_exchange"

 const db =()=>{ 
                try {
                    mongoose.connect(localDb)
                    console.log("DB CONNECTED")
                } catch (error) {
                    console.log({error, msg: "Error connecting to Mongo ". localDb})
                }    
}

module.exports = db;