const express = require('express');
const ensureAuthenticated = require('../../middleware/beforeProduct');
const movieSchema = require('../../models/authorSide/movie')
const router = express.Router();

router.get('/user',ensureAuthenticated,async(req,res)=>{
     try{
           const {city} = req.query;
          //  console.log(req.query);
           const queryArray=[];
           if (city && city.trim() !== '') {
            queryArray.push({ city: { $regex: city, $options: 'i' } });
          }
      
          const data = await movieSchema.find({ $and: queryArray });
           if(data.length==0){
             setTimeout(()=>{

                 res.status(301).json({success:false,message:"movie not found"})
                },5000)
              return;
           }
           res.status(201).json({success:true,message:'Here are your movies',data});
           return;
     }catch(err){
        res.status(501).json({message:'unable to fetch movie for user'});
     }
})

module.exports = router