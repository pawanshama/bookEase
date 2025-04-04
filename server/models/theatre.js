const mongo= require('mongoose');

const multipleRecord = new mongo.Schema({
    theatreseat:{
        type:Number,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
})

const search = new mongo.Schema({
    movie:{
        type:String,
        required:true,
    },
    genre:{
        type:String,
        required:true,
    },
    language:{
        type:String,
        required:true,
    },
    location:{
        type:String,
        required:true,
    },
    theatre:{
        type:String,
        required:true,
    },
    screen:{
        type:[Number],
        required:true,
    },
    slot:{
        type:[String],
        required:true,
    },
    seats:{
        type:[multipleRecord],
        required:true,
    },
});

module.exports = mongo.model("search",search)