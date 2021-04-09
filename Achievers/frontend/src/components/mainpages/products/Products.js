import React, {useContext, useState} from 'react'
import {GlobalState} from '../../../GlobalState'
import ProductItem from '../utils/productItem/ProductItem'
import Loading from '../utils/loading/Loading'
import axios from 'axios'
import LoadMore from './LoadMore'

//Assets
import HeroVid from "../../../assets/Pics/Home/Hero/Video Part.png";


function Products() {
    const state = useContext(GlobalState)
    const [products, setProducts] = state.productsAPI.products
    const [isAdmin] = state.userAPI.isAdmin
    const [token] = state.token
    const [callback, setCallback] = state.productsAPI.callback
    const [loading, setLoading] = useState(false)
    const [isCheck, setIsCheck] = useState(false)

    const handleCheck = (id) =>{
        products.forEach(product => {
            if(product._id === id) product.checked = !product.checked
        })
        setProducts([...products])
    }

    const deleteProduct = async(id, public_id) => {
        try {
            setLoading(true)
            const destroyImg = axios.post('/api/destroy', {public_id},{
                headers: {Authorization: token}
            })
            const deleteProduct = axios.delete(`/api/products/${id}`, {
                headers: {Authorization: token}
            })

            await destroyImg
            await deleteProduct
            setCallback(!callback)
            setLoading(false)
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    const checkAll = () =>{
        products.forEach(product => {
            product.checked = !isCheck
        })
        setProducts([...products])
        setIsCheck(!isCheck)
    }

    const deleteAll = () =>{
        products.forEach(product => {
            if(product.checked) deleteProduct(product._id, product.images.public_id)
        })
    }

    if(loading) return <div><Loading /></div>
    return (
        <>
        <img src={HeroVid} className="hero__vid" />
        
        <span className="hero__card1">
            <a href="#"><button className="hero__card--btn">Class 4</button></a>
            <a href="#"><button className="hero__card--btn">Class 5</button></a>
            <a href="#"><button className="hero__card--btn">Class 6</button></a>
            <a href="#"><button className="hero__card--btn">Class 7</button></a>
            <a href="#"><button className="hero__card--btn">Class 8</button></a>
            <a href="#"><button className="hero__card--btn">Class 9</button></a>
            <a href="#"><button className="hero__card--btn">Class 10</button></a>
            <a href="#"><button className="hero__card--btn">Class 11</button></a>
            <a href="#"><button className="hero__card--btn">Class 12</button></a>
        </span>
        <span className="hero__card2">
            <a href="#"><button className="hero__card--btn hero__card--btn-resize">Chemistry</button></a>
            <a href="#"><button className="hero__card--btn hero__card--btn-resize">Maths</button></a>
            <a href="#"><button className="hero__card--btn hero__card--btn-resize">Physics</button></a>
            <a href="#"><button className="hero__card--btn hero__card--btn-resize">Statistics</button></a>
            <a href="#"><button className="hero__card--btn hero__card--btn-resize">Comp Sc.</button></a>
            <a href="#"><button className="hero__card--btn hero__card--btn-resize">Economics</button></a>
            <a href="#"><button className="hero__card--btn hero__card--btn-resize">Bio Sc.</button></a>
            <a href="#"><button className="hero__card--btn hero__card--btn-resize">Literature</button></a>
            <a href="#"><button className="hero__card--btn hero__card--btn-resize">Others</button></a>
        </span>
        <span className="hero__card3">
            <a href="#" className="hero__card--btn hero__card--btn-resize2">IIT-JEE (Main & Adv)</a>
            <a href="#" className="hero__card--btn hero__card--btn-resize">NEET</a>
            <a href="#" className="hero__card--btn hero__card--btn-resize2">KVPY & Olympiad</a>
            <a href="#" className="hero__card--btn hero__card--btn-resize">IIT-JAM</a>
            <a href="#" className="hero__card--btn hero__card--btn-resize">BL-BT</a>
            <a href="#" className="hero__card--btn hero__card--btn-resize1">Other MSc entrances</a>
            <a href="#" className="hero__card--btn hero__card--btn-resize">CSIR-NET</a>
            <a href="#" className="hero__card--btn hero__card--btn-resize">CSIR + Gate</a>
            <a href="#" className="hero__card--btn hero__card--btn-resize">Others</a>
        </span>
        <h1 className="ach__studyMat">ACHIEVERS STUDY MATERIALS</h1>
        {
            isAdmin && 
            <div className="delete-all">
                <span>Select all</span>
                <input type="checkbox" checked={isCheck} onChange={checkAll} />
                <button onClick={deleteAll}>Delete ALL</button>
            </div>
        }

        <div className="products">
            {
                products.map(product => {
                    return <ProductItem key={product._id} product={product}
                    isAdmin={isAdmin} deleteProduct={deleteProduct} handleCheck={handleCheck} />
                })
            } 
        </div>

        <LoadMore />
        {products.length === 0 && <Loading />}
        </>
    )
}

export default Products
