import React, {useContext, useState, useEffect} from 'react'
import {GlobalState} from '../../../GlobalState'
import axios from 'axios'
import Header from '../../headers/Header'
import Footer from '../../footers/footer'

function Cart() {
    const email= localStorage.getItem('email')
    // console.log(email);

    const state = useContext(GlobalState)
    const [cart, setCart] = state.userAPI.cart
    const [token] = state.token
    const [total, setTotal] = useState(0)
    // console.log(state.token)
    useEffect(() => {
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

    function displayInstamojo() {
        axios.post(`/api/cart`, {email:email, cart: cart, amount:total})
            .then(response => {
                console.log('resp', response.data);
                console.log('resp', response);
                // window.location.href = response.data.redirectUrl;
            })
            .catch(err => {console.log(err);})
        setCart([])
        addToCart([])
    }

    if(cart.length === 0) {
        return (
            <>
            <Header />
            <h2 style={{textAlign: "center", fontSize: "5rem", margin: "5.5vw auto"}}>Cart Empty</h2>
            <Footer />
            </>
        )}

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
					onClick={displayInstamojo}
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
