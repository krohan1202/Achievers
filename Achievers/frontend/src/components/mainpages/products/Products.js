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
        
        <div className="ach__allIndiaPart">
            <div className="ach__allIndiaVid"></div>
            <div className="ach__allIndiaEntranceTest">
                <p className="ach__allIndiaEntranceTest--heading">ACHIEVERS ALL INDIA ENTRANCE TEST SERIES</p>
                <hr className="ach__allIndiaEntranceTest--underline"></hr>
                <p className="ach__allIndiaEntranceTest--description">Our integrated teaching approach not only makes you shine in your school / board exams but also ensures that you are listed as a top Achiever in All India Entrance exams</p>
                
                <a className="ach__allIndiacard--btn ach__allIndiacard--btnNeet" href="/hehe">NEET
                    <svg className="ach__allIndiaArrow" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.0148 12.7583L14.2417 7.98525C13.9118 7.65534 13.3777 7.65534 13.0486 7.98525C12.7187 8.31516 12.7187 8.84925 13.0486 9.17832L16.5257 12.6562H7.59375C7.128 12.6562 6.75 13.0343 6.75 13.5C6.75 13.9658 7.128 14.3438 7.59375 14.3438H16.5257L13.0486 17.8208C12.7187 18.1508 12.7187 18.6848 13.0486 19.0139C13.3785 19.3438 13.9126 19.3438 14.2416 19.0139L19.0147 14.2408C19.2172 14.0383 19.2796 13.7616 19.2341 13.4992C19.2797 13.2384 19.2164 12.9608 19.0148 12.7583ZM13.5 0C6.04377 0 0 6.04377 0 13.5C0 20.9562 6.04377 27 13.5 27C20.9562 27 27 20.9554 27 13.5C27 6.04465 20.9562 0 13.5 0ZM13.5 25.3125C6.9761 25.3125 1.6875 20.0239 1.6875 13.5C1.6875 6.9761 6.9761 1.6875 13.5 1.6875C20.0239 1.6875 25.3125 6.9761 25.3125 13.5C25.3125 20.0239 20.0239 25.3125 13.5 25.3125Z" fill="white"/>
                    </svg>
                </a>
                <a className="ach__allIndiacard--btn ach__allIndiacard--btnKVPY" href="#">KVPY
                    <svg className="ach__allIndiaArrow" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.0148 12.7583L14.2417 7.98525C13.9118 7.65534 13.3777 7.65534 13.0486 7.98525C12.7187 8.31516 12.7187 8.84925 13.0486 9.17832L16.5257 12.6562H7.59375C7.128 12.6562 6.75 13.0343 6.75 13.5C6.75 13.9658 7.128 14.3438 7.59375 14.3438H16.5257L13.0486 17.8208C12.7187 18.1508 12.7187 18.6848 13.0486 19.0139C13.3785 19.3438 13.9126 19.3438 14.2416 19.0139L19.0147 14.2408C19.2172 14.0383 19.2796 13.7616 19.2341 13.4992C19.2797 13.2384 19.2164 12.9608 19.0148 12.7583ZM13.5 0C6.04377 0 0 6.04377 0 13.5C0 20.9562 6.04377 27 13.5 27C20.9562 27 27 20.9554 27 13.5C27 6.04465 20.9562 0 13.5 0ZM13.5 25.3125C6.9761 25.3125 1.6875 20.0239 1.6875 13.5C1.6875 6.9761 6.9761 1.6875 13.5 1.6875C20.0239 1.6875 25.3125 6.9761 25.3125 13.5C25.3125 20.0239 20.0239 25.3125 13.5 25.3125Z" fill="white"/>
                    </svg>
                </a>
                <a className="ach__allIndiacard--btn" href="#">
                    IIT-JEE
                    <p className="ach__allIndiaIITJEEMainAdv">MAIN & ADV.</p>
                    <svg className="ach__allIndiaArrow" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.0148 12.7583L14.2417 7.98525C13.9118 7.65534 13.3777 7.65534 13.0486 7.98525C12.7187 8.31516 12.7187 8.84925 13.0486 9.17832L16.5257 12.6562H7.59375C7.128 12.6562 6.75 13.0343 6.75 13.5C6.75 13.9658 7.128 14.3438 7.59375 14.3438H16.5257L13.0486 17.8208C12.7187 18.1508 12.7187 18.6848 13.0486 19.0139C13.3785 19.3438 13.9126 19.3438 14.2416 19.0139L19.0147 14.2408C19.2172 14.0383 19.2796 13.7616 19.2341 13.4992C19.2797 13.2384 19.2164 12.9608 19.0148 12.7583ZM13.5 0C6.04377 0 0 6.04377 0 13.5C0 20.9562 6.04377 27 13.5 27C20.9562 27 27 20.9554 27 13.5C27 6.04465 20.9562 0 13.5 0ZM13.5 25.3125C6.9761 25.3125 1.6875 20.0239 1.6875 13.5C1.6875 6.9761 6.9761 1.6875 13.5 1.6875C20.0239 1.6875 25.3125 6.9761 25.3125 13.5C25.3125 20.0239 20.0239 25.3125 13.5 25.3125Z" fill="white"/>
                    </svg>
                </a>
                <a className="ach__allIndiacard--btn" href="#">
                    IIT-JAM 
                    <p className="ach__allIndiaIITJAMCrash">CRASH COURSE</p>
                    <svg className="ach__allIndiaArrow" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.0148 12.7583L14.2417 7.98525C13.9118 7.65534 13.3777 7.65534 13.0486 7.98525C12.7187 8.31516 12.7187 8.84925 13.0486 9.17832L16.5257 12.6562H7.59375C7.128 12.6562 6.75 13.0343 6.75 13.5C6.75 13.9658 7.128 14.3438 7.59375 14.3438H16.5257L13.0486 17.8208C12.7187 18.1508 12.7187 18.6848 13.0486 19.0139C13.3785 19.3438 13.9126 19.3438 14.2416 19.0139L19.0147 14.2408C19.2172 14.0383 19.2796 13.7616 19.2341 13.4992C19.2797 13.2384 19.2164 12.9608 19.0148 12.7583ZM13.5 0C6.04377 0 0 6.04377 0 13.5C0 20.9562 6.04377 27 13.5 27C20.9562 27 27 20.9554 27 13.5C27 6.04465 20.9562 0 13.5 0ZM13.5 25.3125C6.9761 25.3125 1.6875 20.0239 1.6875 13.5C1.6875 6.9761 6.9761 1.6875 13.5 1.6875C20.0239 1.6875 25.3125 6.9761 25.3125 13.5C25.3125 20.0239 20.0239 25.3125 13.5 25.3125Z" fill="white"/>
                    </svg>
                </a>
                <a className="ach__allIndiacard--btn" href="#">
                    CU & DU
                    <p className="ach__allIndiaCuDu">ENTR. EXAMS</p>
                    <svg className="ach__allIndiaArrow" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.0148 12.7583L14.2417 7.98525C13.9118 7.65534 13.3777 7.65534 13.0486 7.98525C12.7187 8.31516 12.7187 8.84925 13.0486 9.17832L16.5257 12.6562H7.59375C7.128 12.6562 6.75 13.0343 6.75 13.5C6.75 13.9658 7.128 14.3438 7.59375 14.3438H16.5257L13.0486 17.8208C12.7187 18.1508 12.7187 18.6848 13.0486 19.0139C13.3785 19.3438 13.9126 19.3438 14.2416 19.0139L19.0147 14.2408C19.2172 14.0383 19.2796 13.7616 19.2341 13.4992C19.2797 13.2384 19.2164 12.9608 19.0148 12.7583ZM13.5 0C6.04377 0 0 6.04377 0 13.5C0 20.9562 6.04377 27 13.5 27C20.9562 27 27 20.9554 27 13.5C27 6.04465 20.9562 0 13.5 0ZM13.5 25.3125C6.9761 25.3125 1.6875 20.0239 1.6875 13.5C1.6875 6.9761 6.9761 1.6875 13.5 1.6875C20.0239 1.6875 25.3125 6.9761 25.3125 13.5C25.3125 20.0239 20.0239 25.3125 13.5 25.3125Z" fill="white"/>
                    </svg>    
                </a>
                <a className="ach__allIndiacard--btn ach__allIndiacard--btnCSIR" href="#">
                    CSIR-NET &nbsp; + GATE
                    <svg className="ach__allIndiaArrow" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.0148 12.7583L14.2417 7.98525C13.9118 7.65534 13.3777 7.65534 13.0486 7.98525C12.7187 8.31516 12.7187 8.84925 13.0486 9.17832L16.5257 12.6562H7.59375C7.128 12.6562 6.75 13.0343 6.75 13.5C6.75 13.9658 7.128 14.3438 7.59375 14.3438H16.5257L13.0486 17.8208C12.7187 18.1508 12.7187 18.6848 13.0486 19.0139C13.3785 19.3438 13.9126 19.3438 14.2416 19.0139L19.0147 14.2408C19.2172 14.0383 19.2796 13.7616 19.2341 13.4992C19.2797 13.2384 19.2164 12.9608 19.0148 12.7583ZM13.5 0C6.04377 0 0 6.04377 0 13.5C0 20.9562 6.04377 27 13.5 27C20.9562 27 27 20.9554 27 13.5C27 6.04465 20.9562 0 13.5 0ZM13.5 25.3125C6.9761 25.3125 1.6875 20.0239 1.6875 13.5C1.6875 6.9761 6.9761 1.6875 13.5 1.6875C20.0239 1.6875 25.3125 6.9761 25.3125 13.5C25.3125 20.0239 20.0239 25.3125 13.5 25.3125Z" fill="white"/>
                    </svg>
                </a>
                <a className="ach__allIndiacard--btn" href="#">
                    TIFR
                    <p className="ach__allIndiaTIRFEntr">ENTR. TEST</p>
                    <svg className="ach__allIndiaArrow" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.0148 12.7583L14.2417 7.98525C13.9118 7.65534 13.3777 7.65534 13.0486 7.98525C12.7187 8.31516 12.7187 8.84925 13.0486 9.17832L16.5257 12.6562H7.59375C7.128 12.6562 6.75 13.0343 6.75 13.5C6.75 13.9658 7.128 14.3438 7.59375 14.3438H16.5257L13.0486 17.8208C12.7187 18.1508 12.7187 18.6848 13.0486 19.0139C13.3785 19.3438 13.9126 19.3438 14.2416 19.0139L19.0147 14.2408C19.2172 14.0383 19.2796 13.7616 19.2341 13.4992C19.2797 13.2384 19.2164 12.9608 19.0148 12.7583ZM13.5 0C6.04377 0 0 6.04377 0 13.5C0 20.9562 6.04377 27 13.5 27C20.9562 27 27 20.9554 27 13.5C27 6.04465 20.9562 0 13.5 0ZM13.5 25.3125C6.9761 25.3125 1.6875 20.0239 1.6875 13.5C1.6875 6.9761 6.9761 1.6875 13.5 1.6875C20.0239 1.6875 25.3125 6.9761 25.3125 13.5C25.3125 20.0239 20.0239 25.3125 13.5 25.3125Z" fill="white"/>
                    </svg>
                </a>
                <a className="ach__allIndiacard--btn ach__allIndiacard--btnBHU" href="#">
                    BHU & IISER
                    <svg className="ach__allIndiaArrow" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.0148 12.7583L14.2417 7.98525C13.9118 7.65534 13.3777 7.65534 13.0486 7.98525C12.7187 8.31516 12.7187 8.84925 13.0486 9.17832L16.5257 12.6562H7.59375C7.128 12.6562 6.75 13.0343 6.75 13.5C6.75 13.9658 7.128 14.3438 7.59375 14.3438H16.5257L13.0486 17.8208C12.7187 18.1508 12.7187 18.6848 13.0486 19.0139C13.3785 19.3438 13.9126 19.3438 14.2416 19.0139L19.0147 14.2408C19.2172 14.0383 19.2796 13.7616 19.2341 13.4992C19.2797 13.2384 19.2164 12.9608 19.0148 12.7583ZM13.5 0C6.04377 0 0 6.04377 0 13.5C0 20.9562 6.04377 27 13.5 27C20.9562 27 27 20.9554 27 13.5C27 6.04465 20.9562 0 13.5 0ZM13.5 25.3125C6.9761 25.3125 1.6875 20.0239 1.6875 13.5C1.6875 6.9761 6.9761 1.6875 13.5 1.6875C20.0239 1.6875 25.3125 6.9761 25.3125 13.5C25.3125 20.0239 20.0239 25.3125 13.5 25.3125Z" fill="white"/>
                    </svg>
                </a>
                <a className="ach__allIndiacard--btn ach__allIndiacard--btnViewAll" href="#">
                    View All
                    <svg className="ach__allIndiaArrow" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.0148 12.7583L14.2417 7.98525C13.9118 7.65534 13.3777 7.65534 13.0486 7.98525C12.7187 8.31516 12.7187 8.84925 13.0486 9.17832L16.5257 12.6562H7.59375C7.128 12.6562 6.75 13.0343 6.75 13.5C6.75 13.9658 7.128 14.3438 7.59375 14.3438H16.5257L13.0486 17.8208C12.7187 18.1508 12.7187 18.6848 13.0486 19.0139C13.3785 19.3438 13.9126 19.3438 14.2416 19.0139L19.0147 14.2408C19.2172 14.0383 19.2796 13.7616 19.2341 13.4992C19.2797 13.2384 19.2164 12.9608 19.0148 12.7583ZM13.5 0C6.04377 0 0 6.04377 0 13.5C0 20.9562 6.04377 27 13.5 27C20.9562 27 27 20.9554 27 13.5C27 6.04465 20.9562 0 13.5 0ZM13.5 25.3125C6.9761 25.3125 1.6875 20.0239 1.6875 13.5C1.6875 6.9761 6.9761 1.6875 13.5 1.6875C20.0239 1.6875 25.3125 6.9761 25.3125 13.5C25.3125 20.0239 20.0239 25.3125 13.5 25.3125Z" fill="white"/>
                    </svg>
                </a>
            </div>
        </div>
        </>
    )
}

export default Products
