const Payments = require('../models/paymentModel')
const Users = require('../models/userModel')
const Products = require('../models/productModel')
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
            res.json(payments)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    createPayment: async(req, res) => {
        try {
            const cart = req.body.cart;
            const email = req.body.email;
            const amount = req.body.amount;
            console.log(cart);
            console.log(email);
            console.log(amount);

            const user = await Users.findOne({email})
            
            if(!user) return res.status(400).json({msg: "User does not exist!!"})

            const {_id, name} = user;
            
            const newPayment = new Payments({
                user_id: _id, name, email, cart
            })
            console.log({name})

            // Instamojo Integration
            var data = new Insta.PaymentData();

            const REDIRECT_URL = "http://localhost:3000/success";

            data.setRedirectUrl(REDIRECT_URL);
            data.send_email = "True";
            data.purpose = "Payment Capture Test"; // REQUIRED
            data.amount = amount;
            data.email = email;
            data.buyer_name = name;
            
            Insta.createPayment(data, function (error, response) {
                if (error) {
                // some error
                } else {
                    console.log(response);
                    const responseData = JSON.parse(response);
                    const redirectUrl = responseData.payment_request.longurl;
                    console.log(responseData);
                    console.log(redirectUrl);
                    console.log(responseData.success);

                    if (responseData.success) {
                        // Adding Cart Products to DB
                        newPayment.save((err, newPayment) => {
                            if (err) {
                            return res.status(400).json({
                                error: "Failed to save order in DB.",
                            });
                            }
                            res.status(200).json({msg: "Payment Success!", redirectUrl: redirectUrl, success: responseData.success})
                            // res.status(200).json(redirectUrl);
                            // console.log(newPayment)
                        });
                    }
                }
            });
        }
        catch (err) {
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
