const router = require('express').Router();
const search = require('../models/theatre.js');



router.get( '/movieSearch',async(req,res)=>{
     try{
          const data = await search.find({},"movie genre language -_id");

        if(!data)return res.status(201).json("no movies")
         return res.status(201).json(data);        
     }catch(err){
        res.status(405).json("failed to Search")
     }
})

router.get( '/locationSearch',async(req,res)=>{
   // console.log(req.query);
     try{
        const movie = req.query.movie;
      //   console.log(movie)
        if(!movie)res.status(400).json("please select a movie");
        let queryButton=[]
        queryButton.push({movie:{$regex:movie,$options:'i'}})
      
        const data = await search.find({$and:queryButton}).select(`location -_id`);
      
        if(!data)res.status(201).json("movie is not Listed");
        return res.status(201).json(data)
     }catch(err){
        res.status(405).json("failed to Search location ")
     }
})
router.get( '/theatreSearch',async(req,res)=>{
     try{
        const {movie,location} = req.query;
        if(!movie)res.status(400).json("please select a movie");
        if(!location)res.status(400).json("please choose your location");
        let queryButton=[]
        queryButton.push({movie:{$regex:movie,$options:'i'}})
        queryButton.push({location:{$regex:location,$options:'i'}})
      
        const data = await search.find({$and:queryButton}).select(`theatre -_id`);
      
        if(!data)res.status(201).json("no theatre Listed");
        res.status(201).json(data)
     }catch(err){
        res.status(405).json("failed to Search")
     }
   })
   router.get( '/screenSearch',async(req,res)=>{
      try{
         const {movie,location,theatre} = req.query;
         //   console.log(req.query)
         if(!movie)res.status(400).json("please select a movie");
         if(!location)res.status(400).json("please choose your location");
         if(!theatre)res.status(400).json("please select a theatre");
         let queryButton=[]
         queryButton.push({movie:{$regex:movie,$options:'i'}})
         queryButton.push({location:{$regex:location,$options:'i'}})
         queryButton.push({theatre:{$regex:theatre,$options:'i'}})
         
         const data = await search.find({$and:queryButton}).select(`screen -_id`);
         
         if(!data)res.status(201).json("no screen Listed");
         res.status(201).json(data)

     }catch(err){
        res.status(405).json("failed to Search")
     }
})
router.get( '/seatsSearch',async(req,res)=>{
   console.log(req.query)
   try{
      const {movie,location,theatre,screen,slot} = req.query;
      if(!movie)res.status(400).json("please select a movie");
      if(!location)res.status(400).json("please choose your location");
      if(!theatre)res.status(400).json("please select a theatre");
      if(!screen)res.status(400).json("please select a Movie - Screen");
      if(!slot)res.status(400).json("please select a Movie - Slot");
      let queryButton=[]
      queryButton.push({movie:{$regex:movie,$options:'i'}})
      queryButton.push({location:{$regex:location,$options:'i'}})
      queryButton.push({theatre:{$regex:theatre,$options:'i'}})
      queryButton.push({screen:parseInt(screen)})
      queryButton.push({slot:{$regex:slot,$options:'i'}})
      const data = await search.find({$and:queryButton}).select(`seats -_id`);
      
      if(!data)res.status(201).json("no seats Listed");
      res.status(201).json(data)
     }catch(err){
        res.status(405).json("failed to Search")
      }
   })
   router.get( '/slotSearch',async(req,res)=>{
   console.log(req.query)
     try{
        const {movie,location,theatre,screen} = req.query;
        
        if(!movie)res.status(400).json("please select a movie");
        if(!location)res.status(400).json("please choose your location");
        if(!theatre)res.status(400).json("please select a theatre");
        if(!screen)res.status(400).json("please select a Movie - Screen");
        let queryButton=[]
        queryButton.push({movie:{$regex:movie,$options:'i'}})
        queryButton.push({location:{$regex:location,$options:'i'}})
        queryButton.push({theatre:{$regex:theatre,$options:'i'}})
        queryButton.push({screen:parseInt(screen)})
        const data = await search.find({$and:queryButton}).select(`slot -_id`);
        if(!data)res.status(201).json("no slot Listed");
        res.status(201).json(data)
     }catch(err){
        res.status(405).json("failed to Search")
     }
})
router.post('/post' , async(req,res)=>{
    try{
        const {movie,genre,language,location,theatre,screen,slot,seats} = req.body;
        const data = await new search({movie,genre,language,location,theatre,screen,slot,seats});
        await data.save();
        res.status(201).json({data:data,message:"Booking Successfully"});
        console.log(data);
    }catch(err){
       res.status(405).json("failed to Save")
    }
})

router.delete('/delete' ,()=>{
    try{

    }catch(err){
       res.status(405).json("failed to delete")
    }
})

module.exports = router;