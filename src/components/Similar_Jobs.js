import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Similar_Jobs = ()=>{
    const param = useParams("");
    const [visibleItems, setVisibleItems] = useState(5);
    const navigate = useNavigate("");
    const loadMore = () => {
      navigate("/Job-Listing");
    };
  
    const [job_offers,setjob_offers] = useState([]);
    const getAllJob = () => {
      axios.get("http://127.0.0.1:8000/api/job_offers").then((res) => {
      // console.log(res.data);
       setjob_offers(res.data);
      })
     }

     const JobDetails=(id)=>{
      navigate("/Job-Details/"+id);
    }
    useEffect(() => {
        getAllJob();
        //setFilteredData([]);
       
      }, []);
return (
<>
<div className="widget">
                  <div className="widget-title">
                    <h5>Similar Jobs</h5>
                  </div>
                  <div className="similar-jobs-item widget-box">
                {job_offers.slice(0, visibleItems).map((job_offer) =>( 
                    <div className="job-list" key={job_offer.id}>
                      <div className="job-list-details">
                        <div className="job-list-info">
                          <div className="job-list-title">
                            <h6><a onClick={()=>JobDetails(job_offer.id)}>{job_offer.titlejob}</a></h6>
                          </div>
                          <div className="job-list-option">
                            <ul className="list-unstyled">
                              <li>
                                <span>Adress </span>
                                <a onClick={()=>JobDetails(job_offer.id)}>{job_offer.FullAdress}</a>
                              </li>
                              <li><a className="freelance" ><i className="fas fa-suitcase pe-1" />{job_offer.cONTRACT}</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                              ))
                            }
                    <div className="d-grid gap-2 col-6 mx-auto" style={{marginTop:"20px"}}>
                    {visibleItems < job_offers.length && (
                    <button onClick={loadMore} className="btn btn-outline-dark" style={{padding: "5px"}} type="button">View More</button>
                    )}
                  </div>     
                  </div>
                </div>
</>)
}
export {Similar_Jobs}