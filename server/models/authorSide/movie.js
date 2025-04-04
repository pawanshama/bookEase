const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
   email:{
    type:String,
    required:true
   },
   movieName:{
    type:String,
    required:true
   },
   location:{
      type:String,
      required:true
   },
   city:{
      type:String,
      required:true
   },
   description:{
    type:String,
   },
   genre:{
    type:String,
   },
   ratings:{
    type:String,
   },
   imageId:{
      type:Object,
      required:true
   }
})

const mol = mongoose.model("movie",movieSchema);
module.exports = mol;