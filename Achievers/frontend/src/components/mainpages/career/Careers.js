import React from "react";
import Header from "../../headers/Header";
import Footer from "../../footers/footer";
import JobCards from "./JobCards";
import jobs from "./jobs";

// Assets
import TopBanner from "../../../assets/Pics/Careers/Top Banner.png";
import Picy from "../../../assets/Pics/Careers/Picy.png";

function Careers() {

    // JobCards
    function createJobs(jobs) {
        return (
          <JobCards
            key={jobs.id}
            jobTitle={jobs.jobTitle}
            jobRequirements={jobs.jobRequirements}
            rolesAndResponsibilities={jobs.rolesAndResponsibilities}
            link={jobs.link}
          />
        );
      }


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
                                <a href="#viewOpenPositions" className="careers__joinAch--viewPositionsBtn">View Open Positions</a>
                                <a href="#" className="careers__joinAch--aboutUsBtn">About Us</a>
                            </div>
                    </div>
                    <img className="careers__joinAch--topBanner" src={TopBanner} alt="Top Banner" />
                </div>
                <div className="careers__statsUnderTopBanner">
                    <div className="careers__statsUnderTopBanner--stat">
                        <img className="careers__statsUnderTopBanner--statImg" src={Picy} alt="Stats"/>
                        <span className="careers__statsUnderTopBanner--statNumber">2K+</span>
                        <span className="careers__statsUnderTopBanner--statDescription">&nbsp;&nbsp;Website monthly views</span>
                    </div>
                    <div className="careers__statsUnderTopBanner--stat">
                        <img className="careers__statsUnderTopBanner--statImg" src={Picy} alt="Stats"/>
                        <span className="careers__statsUnderTopBanner--statNumber">21K+</span>
                        <span className="careers__statsUnderTopBanner--statDescription"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Happy students</span>
                    </div>
                    <div className="careers__statsUnderTopBanner--stat">
                        <img className="careers__statsUnderTopBanner--statImg" src={Picy} alt="Stats"/>
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
                    <img className="careers__welcomeToAch--president" src={Picy} alt="President"/>
                    <p className="careers__welcomeToAch--presidentName">Dr. Sujoy Roy Chowdhury (SRC)</p>
                    <p className="careers__welcomeToAch--presidentDesignation">President, Founder and CEO</p>

                    <div className="careers__welcomeToAch--vicePresidents">
                        <div className="careers__welcomeToAch--vicePresidentCard">
                            <img className="careers__welcomeToAch--vicePresidentCardImg" src={Picy} alt="Vice President"/>
                            <p className="careers__welcomeToAch--vicePresidentCardName">Prof.Anindya Das (AD)</p>
                            <p className="careers__welcomeToAch--vicePresidentCardDesignation">Vice President (Academic) and Controller of Examination</p>
                        </div>
                        <div className="careers__welcomeToAch--vicePresidentCard">
                            <img className="careers__welcomeToAch--vicePresidentCardImg" src={Picy} alt="Vice President"/>
                            <p className="careers__welcomeToAch--vicePresidentCardName">Mr. Debdut Gangopadhyay</p>
                            <p className="careers__welcomeToAch--vicePresidentCardDesignation2">Vice President (Administration) and Operations Head</p>
                        </div>
                        <div className="careers__welcomeToAch--vicePresidentCard">
                            <img className="careers__welcomeToAch--vicePresidentCardImg" src={Picy} alt="Vice President"/>
                            <p className="careers__welcomeToAch--vicePresidentCardName">Dr. Sayan Roy Chowdhury</p>
                            <p className="careers__welcomeToAch--vicePresidentCardDesignation">Vice President (Academic) and Dean of Science</p>
                        </div>
                    </div>

                    <p className="careers__welcomeToAch--textPara">Achievers enjoys the reputation of being the pre-eminent institution for undergraduate courses in the city because of the excellence of its teaching methodology and student centric approach. Achievers supports and nurtures young talent and helps them develop their knowledge base and skill set in order to pursue a successful career in a wide range of specializations after completing their undergraduate courses. We are here to shape the career of the student through a complete educational hub - School Level Education: Class 9 to Class 12 and Higher Education: Undergraduate to Ph.D. Entrance Exam Preparation.</p>
                    <p className="careers__welcomeToAch--textPara">Our students have been successful not only in University Exams but also in various National-level entrance exams and they have been the guiding force for our various programs. Over the past years, Achievers has been in the forefront in evaluating various needs of the students and contributing for their success at these highly competitive exams. Our academic program is of the highest caliber because we believe in the transformative power of ideas and concise and easy way to understand. Our faculty and our diverse student body from different social walks of life all come together to contribute the same purpose: to maintain Achievers' excellent reputation in education.</p>
                
                    <div className="careers__welcomeToAch--textParawithImg">
                        <img className="careers__welcomeToAch--textParawithImg--Img1" src={Picy} alt="Left illustration"/>
                        <p className="careers__welcomeToAch--textParawithImg--text">Achievers takes immense pride in being recognized as a front-runner amongst aspiring students owing to high standards of teaching and dynamic discipline. We have flourished from a humble beginning in 1999 to being one of the largest tuition centres providing education to over 3000 students in every academic session. As we see more students getting associated with Achievers, we envision ourselves offering more bachelor degree courses. We endorse and nurture diversity in our institution, hence we boast a family of individuals from all walks of life.Our academic programs reflect diversified ideas rendering an excellent reputation to the centre</p>
                        <img className="careers__welcomeToAch--textParawithImg--Img2" src={Picy} alt="Right illustration"/>
                    </div>

                    {/* OUR ADMINISTRATIVE TEAM SECTION */}

                        <p className="careers__ourTeam--Heading">Our Administrative Team</p>
                        <div className="careers__ourTeam--TeamCards">
                        {/* Academic Coordinators */}
                        <div className="careers__ourTeam--academicCoordinators">
                            <p className="careers__ourTeam--academicCoordinatorsHeading">ACADEMIC COORDINATORS</p>
                            <div className="careers__ourTeam--academicCoordinatorsCard">
                                <img className="careers__ourTeam--academicCoordinatorsCardImg" src={Picy} alt="Academic Coordinators"/>
                                <span className="careers__ourTeam--academicCoordinatorsCardName">Mr. Indranil Dalui</span>
                                <span className="careers__ourTeam--academicCoordinatorsCardDesignation">Academic Coordinator and Faculty</span>
                            </div>

                            <div className="careers__ourTeam--academicCoordinatorsCard">
                                <img className="careers__ourTeam--academicCoordinatorsCardImg" src={Picy} alt="Academic Coordinators"/>
                                <span className="careers__ourTeam--academicCoordinatorsCardName">Mr. Indranil Dalui</span>
                                <span className="careers__ourTeam--academicCoordinatorsCardDesignation">Academic Coordinator and Faculty</span>
                            </div>
                        </div>

                        {/* Administrative Department */}
                        <div className="careers__ourTeam--academicCoordinators">
                            <p className="careers__ourTeam--academicCoordinatorsHeading">ACADEMIC COORDINATORS</p>
                            <div className="careers__ourTeam--academicCoordinatorsCard">
                                <img className="careers__ourTeam--academicCoordinatorsCardImg" src={Picy} alt="Administrative Department"/>
                                <span className="careers__ourTeam--academicCoordinatorsCardName">Mr. Indranil Dalui</span>
                                <span className="careers__ourTeam--academicCoordinatorsCardDesignation">Academic Coordinator and Faculty</span>
                            </div>

                            <div className="careers__ourTeam--academicCoordinatorsCard">
                                <img className="careers__ourTeam--academicCoordinatorsCardImg" src={Picy} alt="Administrative Department"/>
                                <span className="careers__ourTeam--academicCoordinatorsCardName">Mr. Indranil Dalui</span>
                                <span className="careers__ourTeam--academicCoordinatorsCardDesignation">Academic Coordinator and Faculty</span>
                            </div>
                        </div>

                        {/* Executive Officers */}
                        <div className="careers__ourTeam--academicCoordinators">
                            <p className="careers__ourTeam--academicCoordinatorsHeading">ACADEMIC COORDINATORS</p>
                            <div className="careers__ourTeam--academicCoordinatorsCard">
                                <img className="careers__ourTeam--academicCoordinatorsCardImg" src={Picy} alt="Executive Officers"/>
                                <span className="careers__ourTeam--academicCoordinatorsCardName">Mr. Indranil Dalui</span>
                                <span className="careers__ourTeam--academicCoordinatorsCardDesignation">Academic Coordinator and Faculty</span>
                            </div>

                            <div className="careers__ourTeam--academicCoordinatorsCard">
                                <img className="careers__ourTeam--academicCoordinatorsCardImg" src={Picy} alt="Executive Officers"/>
                                <span className="careers__ourTeam--academicCoordinatorsCardName">Mr. Indranil Dalui</span>
                                <span className="careers__ourTeam--academicCoordinatorsCardDesignation">Academic Coordinator and Faculty</span>
                            </div>
                        </div>
                        </div>
                    
                    {/* Job Opportunities */}
                    <div id="viewOpenPositions" className="careers__jobs">
                        <p className="careers__jobs--heading">We are looking for interested individuals!</p>
                        <div className="careers__jobCards">{jobs.map(createJobs)}</div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Careers;