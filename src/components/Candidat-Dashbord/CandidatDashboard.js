
import axios from "axios";
import { Header } from "../Header";

import { HeaderProfile } from "./HeaderProfile";
import { useEffect, useState } from "react";
import { JobListing } from "../JobListing/Joblist";
import { Footer } from "../Footer";
import { Loader } from "../Loader";

const CandidatDashboard = (props) => {
  
  const [loader,setLoader] = useState(false);

  // const navigate = useNavigate();
  const [visibleItems, setVisibleItems] = useState(3);
  const loadMore = () => {
    setVisibleItems(visibleItems + 5);
  };
  const [job_offers,setjob_offers] = useState([]);
  
  const getAllJob = () => {
   axios.get("http://127.0.0.1:8000/job/offres/search?fullTime=false&partTime=false&freelancer=false&temporary=false&oneLessExperience=false&twoExperience=false&threeExperience=false&fourExperience=false&fiveExperience=false&dateposted1=false&dateposted2=false&dateposted3=false&dateposted4=false&dateposted5=false").then((res) => {
    setjob_offers(res.data);
   })
  }
  const [IDCandidat,setIDCandidat] = useState("");
  const IdCandidat =(data)=>{
    setIDCandidat(data);
  }
  useEffect(() => {
    getAllJob();
    //setFilteredData([]);
   
  }, []);  
  return (
      <>
      <Header/>
      <div>

      <HeaderProfile  IdCandidat={IdCandidat}  />
   
        {/*=================================
Dashboard Nav */}
        {/*=================================
Candidates Dashboard */}
      {/*=================================
Candidates Dashboard */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-12">

              <div className="user-dashboard-info-box mb-0 pb-4">
                <div className="section-title">
                  <h4>Recent Applied Jobs</h4>
                </div>
                <div className="row">
                  <div className="col-12">


                  { loader ? <Loader />  : "" }   

              {job_offers.slice(0, visibleItems)
              .map((job_offer) => (
               <div key={job_offer.id}>
                
               <JobListing Joboffer={job_offer}/>
               </div>
               ))}                    
               
               <div className="d-grid gap-2 col-6 mx-auto" style={{marginTop:"20px"}}>
               {visibleItems < job_offers.length && (
                 <button onClick={loadMore} className="btn btn-outline-dark" type="button">View More</button>
               )}
               </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


<Footer/>


    
      </div>
      </>
      )
}

export {CandidatDashboard}
