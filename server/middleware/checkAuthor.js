const userSchema = require('../models/user/userModel.js')
const boolAdmin = async(req,res,next)=>{
     try{
          const {email,country} = req.body
          const qArr = []
          qArr.push({email:{$regex:email,options:'i'}})
          qArr.push({country:{$regex:country,options:'i'}})
          const data = await userSchema({$and:qArr});
          if(!data){
            return res.status(409).json({message:'user not found'})
          }
          if(data.responsibility==='false'){
            return res.status(403).json({message:'incorrect admin'})
          }
          next();

     }catch(err){
        return res.status(409).json({message:'not found'});
     }
}
module.exports = boolAdmin