const express = require('express')
const ensureAuthenticated = require('../middleware/beforeProduct')
const movieSchema = require('../models/authorSide/movie')
const CompleteSchema = require('../models/authorSide/completeMovie')
const app = express.Router()
const multer  = require('multer')
const path = require('path')
const mongoose = require('mongoose')
const boolAdmin = require('../middleware/checkAuthor.js')
// const upload = multer({ dest: './uploads' })
//this below code is a middleware code named multer used to store files and images at desired location
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now()
    //   console.log(file.originalname)
    //   + '-' + Math.round(Math.random() * 1E9)
      cb(null,uniqueSuffix + '-' + file.originalname)
    }
})
const upload = multer({storage})
// app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

app.post('/adminPost',ensureAuthenticated,upload.single('image'),async(req,res)=>{
    try{
        console.log(req.body)
        console.log(req.file.originalname)
        const {email,movieName,description,ratings,genre,theatre,location,city,startDate,endDate,seats} = req.body;
        const seat = JSON.parse(seats);
        console.log(typeof seat);
        // console.log(req.body.slots.includes(','))
        // console.log(req.body.slots.split(','))
        
        const slots = req.body.slots.split(',');
        const image = req.file;
        const queryArray = []
        if(email) queryArray.push({email:{$regex:email,$options:'i'}})
        if(movieName)queryArray.push({movieName:{$regex:movieName,$options:'i'}})

        const dri = await CompleteSchema.findOne({email,movieName});
        // console.log('error below dri');
        if(dri){
            return res.status(409).json({message:"Admin already have this kind of movie"
            })
        }
        
        // queryArray.push({description:{$regex:description,$options:'i'}})
        // queryArray.push({ratings:{$regex:ratings,$options:'i'}})
        // queryArray.push({genre:{$regex:genre,$options:'i'}})
        // queryArray.push({theatre:{$regex:theatre,$options:'i'}})
        // queryArray.push({location:{$regex:location,$options:'i'}})
        // queryArray.push({city:{$regex:city,$options:'i'}})
        // queryArray.push({startDate:{$regex:startDate,$options:'i'}})
        // queryArray.push({endDate:{$regex:endDate,$options:'i'}})

        // const dr = await CompleteSchema.findOne({$and:queryArray});

        // console.log('error below dr');
        // if(dr){
        //     return res.status(409).json({message:"Admin already have this kind of movie"
        //     })
        // }
        
        const loc = location.toLowerCase();
        const c = city.toLowerCase();
        const data = new CompleteSchema({email,movieName,description,ratings,genre,theatre,location:loc,
            city:c,startDate,endDate,slots,seats:seat,imageId:{destination:image.destination,filename:image.filename}});
        await data.save()
        // console.log('error below data');
        let ds = await movieSchema.findOne({movieName,city:c})
        // console.log('error below ds');
        if(!ds){
            ds = new movieSchema({email,movieName,location:loc,city:c,description,genre,ratings,imageId:{destination:image.destination,
                filename:image.filename}});
            await ds.save();
           return res.status(201).json({message:"success",ds,data});
        }
        else{
           return res.status(200).json({message:'movie inserted',data});
        }
    }catch(err){
        return res.status(500).json({message:`something went wrong movie not fetched`,err})
    }
}
)
app.get('/img/:id',ensureAuthenticated,async(req, res)=> {
    try{
        console.log(req.params)
        const {id} = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid ID format" });
        }
        // console.log(req.params)
        const data = await movieSchema.findById(id);
        // console.log(req.params)
        if(!data){
            res.status(404).json("not found any element")
            return;
        }
        // console.log(data.imageId.filename)
        const imageFile = path.resolve(__dirname ,'../uploads', data.imageId.filename)
       res.status(200).sendFile(imageFile)
    }catch(err){
        return res.status(500).json({message:'error occured',err})
    }
})
app.get('/theatre',ensureAuthenticated,async(req, res)=> {
    try{
        console.log(req.query)
        const {movieName,city} = req.query;
        const queryArray = []
        if(city) queryArray.push({city:{$regex:city,$options:'i'}})
        if(movieName) queryArray.push({movieName:{$regex:movieName,$options:'i'}})
        const data = await CompleteSchema.find({$and:queryArray});
        // console.log(req.params)
        if(data.length===0){
            res.status(404).json("not found any element")
            return;
        }
        res.status(200).json({message:"success",data});
        return;
    }catch(err){
        return res.status(500).json({message:'error occured',err})
    }
})


app.delete('/delete',boolAdmin,async(req, res)=> {
    try{
        // console.log(req.query)
        const {email,movieName} = req.query;
        const queryArray = []
        if(movieName) queryArray.push({movieName:{$regex:movieName,$options:'i'}})
        if(email) queryArray.push({email:{$regex:email,$options:'i'}})
        const data = await CompleteSchema.findOneAndDelete({$and:queryArray});
        // console.log(req.params)
        if(!data){
            res.status(404).json("Element not found")
            return;
        }
        res.status(200).json({message:"success -- Element Deleted",data});
        return;
    }catch(err){
        return res.status(500).json({message:'Error Occured in Deletion',err})
    }
})



module.exports = app


// app.post('/',ensureAuthenticated,async(req,res)=>{
//     try{
//         // const {email} = req.body;
//         const dr = await userSchema.findOne({email});
//         if(dr.responsibility === 'true'){
//             const data = await movieSchema.find({email:{$regex:email,$options:'i'}});
//             if(!data){
//                 res.status(403).json({message:'movie not found in user list'})
//             }
//             res.status(200).json({message:'success',data})
//         }
//         else{
//             console.log('success into user Account')
//             res.status(201).json("logged into User Mode");
//         }
//     }catch(err){
//         res.status(402).json({message:`something went wrong movie not fetched`,err})
//     }
// }
// )