const Payments = require('../models/paymentModel')
const Users = require('../models/userModel')
const Products = require('../models/productModel')
const Insta = require('instamojo-nodejs');

const API_KEY = 'test_28610661ed14c8244e5a1873400';
const AUTH_KEY = 'test_6ad6b9c3753f0f206aebef4a992';

Insta.setKeys(API_KEY, AUTH_KEY);
Insta.isSandboxMode(true);

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

            var data = new Insta.PaymentData();

            const REDIRECT_URL = "http://localhost:3000/success";

            data.setRedirectUrl(REDIRECT_URL);
            data.send_email = "True";
            data.purpose = "Payment Capture Test"; // REQUIRED
            data.amount = amount;
            data.email = email;

            Insta.createPayment(data, function (error, response) {
                if (error) {
                // some error
                } else {
                    console.log(response)
                // Payment redirection link at response.payment_request.longurl
                //   res.send("Please check your email to make payment")
                }
            });
            // console.log(res);
            // console.log(req.body);
            // console.log(req.headers);
            // const {email, cart} = req.body;
            const user = await Users.findOne({email})
            
            if(!user) return res.status(400).json({msg: "User does not exist!!"})

            const {_id, name} = user;
            
            const newPayment = new Payments({
                user_id: _id, name, email, cart
            })
            
            await newPayment.save((err, newPayment) => {
                if (err) {
                  return res.status(400).json({
                    error: "Failed to save order in DB.",
                  });
                }
                res.json({msg: "Payment Success!"})
                console.log(newPayment)
              });

            
        }
        catch (err) {
            return res.status(500).json({msg: err.message})
        }

        // app.get("/success", (req, res) => {
        //     res.send("Payment successful! Check mail for confirmation")
        // })
    }
}

const sold = async (id, quantity, oldSold) =>{
    await Products.findOneAndUpdate({_id: id}, {
        sold: quantity + oldSold
    })
}

module.exports = paymentCtrl
