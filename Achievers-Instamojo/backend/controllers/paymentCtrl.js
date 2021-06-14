const Payments = require('../models/paymentModel');
const Users = require('../models/userModel');
const Products = require('../models/productModel');
const Insta = require('instamojo-nodejs');

// Payment Keys
const API_KEY = process.env.PAYMENT_API_KEY;
const AUTH_KEY = process.env.PAYMENT_AUTH_KEY;

Insta.setKeys(API_KEY, AUTH_KEY);
Insta.isSandboxMode(true);

// Functions
const paymentCtrl = {
    getPayments: async(req, res) =>{
        try {
            const payments = await Payments.find()
            res.json(payments);
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    createPayment: async(req, res, next) => {
        try {
            const cart = req.body.cart;
            const email = req.body.email;
            const amount = req.body.amount;
            // console.log(cart);
            // console.log(email);
            // console.log(amount);

            const user = await Users.findOne({email})
            
            if(!user) return res.status(400).json({msg: "User does not exist!!"})

            const {_id, name} = user;
            
            const newPayment = new Payments({
                user_id: _id, name, email, cart
            })
            // console.log({name})

            // Instamojo Integration
            // var data = new Insta.PaymentData();

            // const REDIRECT_URL = "http://localhost:3000/success";

            // data.setRedirectUrl(REDIRECT_URL);
            // data.send_email = "True";
            // data.purpose = "Payment Capture Test"; // REQUIRED
            // data.amount = amount;
            // data.email = email;
            // data.buyer_name = name;
            
            var request= require('request');
            var headers = { 'X-Api-Key': API_KEY, 'X-Auth-Token': AUTH_KEY}
            var payload = {
                purpose: 'Payment Capture Test',
                amount: amount,
                phone: "",
                buyer_name: name,
                redirect_url: "http://localhost:3000/success",
                send_email: true,
                webhook: '',
                send_sms: false,
                email: email,
                allow_repeated_payments: false
            }

                request.post('https://www.instamojo.com/api/1.1/payment-requests/', {form: payload,  headers: headers}, function(error, response, body){
                if(!error && response.statusCode == 201){
                    const responseData = JSON.parse(body);
                    const redirectUrl = responseData.payment_request.longurl;
                    console.log(redirectUrl);
                    console.log(responseData);

                // const paymentSuccessResponseUrl = "https://www.instamojo.com/api/1.1/payment-requests/" + responseData.payment_request.id;   
                const paymentSuccessResponseUrl = "https://www.instamojo.com/api/1.1/payment-requests/" + "229b1a3bd442449bb357e690b01fee79/";   

                request.get((paymentSuccessResponseUrl), {headers: headers}, function(error, response, body){
                    // console.log(body);
                    if(!error && response.statusCode == 200){
                        console.log(body);
                    }
                })
                
                if (responseData.success) {
                    // Adding Cart Products to DB
                    newPayment.save((err, newPayment) => {
                        if (err) {
                        return res.status(400).json({
                            error: "Failed to save order in DB.",
                        });
                        }
                        return res.status(200).json({msg: "Payment Success!", redirectUrl: redirectUrl, success: responseData.success})
                        // res.status(200).json(redirectUrl);
                        // console.log(newPayment)
                    });
                }
            }
            })
            // Insta.createPayment(data, function (error, response) {
            //     if (error) {
            //     // some error
            //     } else {
            //         console.log(response);
            //         const responseData = JSON.parse(response);
            //         const redirectUrl = responseData.payment_request.longurl;
            //         // console.log(responseData);
            //         // console.log(redirectUrl);
            //         console.log(responseData.success);
                    
            //        if (responseData) {
            //             const paymentSuccessResponseUrl = "https://www.instamojo.com/api/1.1/payment-requests/" + responseData.payment_request.id;
                        
            //             var request= require('request');
            //             var headers = { 'X-Api-Key': API_KEY, 'X-Auth-Token': AUTH_KEY}
            //             request.get(JSON.stringify(paymentSuccessResponseUrl), {headers: headers}, function(error, response, body){
            //                 console.log(body);
            //                 if(!error && response.statusCode == 200){
            //                     console.log(body);
            //                 }
            //             })
            //        }

                    // if (responseData.success) {
                    //     // Adding Cart Products to DB
                    //     newPayment.save((err, newPayment) => {
                    //         if (err) {
                    //         return res.status(400).json({
                    //             error: "Failed to save order in DB.",
                    //         });
                    //         }
                    //         res.status(200).json({msg: "Payment Success!", redirectUrl: redirectUrl, success: responseData.success})
                    //         // res.status(200).json(redirectUrl);
                    //         // console.log(newPayment)
                    //     });
                    // }
            //     }
            // });
        }
        catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    checkPayment: async(req, res) => {
        try {
            return res.status(200).json({msg: "Working"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
}

const sold = async (id, quantity, oldSold) =>{
    await Products.findOneAndUpdate({_id: id}, {
        sold: quantity + oldSold
    })
}

module.exports = paymentCtrl
