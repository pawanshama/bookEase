const router = require('express').Router()
const TicketSchema = require('../models/schema')

router.post('/booking',async(req,res)=>{
    const {movie,cinema,slot,seats} = req.body
    // console.log(req.body);

    try{
         const myData = await new TicketSchema({movie,cinema,slot,seats})
         await myData.save()
         res.status(200).json({data:myData,message:"Booking Successfully"})
        //  console.log(myData);
    }
    catch(err){
         res.status(500).json({
            data:null,
            message:"error in router"
         })
    }
})
router.delete('/delete',async(req,res)=>{
    try{
         await TicketSchema.findByIdAndDelete(req.params.id)
         res.json({msg:"item deleted"})
    }
    catch(err){
        return res.status(500).json({msg:err.message})
    }
})

router.get('/booking',async(req,res)=>{
    try{
        // const myData = await Ticket.find().sort({_id:-1}).limit(1)
        // const myData = await TicketSchema.find({},"seats");
        const myData = await TicketSchema.find({},"movie slot seats cinema");
        
        if(myData.length === 0){
           return res.status(200).json({data:null,message:"No previous booking found"})
        }
        else{
           return res.status(200).json({data:myData})
        }
    }
    catch(err){
       return  res.status(500).json({
            data:null,
            message:"Something went wrong"
        })
    }

})

module.exports = router