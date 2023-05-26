import axios from "axios";
import { Header } from "../Header"
import { Footer } from "../Footer"
import { Search } from "../Search"
import { JobListing } from "./Joblist"
import { useEffect, useState } from "react";
import { SidebarSearch } from "./SidebarSearch";
import { Loader } from "../Loader"
import { useParams } from "react-router-dom";

const Job_Listing =()=>{

  const [loader,setLoader] = useState(false);

  const [job_offers,setjob_offers] = useState([]);

  const [visibleItems, setVisibleItems] = useState(5);

  const loadMore = () => {
    setVisibleItems(visibleItems + 5);
  };

  /*let { where } = useParams();
  let { what } = useParams();
  searchSidebarTop ["dataFromChildWhere"] = where;
  searchSidebarTop ["dataFromChildWhat"] = what;*/
   const [searchSidebarItems, setsearchSidebarItems] = useState(
    {
      fullTime :  false,
      partTime  : false,
      freelancer  : false,
      temporary  : false,
      oneLessExperience  : false,
      twoExperience  : false,
      threeExperience : false,
      fourExperience  : false,
      fiveExperience  : false,
      dateposted1  : false,
      dateposted2  : false,
      dateposted3  : false,
      dateposted4  : false,
      dateposted5  : false
     }
    );

   const [searchSidebarTop, setsearchSidebarTop] = useState(
    {
      dataFromChildWhere :  "",
      dataFromChildWhat  : "",
     }
    );
    const RestSearch = ()=>{
      searchSidebarItems  ["fullTime"] =  false;
      searchSidebarItems  ["partTime"]  = false;
      searchSidebarItems  ["freelancer"] = false;
      searchSidebarItems  ["temporary"]  = false;
      searchSidebarItems  ["oneLessExperience"]  = false;
      searchSidebarItems  ["twoExperience"]  = false;
      searchSidebarItems  ["threeExperience"] = false;
      searchSidebarItems  ["fourExperience"]  = false;
      searchSidebarItems  ["fiveExperience"]  = false;
      searchSidebarItems  ["dateposted1"]  = false;
      searchSidebarItems  ["dateposted2"]  = false;
      searchSidebarItems  ["dateposted3"]  = false;
      searchSidebarItems  ["dateposted4"]  = false;
      searchSidebarItems  ["dateposted5"]  = false;
      searchSidebarTop ["dataFromChildWhere"] = "";
      searchSidebarTop ["dataFromChildWhat"] = "";
      getAllJob()
    }

    const checkboxes = (data)=>{
      searchSidebarItems[data.nomCB] =  data.valCB;
      getAllJob()
    }
    const searchTop = (data)=>{
      searchSidebarTop[data.nomST] =  data.valST;
      getAllJob()
    }
 

  const getAllJob = () => {
   setLoader(true)

    const url =  `http://127.0.0.1:8000/job/offres/search?fullTime=${searchSidebarItems.fullTime}&partTime=${searchSidebarItems.partTime}&freelancer=${searchSidebarItems.freelancer}&temporary=${searchSidebarItems.temporary}&oneLessExperience=${searchSidebarItems.oneLessExperience}&twoExperience=${searchSidebarItems.twoExperience}&threeExperience=${searchSidebarItems.threeExperience}&fourExperience=${searchSidebarItems.fourExperience}&fiveExperience=${searchSidebarItems.fiveExperience}&dateposted1=${searchSidebarItems.dateposted1}&dateposted2=${searchSidebarItems.dateposted2}&dateposted3=${searchSidebarItems.dateposted3}&dateposted4=${searchSidebarItems.dateposted4}&dateposted5=${searchSidebarItems.dateposted5}&stwhere=${searchSidebarTop.dataFromChildWhere}&stwhat=${searchSidebarTop.dataFromChildWhat}`

    
     axios.get(url).then((res) => {
        setjob_offers(res.data);
        setLoader(false)
      })
  }






  useEffect(() => {
    getAllJob();
  }, [searchSidebarItems]);

  
    return (
    <>
    <Header/>

    <Search  onSearchTop={searchTop} />

    <section className="space-ptb">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
      


            <SidebarSearch 
              checkboxes={checkboxes} 
            />
    
            </div>




            <div className="col-lg-9">
              {/*=================================
                    right-sidebar */}


              <div className="row mb-4">
                <div className="col-md-4">
                  <div className="section-title mb-3 mb-lg-4">
                    <h6 className="mb-0">Showing 1-5 of <span className="text-primary">{job_offers.length} Jobs</span></h6>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="job-filter-tag">
                    <ul className="list-unstyled">
                      { searchSidebarItems.fullTime ? <li><a href='#'style={{color:"#0085ff"}}>Full Time  </a></li> : ""}
                      { searchSidebarItems.partTime ? <li><a href='#' style={{color:"#ffc107"}}>Part Time  </a></li> : ""}
                      { searchSidebarItems.freelancer ? <li><a href='#' style={{color:"#53b427"}}>Freelancer </a></li> : ""}
                      { searchSidebarItems.temporary ? <li><a href='#' style={{color:"#e74c3c"}}>Temporary</a></li> : ""}
                      <li><a className="filter-clear"onClick={()=>RestSearch()}>Reset Search <i className="fas fa-redo-alt" /> </a></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="row">


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
      </section>
      <Footer/>
    </>
    )
}
export {Job_Listing}