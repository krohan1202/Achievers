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

    const redirect = () => {
        window.location.href = ("/hehe")
      }

    if(loading) return <div><Loading /></div>
    return (
        <>
        <img src={HeroVid} className="hero__vid" />
        
        <span className="hero__card1">
            <p className="hero__card1--heading">ACHIEVERS SCHOOL PROGRAM</p>
            <hr className="hero__card1--underline"></hr>
            <a href="#" className="hero__card--btn hero__card3-font">Class 4</a>
            <a href="#" className="hero__card--btn hero__card3-font">Class 5</a>
            <a href="#" className="hero__card--btn hero__card3-font">Class 6</a>
            <a href="#" className="hero__card--btn hero__card3-font">Class 7</a>
            <a href="#" className="hero__card--btn hero__card3-font">Class 8</a>
            <a href="#" className="hero__card--btn hero__card3-font">Class 9</a>
            <a href="#" className="hero__card--btn hero__card3-font">Class 10</a>
            <a href="#" className="hero__card--btn hero__card3-font">Class 11</a>
            <a href="#" className="hero__card--btn hero__card3-font">Class 12</a>
        </span>
        <span className="hero__card2">
            <p className="hero__card1--heading">ACHIEVERS GRADUATION PROGRAM</p>
            <hr className="hero__card1--underline"></hr>
            <a href="#" className="hero__card--btn hero__card3-font1">Chemistry</a>
            <a href="#" className="hero__card--btn hero__card3-font1">Maths</a>
            <a href="#" className="hero__card--btn hero__card3-font1">Physics</a>
            <a href="#" className="hero__card--btn hero__card3-font1">Statistics</a>
            <a href="#" className="hero__card--btn hero__card3-font1">Comp Sc.</a>
            <a href="#" className="hero__card--btn hero__card3-font1">Economics</a>
            <a href="#" className="hero__card--btn hero__card3-font1">Bio Sc.</a>
            <a href="#" className="hero__card--btn hero__card3-font1">Literature</a>
            <a href="#" className="hero__card--btn hero__card3-font1">Others</a>
        </span>
        <span className="hero__card3">
            <p className="hero__card1--heading">ACHIEVERS ENTRANCE PROGRAM</p>
            <hr className="hero__card1--underline"></hr>
            <a className="hero__card--btn hero__card3-font2" href="/hehe">IIT-JEE (Main & Adv)</a>
            <a className="hero__card--btn hero__card3-font1" href="#">NEET</a>
            <a className="hero__card--btn hero__card3-font2" href="#">KVPY & Olympiad</a>
            <a className="hero__card--btn hero__card3-font1" href="#">IIT-JAM</a>
            <a className="hero__card--btn hero__card3-font1" href="#">BL-BT</a>
            <a className="hero__card--btn hero__card3-font2" href="#">Other MSc entrances</a>
            <a className="hero__card--btn hero__card3-font1" href="#">CSIR-NET</a>
            <a className="hero__card--btn hero__card3-font1" href="#">CSIR + Gate</a>
            <a className="hero__card--btn hero__card3-font1" href="#">Others</a>
        </span>

        {/* Achievers Study Materials  */}
            <h1 className="ach__studyMat--heading">ACHIEVERS STUDY MATERIALS</h1>
            <hr className="ach__studyMat--underline"></hr>
            <a className="ach__studyMat--exploreBtn" href="#">EXPLORE</a>
            
            <span>
                <span className="ach__studyMat--innovativeStudyMat">Innovative</span>
                <span className="ach__studyMat--innovativeStudyMat ach__studyMat--studyMat"> Study Materials</span>
            </span>
            <p className="ach__stdyMat--carefully">Carefully prepared by the experts at Achievers</p>

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
