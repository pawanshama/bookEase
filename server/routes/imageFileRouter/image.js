const express = require('express')
const router = express.Router()
const CompleteSchema = require('../../models/authorSide/completeMovie.js')
const boolAdmin = require('../../middleware/checkAuthor.js')

const ensureAuthenticated = require('../../middleware/beforeProduct')

router.post('/adminSearch',boolAdmin,async(req, res)=> {
   console.log(req.body)
   try{
       const {email} = req.body
       console.log(email);
       const q = []
       q.push({email:{$regex:email,$options:'i'}})
       const data = await CompleteSchema.find({$and:q});
       if(!data){
         return res.status(400).json("not found any element")
       }
       return res.status(200).json({message:'success',data});
    }catch(err){
        return res.status(500).json({message:'error occured',err})
    }
});

module.exports = router