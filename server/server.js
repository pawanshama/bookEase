const express = require('express')
const app = express();
const cors = require("cors") 
const mongoose = require('mongoose')
const bodyParser = require("body-parser");
const Razorpay = require('razorpay')
require('dotenv').config();
const multer = require('multer')

//middle ware to parse json is express.json
app.use(express.json());
// to allow secure communication between applications hosted on different origins
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))
app.use(cors());
app.use(express.static("uploads"))

app.post('/orders', async (req,res) => {
    const razorpay = new Razorpay({
        key_id:"rzp_test_1vF2QInCw0htZJ",
        key_secret:"yWTvfFDwugjcEobQNa8naEk1",
    })
    console.log(req.body);
    const options = {
        amount:req.body.amount,
        currency:req.body.currency,
        receipt:"receipt#1",
        payment_capture:1,
    }
    // console.log(options)
    try{
        console.log(req.body);
        const response  = await razorpay.orders.create(options)
        console.log(response)
        res.json({
            order_id:response.id,
            currency:response.currency,
            amount:response.amount,
        })
    }catch(err){
        res.status(500).send("Internal server failure")
    }
})
app.get("/payment/paymentId",async(req,res)=>{
    const {paymentId} = req.params;
    const razorpay = new Razorpay({
        key_id:"rzp_test_1vF2QInCw0htZJ",
        key_secret:"yWTvfFDwugjcEobQNa8naEk1",
    })
    try{
        const payment = await razorpay.payment.fetch(paymentId)
        if(!payment){
            return res.status(500).json("Error at razorpay loading")
        }
        res.json({
            status:payment.status,
            method:payment.method,
            amount:payment.amount,
            currency:payment.currency
        })
    }catch(err){
        return res.status(500).json("failed to fetch",err)
    }
})

//this below code is a middleware code named multer used to store files and images at desired location
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now()
      console.log(file.originalname)
    //   + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.originalname)
    }
})
const upload = multer({storage})


const connectDb = require('./dbConnection.js');
// const Razorpay = require('razorpay');
// const { default: payments } = require('razorpay/dist/types/payments.js');

app.use('/api',require('./routes/routerFile'))
app.use('/api/search',require('./routes/searchRouter.js'))
app.use('/user',require('./routes/user/userRoute.js'))
app.use('/movie',require('./routes/movieFile.js'))
app.use('/movieFind',require('./routes/user/movieSearchUser.js'))
app.use('/stats',require('./routes/imageFileRouter/image.js'));
mongoose.connection.on('error', err => console.error('MongoDB Error:', err));
app.listen(8000,()=>{
    console.log('App Listening');
})
connectDb();