const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema({
    movie:{
        type:String,
        required:true},
    cinema:{
        type:String,
        required:true,
    },
    slot:{
        type:String,
        required:true,
    },
    seats:{
        A:{type:[Number]},
        B:{type:[Number]},
        C:{type:[Number]},
        D:{type:[Number]},
        E:{type:[Number]},
        F:{type:[Number]},
        G:{type:[Number]},
        H:{type:[Number]},
        I:{type:[Number]},
        J:{type:[Number]},
    }
})

module.exports = mongoose.model("bookmovie",TicketSchema);