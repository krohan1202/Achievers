import React from "react";
import Header from "../../headers/Header";
import Footer from "../../footers/footer";

// Assets
import TopBanner from "../../../assets/Pics/Careers/Top Banner.png";
import Picy from "../../../assets/Pics/Careers/Picy.png";

function Careers() {
    return (
        <>
            <Header />
            <div className="careers">
                <div className="careers__joinAch">
                    <div className="careers__joinAch--whiteBox">
                            <span className="careers__joinAch--heading">Join the </span>
                            <span className="careers__joinAch--heading careers__joinAch--heading--A">A</span>
                            <span className="careers__joinAch--heading careers__joinAch--heading--CHIEVERS">CHIEVERS </span>
                            <span className="careers__joinAch--heading">family</span>

                            <div className="careers__joinAch--links">
                                <a href="#" className="careers__joinAch--viewPositionsBtn">View Open Positions</a>
                                <a href="#" className="careers__joinAch--aboutUsBtn">About Us</a>
                            </div>
                    </div>
                    <img className="careers__joinAch--topBanner" src={TopBanner} />
                </div>
                <div className="careers__statsUnderTopBanner">
                    <div className="careers__statsUnderTopBanner--stat">
                        <img className="careers__statsUnderTopBanner--statImg" src={Picy} />
                        <span className="careers__statsUnderTopBanner--statNumber">2K+</span>
                        <span className="careers__statsUnderTopBanner--statDescription">&nbsp;&nbsp;Website monthly views</span>
                    </div>
                    <div className="careers__statsUnderTopBanner--stat">
                        <img className="careers__statsUnderTopBanner--statImg" src={Picy} />
                        <span className="careers__statsUnderTopBanner--statNumber">21K+</span>
                        <span className="careers__statsUnderTopBanner--statDescription"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Happy students</span>
                    </div>
                    <div className="careers__statsUnderTopBanner--stat">
                        <img className="careers__statsUnderTopBanner--statImg" src={Picy} />
                        <span className="careers__statsUnderTopBanner--statNumber">1K+</span>
                        <span className="careers__statsUnderTopBanner--statDescription">App Downloads</span>
                    </div>
                </div>
                <div className="careers__welcomeToAch">
                    <p className="careers__welcomeToAch--headingWelcomeTo">Welcome to</p>
                    <span className="careers__welcomeToAch--heading--A">A</span>
                    <span className="careers__welcomeToAch--heading--CHIEVERS">CHIEVERS</span>

                    <p className="careers__welcomeToAch--description1">Welcome to ACHIEVERS! We are delighted that you have chosen to join our organization and hope that you will enjoy a long and successful career with us. As you become familiar with our culture and mission, we hope you will take advantage of opportunities to enhance your career and further ACHIEVERS’ goals. </p>
                    <p className="careers__welcomeToAch--description2">You are joining an organization that has a reputation for outstanding leadership, innovation, and expertise. With your active involvement, creativity, and support, ACHIEVERS will continue to achieve its goals. We sincerely hope you will take pride in being an important part of ACHIEVERS' success.</p>
                    <img className="careers__welcomeToAch--president" src={Picy} />

                    <div className="careers__welcomeToAch--vicePresidents">
                        <div className="careers__welcomeToAch--vicePresidentCard">
                            <img className="careers__welcomeToAch--vicePresidentCardImg" src={Picy} />
                            <p className="careers__welcomeToAch--vicePresidentCardName">Prof.Anindya Das (AD)</p>
                            <p className="careers__welcomeToAch--vicePresidentCardDesignation">Vice President (Academic) and Controller of Examination</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Careers;