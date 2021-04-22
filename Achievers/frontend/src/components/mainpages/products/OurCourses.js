import React, {useContext, useState} from "react";
import {GlobalState} from '../../../GlobalState';
import ProductItem from '../utils/productItem/ProductItem';
import Loading from '../utils/loading/Loading';
import axios from 'axios';
import LoadMore from './LoadMore';
import Header from "../../headers/Header";
import Footer from "../../footers/footer";
import Filters from './Filters'

//Assets
import TopBanner from "../../../assets/Pics/Our Courses/Top Banner.png";
import TickIcon from "../../../assets/Pics/Our Courses/tick icon.png";
import SmallBanner1 from "../../../assets/Pics/Our Courses/Everything you need Section/small banner 1.png";
import SmallBanner2 from "../../../assets/Pics/Our Courses/Everything you need Section/small banner 2.png";
import SmallBanner3 from "../../../assets/Pics/Our Courses/Everything you need Section/small banner 3.png";
import SmallBanner4 from "../../../assets/Pics/Our Courses/Everything you need Section/small banner 4.png";
import SmallBanner5 from "../../../assets/Pics/Our Courses/Everything you need Section/small banner 5.png";
import SmallBanner6 from "../../../assets/Pics/Our Courses/Everything you need Section/small banner 6.png";


function OurCourses() {

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


    const [categories] = state.categoriesAPI.categories

    const [category, setCategory] = state.productsAPI.category
    const [sort, setSort] = state.productsAPI.sort
    const [search, setSearch] = state.productsAPI.search


    const handleCategory = e => {
        setCategory(e.target.value)
        setSearch('')
    }

    return (
        <>
        <Header />

        <div>
            <div className="courses__goBackLink">
                <a className="courses__goBackLink--a" href="/our_courses">Our Courses /</a>
                <a className="courses__goBackLink--a courses__goBackLink--a--ourCourses" href="#"> Achievers Products</a>
            </div>
            <img className="courses__topBanner" src={TopBanner} />

            <div className="courses__joinCommunity">
                <img className="courses__joinCommunity--tickIcon" src={TickIcon} />
                <p className="courses__joinCommunity--trustedBy">Trusted by</p>
                <p className="courses__joinCommunity--sixThousandStudents">6,000+ students</p>
                <hr className="courses__joinCommunity--verticalLine"></hr>
                <p className="courses__joinCommunity--joinCommunity">Join our community</p>
                <a className="courses__joinCommunity--contact" href="#">Contact Us</a>
                <a className="courses__joinCommunity--downloadApp" href="#">Download our App</a>
            </div>

            <div className="courses__everythingYouNeed">
                <p className="courses__everythingYouNeed--heading">Everything You Need For Your Entrance Exam Preparation</p>
                <p className="courses__everythingYouNeed--description">Online Courses, Practice Question Bank, Mock Test Series, Rankers' Test Series, Study Materials. Doubt Clearing Sessions and more....</p>

                <div className="courses__everythingYouNeed--RowPics">
                    <img className="courses__everythingYouNeed--RowPics--smallBanners" src={SmallBanner1} />
                    <img className="courses__everythingYouNeed--RowPics--smallBanners" src={SmallBanner2} />
                    <img className="courses__everythingYouNeed--RowPics--smallBanners" src={SmallBanner3} />
                </div>
                <div className="courses__everythingYouNeed--RowPics">
                    <img className="courses__everythingYouNeed--RowPics--smallBanners" src={SmallBanner4} />
                    <img className="courses__everythingYouNeed--RowPics--smallBanners" src={SmallBanner5} />
                    <img className="courses__everythingYouNeed--RowPics--smallBanners" src={SmallBanner6} />
                </div>
            </div>

            {/* Achievers Products */}
            <div className="courses__achProducts">
                <p className="courses__achProducts--heading">Achievers Products: All-India Entrance Exams</p>
                <p className="courses__achProducts--description">Some Selected Study Material and products for various popular All India Entrance Exams like - JEE, NEET, CSIR-UGC NET (Chemical Sciences), IIT-JAM, BHU, DU, CU, HSC, IISER, IACS, PU, etc</p>
                <div className="courses__filters">
                    <span className="courses__filters--categoryRow">
                        <span>Filters: </span>
                        <select className="courses__filters--categoryRow--dropdown" name="category" value={category} onChange={handleCategory} >
                            <option value=''>All Products</option>
                            {
                                categories.map(category => (
                                    <option value={"category=" + category._id} key={category._id}>
                                        {category.name}
                                    </option>
                                ))
                            }
                        </select>
                    </span>
                    <input className="courses__filters--searchBar" type="text" value={search} placeholder="Search products..."
                    onChange={e => setSearch(e.target.value.toLowerCase())} />
                    <span className="courses__filters--sortRow">
                        <span>Sort By: </span>
                        <select className="courses__filters--sortRow--dropdown" value={sort} onChange={e => setSort(e.target.value)} >
                            <option value=''>Newest</option>
                            <option value='sort=oldest'>Oldest</option>
                            <option value='sort=-sold'>Bestselling</option>
                            <option value='sort=-price'>Price: High-Low</option>
                            <option value='sort=price'>Price: Low-High</option>
                        </select>
                    </span>
                </div>    
        
                {
                    isAdmin && 
                    <div className="delete-all">
                        <span>Select all</span>
                        <input type="checkbox" checked={isCheck} onChange={checkAll} />
                        <button onClick={deleteAll}>Delete ALL</button>
                    </div>
                }

                <div className="products courses__products">
                    {
                        products.map(product => {
                            return <ProductItem key={product._id} product={product}
                            isAdmin={isAdmin} deleteProduct={deleteProduct} handleCheck={handleCheck} />
                        })
                    } 
                </div>

                <LoadMore />
                {products.length === 0 && <Loading />}
            </div>
        </div>

        <Footer />
        </>
    )
}

export default OurCourses;