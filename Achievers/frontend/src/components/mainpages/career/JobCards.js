import React from "react";

function JobCards(props) {

    const rolesAndResponsibilities = props.rolesAndResponsibilities.map((roles) => 
        <li className="careers__jobCards-bulletPoints">{roles}</li>  
        );

    return (
      <div className="courses__jobCards">
          <div className="courses__jobCards--leftSide">
            <p className="courses__jobCards--jobTitle">{props.jobTitle}</p>
            <p className="courses__jobCards--jobHighlightsHeading">Job Highlights</p>
            <p className="courses__jobCards--jobRequirements">{props.jobRequirements}</p>
            <a href={props.link} className="courses__jobCards--applyBtn">Apply Now</a>
          </div>

          <div className="courses__jobCards--RightSide">
            <p className="courses__jobCards--jobDescription">Job Description</p>
            <p className="courses__jobCards--rolesAndResponsibilitiesHeading">Roles And Responsibilities</p>
            {rolesAndResponsibilities}
          </div>  
         
      </div>
    );
  }
  
  export default JobCards;