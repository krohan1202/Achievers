import React, {useContext, useState} from 'react';
import {GlobalState} from '../../GlobalState';
import Menu from './icon/menu.svg';
import Close from './icon/close.svg';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Filters from '../mainpages/products/Filters';

//Header Assets
import Logo from "../../assets/Pics/Home/1-Navbar/Logo.png";

function Header() {
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin
    const [cart] = state.userAPI.cart
    const [menu, setMenu] = useState(false)

    const logoutUser = async () =>{
        await axios.get('/user/logout')
        
        localStorage.removeItem('firstLogin')
        
        window.location.href = "/";
    }

    const adminRouter = () =>{
        return(
            <>
                <li><Link className="nav__createProduct" to="/create_product">Create Product</Link></li>
                <li><Link className="nav__category" to="/category">Categories</Link></li>
            </>
        )
    }

    const loggedRouter = () =>{
        return(
            <>
                <li><Link to="/history">History</Link></li>
                <li><Link to="/" onClick={logoutUser}>
                        <svg className="nav__loginIcon" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.5 0C8.288 0 0 8.288 0 18.5C0 28.712 8.288 37 18.5 37C28.712 37 37 28.712 37 18.5C37 8.288 28.712 0 18.5 0ZM18.5 5.55C21.571 5.55 24.05 8.029 24.05 11.1C24.05 14.171 21.571 16.65 18.5 16.65C15.429 16.65 12.95 14.171 12.95 11.1C12.95 8.029 15.429 5.55 18.5 5.55ZM18.5 31.82C16.3019 31.82 14.138 31.2761 12.2013 30.2367C10.2645 29.1973 8.61504 27.6947 7.4 25.863C7.4555 22.1815 14.8 20.165 18.5 20.165C22.1815 20.165 29.5445 22.1815 29.6 25.863C28.385 27.6947 26.7355 29.1973 24.7987 30.2367C22.862 31.2761 20.6981 31.82 18.5 31.82Z" fill="white"/>
                        </svg>
                        <p  className="nav__logout">Logout</p>
                    </Link></li>
            </>
        )
    }


    const styleMenu = {
        left: menu ? 0 : "-100%"
    }

    return (
        <>
        <div className="navbar">
            <div className="menu" onClick={() => setMenu(!menu)}>
                <img src={Menu} alt="" width="30" />
            </div>

            
            <img className="logo" src={Logo} />
            
            <span>
                <svg className="nav__phoneIcon" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.2632 14.4853C18.9061 14.4853 17.5769 14.2734 16.317 13.8577C15.7022 13.6458 15.004 13.809 14.5999 14.2213L12.1023 16.1075C9.23653 14.5779 7.40243 12.745 5.89371 9.90001L7.72895 7.46148C8.19095 6.99948 8.35655 6.32325 8.15855 5.6899C7.73937 4.422 7.52634 3.09158 7.52634 1.73684C7.52634 0.779246 6.74709 0 5.7895 0H1.73684C0.779246 0 0 0.779246 0 1.73684C0 12.9094 9.09064 22 20.2632 22C21.2208 22 22 21.2208 22 20.2632V16.2221C22 15.2645 21.2208 14.4853 20.2632 14.4853Z" fill="#8FD0FF"/>
                </svg>
                <p className="nav__helpLine">Help Line: 9007871854 / 9830668808 / 86970 38764 / 7384905704 </p>
            </span>

            <span>
                <svg className="nav__emailIcon" width="26" height="20" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.542739 1.58214C4.11114 4.60418 10.3726 9.92088 12.2129 11.5786C12.4599 11.8024 12.7249 11.9161 13 11.9161C13.2745 11.9161 13.539 11.8034 13.7855 11.5808C15.6274 9.92139 21.8888 4.60418 25.4573 1.58214C25.6795 1.39435 25.7133 1.06427 25.5335 0.834691C25.1177 0.30418 24.4977 0 23.8333 0H2.16667C1.5023 0 0.882313 0.30418 0.466567 0.834742C0.2867 1.06427 0.320571 1.39435 0.542739 1.58214Z" fill="#8FD0FF"/>
                    <path d="M25.6858 3.21984C25.4938 3.13047 25.2679 3.16165 25.1082 3.29815C21.1509 6.65286 16.1003 10.9529 14.5113 12.3848C13.6194 13.1899 12.3816 13.1899 11.4876 12.3837C9.79387 10.8576 4.12222 6.03607 0.89182 3.2981C0.730996 3.1616 0.504613 3.13148 0.314184 3.21979C0.122738 3.30871 0 3.5002 0 3.71125V17.3333C0 18.5283 0.971699 19.5 2.16668 19.5H23.8334C25.0283 19.5 26 18.5283 26 17.3333V3.71125C26 3.5002 25.8773 3.3082 25.6858 3.21984Z" fill="#8FD0FF"/>
                </svg>
                <p className="nav__email">Email: drsrcphd@gmail.com</p>
            </span>

            <ul style={styleMenu}>

                {isAdmin && adminRouter()}

                {
                    isLogged ? loggedRouter() : <li><Link to="/login">
                        <svg className="nav__loginIcon" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.5 0C8.288 0 0 8.288 0 18.5C0 28.712 8.288 37 18.5 37C28.712 37 37 28.712 37 18.5C37 8.288 28.712 0 18.5 0ZM18.5 5.55C21.571 5.55 24.05 8.029 24.05 11.1C24.05 14.171 21.571 16.65 18.5 16.65C15.429 16.65 12.95 14.171 12.95 11.1C12.95 8.029 15.429 5.55 18.5 5.55ZM18.5 31.82C16.3019 31.82 14.138 31.2761 12.2013 30.2367C10.2645 29.1973 8.61504 27.6947 7.4 25.863C7.4555 22.1815 14.8 20.165 18.5 20.165C22.1815 20.165 29.5445 22.1815 29.6 25.863C28.385 27.6947 26.7355 29.1973 24.7987 30.2367C22.862 31.2761 20.6981 31.82 18.5 31.82Z" fill="white"/>
                        </svg>
                        <p className="nav__login">Login / Signup</p></Link></li>
                }

                <li onClick={() => setMenu(!menu)}>
                    <img src={Close} alt="" width="30" className="menu" />
                </li>

            </ul>

            {
                isAdmin ? '' 
                :<span className="cart-icon">
                    <span>{cart.length}</span>
                    <Link to="/cart">
                        <svg width="1.82vw" viewBox="0 0 576 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M528.12 301.319L575.393 93.319C578.806 78.301 567.391 64 551.99 64H159.208L150.042 19.19C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24V40C0 53.255 10.745 64 24 64H93.883L164.131 407.435C147.325 417.1 136 435.222 136 456C136 486.928 161.072 512 192 512C222.928 512 248 486.928 248 456C248 440.326 241.553 426.165 231.176 416H440.823C430.447 426.165 424 440.326 424 456C424 486.928 449.072 512 480 512C510.928 512 536 486.928 536 456C536 433.828 523.112 414.668 504.421 405.595L509.938 381.319C513.351 366.301 501.936 352 486.535 352H218.117L211.572 320H504.717C515.923 320 525.637 312.246 528.12 301.319Z" fill="white"/>
                        </svg>
                        <p className="nav__cart">Cart</p>
                    </Link>
                </span>
            }
            
            <Filters />
        </div>

        <ul className="smallNav">
            <li className="nav__smallNav--li"><a className="nav__smallNav" href="/">Home</a></li>
            <li className="nav__smallNav--li"><a className="nav__smallNav" href="#">About Us</a></li>
            <li className="nav__smallNav--li"><a className="nav__smallNav" href="/our_courses">Our Courses</a></li>
            <li className="nav__smallNav--li"><a className="nav__smallNav" href="#">Result</a></li>
            <li className="nav__smallNav--li"><a className="nav__smallNav" href="#">Testimonials</a></li>
            <li className="nav__smallNav--li"><a className="nav__smallNav" href="#">General Info.</a></li>
            <li className="nav__smallNav--li"><a className="nav__smallNav" href="/careers">Jobs</a></li>
            <li className="nav__smallNav--li"><a className="nav__smallNav" href="#">Contact Us</a></li>
            <li className="nav__smallNav--li"><a className="nav__smallNav" href="#">LIVE Enquiry Desk</a></li>
        </ul>
        </>
    )
}

export default Header
