import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactTimeAgo from 'react-time-ago';

const JobListing = (props) => {
//const recruiter = props.Joboffer.recruiter.split("/")[3];
 //console.log(recruiter);
//console.log(props.searchSidebarTop.dataFromChildWhere);
 const navigate = useNavigate();
 
 const JobDetails=()=>{

  
   navigate("/Job-Details/"+props.Joboffer.id);
 }
  return (
    <>
      <div className="col-12">
        <div className="job-list ">
        
          <div className="job-list-details">
            <div className="job-list-info">
              <div className="job-list-title">
                <h5 className="mb-0">
                  <a  onClick={()=>JobDetails()}>{props.Joboffer.titlejob}</a>
                </h5>
              </div>
              <div className="job-list-option">
                <ul className="list-unstyled">
                  <li>
                    {" "}
                    <span>via</span>{" "}
                    <a onClick={()=>JobDetails()}>Fast Systems Consultants</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <span>Experience :</span>{" "}
                    <a onClick={()=>JobDetails()}>{props.Joboffer.expeience}</a>{" "}
                  </li>
                  <li>
                    <i className="fas fa-map-marker-alt pe-1" />
                    {props.Joboffer.FullAdress}
                  </li>
                  <li>
                    <i className="fas fa-filter pe-1" />
                    {props.Joboffer.email}
                  </li>
                  <li>
                    <a className="freelance" onClick={()=>JobDetails()}>
                      <i className="fas fa-suitcase pe-1" />
                      {props.Joboffer.contract}
                    </a>
                  </li>
                </ul> 
              </div>
            </div>
          </div>
          <div className="job-list-favourite-time">
            {" "}
            <a className="job-list-favourite order-2" href="#">
              <i className="far fa-heart" />
            </a>{" "}
            <span className="job-list-time order-1">
              <i className="far fa-clock pe-1" />
              <ReactTimeAgo date={Date.parse(props.Joboffer.created_at.date)}  timeStyle="round-minute" />
            </span>{" "}
          </div>




          
        </div>
      </div>
    
    </>
  );
};
export { JobListing };
