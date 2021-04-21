import React, {useContext, useState, useEffect} from 'react'
import {GlobalState} from '../../../GlobalState'
import axios from 'axios'
import Header from '../../headers/Header'
import Footer from '../../footers/footer'

function Cart() {
    const state = useContext(GlobalState)
    const [cart, setCart] = state.userAPI.cart
    const [token] = state.token
    const [total, setTotal] = useState(0)

    useEffect(() =>{
        const getTotal = () =>{
            const total = cart.reduce((prev, item) => {
                return prev + (item.price * item.quantity)
            },0)

            setTotal(total)
        }

        getTotal()

    },[cart])

    const addToCart = async (cart) =>{
        await axios.patch('/user/addcart', {cart}, {
            headers: {Authorization: token}
        })
    }
console.log(total);

    const increment = (id) =>{
        cart.forEach(item => {
            if(item._id === id){
                item.quantity += 1
            }
        })

        setCart([...cart])
        addToCart(cart)
    }

    const decrement = (id) =>{
        cart.forEach(item => {
            if(item._id === id){
                item.quantity === 1 ? item.quantity = 1 : item.quantity -= 1
            }
        })

        setCart([...cart])
        addToCart(cart)
    }

    const removeProduct = id =>{
        if(window.confirm("Do you want to delete this product?")){
            cart.forEach((item, index) => {
                if(item._id === id){
                    cart.splice(index, 1)
                }
            })

            setCart([...cart])
            addToCart(cart)
        }
    }

    //Razorpay integration
    function loadScript(src) {
        return new Promise((resolve) => {
            const script = document.createElement('script')
            script.src = src
            script.onload = () => {
                resolve(true)
            }
            script.onerror = () => {
                resolve(false)
            }
            document.body.appendChild(script)
        })
    }
    
    const __DEV__ = document.domain === 'localhost'
    
        const [name, setName] = useState('Rohan')
    
        async function displayRazorpay() {
            const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')
            
            if (!res) {
                alert('Razorpay SDK failed to load. Are you online?')
                return
            }
            // console.log(cart);
            // axios.post(`/api/cart`, cart)
            // .then(res => {
            //     console.log(res);
            //     console.log(res.data);
            // })

            const data =  fetch('http://localhost:5000/razorpay', { method: 'POST' }).then((t) =>
                t.json()
            )
            data.amount = total
            const am = data.amount;
    
            const options = {
                key: __DEV__ ? 'rzp_test_QqUGL3lXO9J3fl' : 'PRODUCTION_KEY',
                currency: data.currency,
                amount: (am*100),
                order_id: data.id,
                name: 'Checkout',
                description: 'Make your payment',
                // image: 'http://localhost:1337/logo.svg',
                handler: function (response) {
                    alert(response.razorpay_payment_id)
                    alert(response.razorpay_order_id)
                    alert(response.razorpay_signature)
                    alert("You have successfully placed an order.")
                    setCart([])
                    addToCart([])
                },
                prefill: {
                    name,
                    email: 'user@email.com',
                    phone_number: '9899999999'
                }
            }
            const paymentObject = new window.Razorpay(options)
            paymentObject.open()
        }
    

    if(cart.length === 0) 
        return <h2 style={{textAlign: "center", fontSize: "5rem"}}>Cart Empty</h2> 

        console.log(cart);
    return (
        <div>
           <Header />
            {
                cart.map(product => (
                    <div className="detail cart" key={product._id}>
                        <img src={product.images.url} alt="" />

                        <div className="box-detail">
                            <h2>{product.title}</h2>

                            <h3>Rs. {product.price * product.quantity}</h3>
                            <p>{product.description}</p>
                            <p>{product.content}</p>

                            <div className="amount">
                                <button onClick={() => decrement(product._id)}> - </button>
                                <span>{product.quantity}</span>
                                <button onClick={() => increment(product._id)}> + </button>
                            </div>
                            
                            <div className="delete" 
                            onClick={() => removeProduct(product._id)}>
                                X
                            </div>
                        </div>
                    </div>
                ))
                
            }

            <div className="total">
                <h1 className="total--checkout">Checkout</h1>
                <h2>Total: Rs. {total}</h2>
                <a
					className="checkout-btn"
					onClick={displayRazorpay}
					target="_blank"
					rel="noopener noreferrer"
				>
					Proceed to Buy
				</a>
            </div>
            <Footer />
        </div>
    )
}

export default Cart
