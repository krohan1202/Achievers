require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const cookieParser = require('cookie-parser')
const path = require('path')
const shortid = require('shortid')
// const Insta = require('instamojo-nodejs');

// const API_KEY = 'test_28610661ed14c8244e5a1873400';
// const AUTH_KEY = 'test_6ad6b9c3753f0f206aebef4a992';

// Insta.setKeys(API_KEY, AUTH_KEY);
// Insta.isSandboxMode(true);

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use(fileUpload({
    useTempFiles: true
}))

// Routes
app.use("/api", require("./routes/newsletter"));
app.use('/user', require('./routes/userRouter'))
app.use('/api', require('./routes/categoryRouter'))
app.use('/api', require('./routes/upload'))
app.use('/api', require('./routes/productRouter'))
app.use('/api', require('./routes/paymentRouter'))


// Connect to mongodb
const URI = process.env.MONGODB_URL
mongoose.connect(URI, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err =>{
    if(err) throw err;
    console.log('Connected to MongoDB')
})


// app.post( "/api/cart" , (req, res) => {
// 	var cart = req.body.cart;
// 	var email = req.body.email;
// 	var amount = req.body.amount;
// 	console.log(cart);
// 	console.log(email);
// 	console.log(amount);

// 	var data = new Insta.PaymentData();

// const REDIRECT_URL = "http://localhost:3000/success";

// data.setRedirectUrl(REDIRECT_URL);
// data.send_email = "True";
// data.purpose = "Payment Capture Test"; // REQUIRED
// data.amount = amount;
// data.email = email;

// Insta.createPayment(data, function (error, response) {
//     if (error) {
//       // some error
//     } else {
// 		console.log(response)
//       // Payment redirection link at response.payment_request.longurl
//       res.send("Please check your email to make payment")
//     }
//   });
// })

// app.get("/success", (req, res) => {
// 	res.send("Payment successful! Check mail for confirmation")
// })

const PORT = process.env.PORT || 5000
app.listen(PORT, () =>{
    console.log('Server is running on port', PORT)
})