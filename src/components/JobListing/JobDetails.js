import { useNavigate, useParams } from "react-router-dom"
import { Header } from "../Header"
import { Search } from "../Search"
import axios from "axios";
import { useEffect, useState } from "react";
import { FormOffreJob } from "./FormOffreJob";
import { Similar_Jobs } from "../Similar_Jobs";
import { Footer } from "../Footer";

const JobDetails =()=>{

    const param = useParams("");
    const joboffreID=param.id;
    const [title,setTitle] = useState("");
    const [JobDescription,setJobDescription] =useState("");
    const [Email,setEmail] = useState("");
    const [CurrencyPosition,SetCurrencyPosition] = useState("");
    const [Salary,setSalary] = useState("");
    const [SalaryMin,setSalaryMin] = useState("");
    const [SalaryMax,setSalaryMax] = useState("");
    const [Experience,setExperience] = useState("");
    const [Qualification,setQualification] = useState("");
    const [Country,setCountry] = useState("");
    const [State,setState] = useState("");
    const [City,setCity] = useState("");
    const [FullAddress,setFullAddress] = useState("");
    const [contract,setcontract] = useState("");
    const [RecruiterID,setRecruiter] = useState("");
    //console.log(RecruiterID);
    const getjobDetails = ()=>{
        axios.get("http://127.0.0.1:8000/api/job_offers/"+joboffreID).then((res)=>{
         setTitle(res.data.titlejob);
         setJobDescription(res.data.description);
         setEmail(res.data.email);
         SetCurrencyPosition(res.data.currencyPosition);
         setSalary(res.data.salary);
         setSalaryMin(res.data.salaryMin);
         setSalaryMax(res.data.salaryMax);
         setExperience(res.data.expeience);
         setQualification(res.data.qualifications);
         setCountry(res.data.Country);
         setState(res.data.State);
         setCity(res.data.city);
         setFullAddress(res.data.FullAdress);
         setcontract(res.data.cONTRACT);
         setRecruiter(res.data.recruiter);
     });
    }
 

    const navigate = useNavigate("");
     
     getjobDetails();
     const JobDetails=(id)=>{
      navigate("/Job-Details/"+id);
    }

return(
    <>
    <Header/>
    <section className="space-ptb">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                <div className="col-md-12">
                  <div className="job-list border">
                
                    <div className="job-list-details">
                      <div className="job-list-info">
                        <div className="job-list-title">
                          <h5 className="mb-0">{title}</h5>
                        </div>
                        <div className="job-list-option">
                          <ul className="list-unstyled">
                            <li><i className="fas fa-map-marker-alt pe-1" />{FullAddress}</li>
                         
                            <li><i className="fas  align-self-center flaticon-approval" /><span className="ps-2">{Email}</span></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="job-list-favourite-time">
                      <a className="job-list-favourite order-2" href="#"><i className="far fa-heart" /></a>
                      <span className="job-list-time order-1"><i className="far fa-clock pe-1" />2W ago</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border p-4 mt-4 mt-lg-5">
                <div className="row">
                  <div className="col-md-4 col-sm-6 mb-4">
                    <div className="d-flex">
                      <i className="font-xll text-primary align-self-center flaticon-debit-card" />
                      <div className="feature-info-content ps-3">
                        <label className="mb-1">Offered Salary</label>
                        <span className="mb-0 fw-bold d-block text-dark"> {CurrencyPosition} {Salary} a year</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 mb-4">
                    <div className="d-flex">
                      <i className="fas align-self-center fa-suitcase pe-1" style={{fontSize:"30px",color:"#fd7e14"}}/>
                      <div className="feature-info-content ps-3">
                        <label className="mb-1">contract</label>
                        <span className="mb-0 fw-bold d-block text-dark">{contract}</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 mb-4">
                  <div className="d-flex">
                      <i className="font-xll text-primary align-self-center flaticon-medal" />
                      <div className="feature-info-content ps-3">
                        <label className="mb-1">Experience</label>
                        <span className="mb-0 fw-bold d-block text-dark">{Experience}</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div className="my-4 my-lg-5">
                <h5 className="mb-3 mb-md-4">Job Description</h5>
                <p>{JobDescription}</p>
              </div>
              <hr />
              <div className="my-4 my-lg-5">
                <h5 className="mb-3 mb-md-4">Qualification</h5>
                <p>{Qualification}</p>
              </div>
              <hr />


            </div>
            {/*=================================
      sidebar */}
            <div className="col-lg-4">
              <div className="sidebar mb-0">
                <div className="widget">
          <div className="widget-title">
            <h5>Apply for this offer</h5>
          </div>
          <div className="company-contact-inner widget-box">
            <FormOffreJob IdRecruiter={RecruiterID}/>
          </div>
          
        </div>

             

        <Similar_Jobs/>






              </div>
            </div>
            {/*=================================
      sidebar */}



          </div>
        </div>
      </section>
<Footer/>

    </>
)
}
export {JobDetails}