require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const cookieParser = require('cookie-parser');

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(fileUpload({
    useTempFiles: true
}))

// Routes
app.use("/api", require("./routes/newsletter"));
app.use('/user', require('./routes/userRouter'));
app.use('/api', require('./routes/categoryRouter'));
app.use('/api', require('./routes/upload'));
app.use('/api', require('./routes/productRouter'));
app.use('/api', require('./routes/paymentRouter'));


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

// const API_KEY = process.env.PAYMENT_API_KEY;
// const AUTH_KEY = process.env.PAYMENT_AUTH_KEY;
// var request= require('request');
// var headers = { 'X-Api-Key': API_KEY, 'X-Auth-Token': AUTH_KEY}
// const paymentSuccessResponseUrl = "https://www.instamojo.com/api/1.1/payment-requests/" + "229b1a3bd442449bb357e690b01fee79/";  

// request.get((paymentSuccessResponseUrl), {headers: headers}, function(error, response, body){
//     console.log(body);
//     console.log(response);
//     console.log(error);
//     if(!error && response.statusCode == 200){
//         console.log(body);
//     }
// })

app.get("/success", (req, res) => {
	res.send("Payment successful! Check mail for confirmation")
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () =>{
    console.log('Server is running on port', PORT)
})