import React from "react";
import {GlobalState} from '../../../GlobalState';
import ProductItem from '../utils/productItem/ProductItem';
import Loading from '../utils/loading/Loading';
import axios from 'axios';
import LoadMore from './LoadMore';
import Header from "../../headers/Header";
import Footer from "../../footers/footer";

//Assets
import TopBanner from "../../../assets/Pics/Our Courses/Top Banner.png";
import TickIcon from "../../../assets/Pics/Our Courses/tick icon.png";


function OurCourses() {
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
            </div>
        </div>

        <Footer />
        </>
    )
}

export default OurCourses;