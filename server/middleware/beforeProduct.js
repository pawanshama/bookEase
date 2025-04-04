
const jwt = require('jsonwebtoken');
const ensureAuthenticated = async(req,res,next)=>{
    const auth = req.headers['authorization'];
    if(!auth){
        return res.status(403).json({message:`Unauthorised, JWT token is required`});
    }
    try{
        const decoded = jwt.verify(auth,process.env.JWT_SECRET)
        req.user = decoded
        console.log("success")
        next();
    }catch(err){
        return res.status(403).json({message:`Unauthorised, JWT token is wrong or missing`,err});
    }
}
module.exports = ensureAuthenticated;