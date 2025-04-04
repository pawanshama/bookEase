const mongoose = require('mongoose')

const CompleteSchema = new mongoose.Schema({
   email:{
    type:String,
    required:true,
   },
   movieName:{
    type:String,
    required:true
   },
   description:{
    type:String,
   },
   ratings:{
    type:String
   },
   genre:{
    type:String
   },
   theatre:{
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
   startDate:{
    type:String,
    required:true
   },
   endDate:{
    type:String,
    required:true
   },
   slots:{
    type:[String],
    required:true
   },
   seats:{
    type:Object,
    required:true
   },
   imageId:{
      type:Object,
      required:true
   }
})

module.exports = mongoose.model("complete",CompleteSchema)