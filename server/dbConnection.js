const mongoose = require('mongoose');
const API = process.env.API;
const connectDb  = () =>{
    try{
         mongoose.connect(API)
        .then(()=>console.log('connected to Database'))
        .catch(err=>console.log(err));
    }
    catch(err){
        console.log(err);
    }
}
module.exports = connectDb;
