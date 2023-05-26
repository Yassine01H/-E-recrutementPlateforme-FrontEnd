import { useEffect, useState } from "react";
import { Header } from "../Header"

import { HeaderProfile } from "./HeaderProfile"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { FormUpdateJob } from "./FormUpdateJob";
import { Loader } from "../Loader";
import { Footer } from "../Footer";



const ManageJobs =(props) =>{
  const [loader,setLoader] = useState(false);
    const [Employer,setIdEmployer] = useState("");
 //   console.log(Employer);
    const IdEmployer=(data)=>{
    setIdEmployer(data);
    }

    const [job_offers,setjob_offers] = useState([]);



    const navigate = useNavigate("");
    const JobDetails=(id)=>{
     
      navigate("/Job-Details/"+id);
    }
    const JobDelete=(id)=>{
      axios.delete("http://127.0.0.1:8000/api/job_offers/"+id).then((res)=>{
         if (res.status === 204){
          toast.success("Success delete");
          setjob_offers((joboffer) =>
          joboffer.filter((edu) => edu.id != id)
        );
         }
      })
    }
    const [IDOffres,setIdOffre] = useState("");

    const idEmp = localStorage.getItem("employerID");
    //console.log(idEmp);
    const getAllJob = () => {
      if (Employer !=""){
      setLoader(true)
      axios.get("http://127.0.0.1:8000/joboffres/"+Employer).then((res) => {
      // console.log(res.data);
       setjob_offers(res.data);
       setLoader(false)
      }).catch(function (error) {
        console.log(error);
      });
    }
     }


    const [Oldtitle,setOldTitle] = useState("");
    const [OldJobDescription,setOldJobDescription] =useState("");
    const [OldEmail,setOldEmail] = useState("");
    const [OldCurrencyPosition,SetOldCurrencyPosition] = useState("");
    const [OldSalary,setOldSalary] = useState("");
    const [OldSalaryMin,setOldSalaryMin] = useState("");
    const [OldSalaryMax,setOldSalaryMax] = useState("");
    const [OldExperience,setOldExperience] = useState("");
    const [OldQualification,setOldQualification] = useState("");
    const [OldCountry,setOldCountry] = useState("");
    const [OldState,setOldState] = useState("");
    const [OldCity,setOldCity] = useState("");
    const [OldFullAddress,setOldFullAddress] = useState("");
    const [Oldcontract,setOldcontract] = useState("");
    const [OldIDRecruiter,setOldIDRecruiter] = useState("");
    const [idOffre,setIDOffre] = useState("");
     const getJobDetailid=(id)=>{
      setIDOffre(id)
    axios.get("http://127.0.0.1:8000/api/job_offers/"+id).then((res)=>{
        setOldTitle(res.data.titlejob);
        setOldJobDescription(res.data.description);
        setOldEmail(res.data.email);
        SetOldCurrencyPosition(res.data.currencyPosition);
        setOldSalary(res.data.salary);
        setOldSalaryMin(res.data.salaryMin);
        setOldSalaryMax(res.data.salaryMax);
        setOldExperience(res.data.expeience);
        setOldQualification(res.data.qualifications);
        setOldCountry(res.data.Country);
        setOldState(res.data.State);
        setOldCity(res.data.city);
        setOldFullAddress(res.data.FullAdress);
        setOldcontract(res.data.cONTRACT);
        setOldIDRecruiter(res.data.Recruiter);
    })
      }

       const UpdateJob =()=>{
    const Newdata = {
        titlejob: Oldtitle,
        expeience: OldExperience,
        description: OldJobDescription,
        recruiter: OldIDRecruiter,
        salary: OldSalary,
        CONTRACT: Oldcontract,
        salaryMin: OldSalaryMin,
        SalaryMax: OldSalaryMax,
        State: OldState,
        CurrencyPosition: OldCurrencyPosition,
        Qualifications: OldQualification,
        Country: OldCountry,
        City: OldCity,
        FullAdress: OldFullAddress,
        email: OldEmail
      }
      console.log(Newdata);
   axios.put("http://127.0.0.1:8000/api/job_offers/"+idOffre,Newdata).then((res)=>{
    if (res.status == 200) {
        toast.success("success Update!");
      
        window.location.reload(true);
      
    
      }
    }) 
   }
  useEffect(() => {
    getAllJob();
    //setFilteredData([]);
   
  }, [Employer]);
return (
<>
<Header/>

<HeaderProfile IdEmployer={IdEmployer} />

      {/*=================================
Manage Jobs */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="user-dashboard-info-box mb-0">
                <div className="row mb-4">
                  <div className="col-md-7 col-sm-5 d-flex align-items-center">
                    <div className="section-title-02 mb-0 ">
                      <h4 className="mb-0">Manage Jobs</h4>
                    </div>
                  </div>

                </div>
                <div className="user-dashboard-table table-responsive">
                  <table className="table table-bordered">
                    <thead className="">
                      <tr>
                        <th scope="col">Job Title</th>
                        <th scope="col">Expeience</th>
                       
                        <th scope="col">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                  {job_offers.map((job_offer) => (                 
                      <tr key={job_offer.id}>
                        <th scope="row">{job_offer.titlejob}
                          <p className="mb-1 mt-2">{job_offer.CONTRACT}</p>
                          <p className="mb-0">Salary : {job_offer.CurrencyPosition} {job_offer.salary} a year</p>
                        </th>
                        <td>{job_offer.expeience}</td>
                   
                        <td>
                          <ul className="list-unstyled mb-0 d-flex">
                            <li><a onClick={()=>JobDetails(job_offer.id)} className="text-primary" data-bs-toggle="tooltip" title="view"><i className="far fa-eye" /></a></li>
                            <li><a
                                  data-bs-toggle="modal"
                                  href="#EditLicensesAndCertifications"
                                  role="button"
                                  aria-expanded="false"
                                  aria-controls="dateposted" className="text-info" 
                                  onClick={() => getJobDetailid(job_offer.id)}
                                  ><i className="fas fa-pencil-alt" /></a></li>
                            <li><a onClick={()=>JobDelete(job_offer.id)} className="text-danger" data-bs-toggle="tooltip" title="Delete"><i className="far fa-trash-alt" /></a></li>
                          </ul>
                        </td>
                      </tr>

                      ))}    
                    </tbody>
                  </table>
        
                </div>
                { loader ? <Loader />  : "" }
               
              </div>
            </div>
          </div>
        </div>
      </section>
<Footer/>




     <div
        className="modal fade"
        id="EditLicensesAndCertifications"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header p-4">
              <h4 className="mb-0 text-center">Edit job</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-12">
                  <form className="row">
                    <div className="form-group col-md-12 mb-3">
                      <label className="mb-2 text-dark">Job Title *</label>
                      <input
                        type="text"
                        className="form-control shadow p-3 mb-5 bg-body-tertiary rounded"
                        placeholder="Enter a Title"
                        defaultValue={Oldtitle}
                        onChange={(e)=>setOldTitle(e.target.value)}
                      />
                    </div>
                    <div className="form-group col-md-12 mb-3">
                      <label className="mb-2 text-dark">
                        Job Description *
                      </label>
                      <textarea
                        className="form-control shadow p-3 mb-5 bg-body-tertiary rounded"
                        rows={4}
                     
                        defaultValue={OldJobDescription}
                        onChange={(e)=>setOldJobDescription(e.target.value)}
                      />
                    </div>
                    <div className="form-group col-md-6 mb-3">
                      <label className="mb-2 text-dark">Email Address *</label>
                      <input
                        type="email"
                        className="form-control shadow p-3 mb-5 bg-body-tertiary rounded"
                        placeholder="Enter Email Address of Contact Person"
                        defaultValue={OldEmail}
                        onChange={(e)=>setOldEmail(e.target.value)}
                      />
                    </div>
                    <div className="form-group col-md-6 mb-3">
                      <label className="mb-2 text-dark">
                        Currency position
                      </label>
                      <select className="form-control shadow p-3 mb-5 bg-body-tertiary rounded basic-select" onChange={(e)=>SetOldCurrencyPosition(e.target.value)} defaultValue={OldCurrencyPosition}>
                        <option value="USD" selected="selected">
                          U.S. Dollar (USD)
                        </option>
                        <option value="EUR">European Euro (EUR)</option>
                        <option value="JPY">Japanese Yen (JPY)</option>
                        <option value="GBP">British Pound (GBP)</option>
                        <option value="CHF">Swiss Franc (CHF)</option>
                        <option value="CAD">Canadian Dollar (CAD)</option>
                        <option value="Australian Dollar">
                          Australian Dollar
                        </option>
                      </select>
                    </div>

                    <div className="form-group col-md-12">
                      <label className="mb-2 text-dark">Salary *</label>
                    </div>
                    <div className="form-group col-md-6 select-border mb-3">
                      <select className="form-control shadow p-3 mb-5 bg-body-tertiary rounded" defaultValue={OldSalary} onChange={(e)=>setOldSalary(e.target.value)} >
                        <option value="1500">1000</option>
                        <option value="2500">25000</option>
                        <option value="3500">35000</option>
                      </select>
                    </div>

                    <div className="col-md-3 mb-3">
                      <div className="input-group mb-2">
                        <div className="input-group-prepend d-flex">
                          <div className="input-group-text">
                            <i className="fas fa-dollar-sign" />
                          </div>
                        </div>
                        <input
                          type="text"
                          className="form-control shadow p-3 mb-5 bg-body-tertiary rounded"
                          placeholder="Min"
                          defaultValue={OldSalaryMin}
                          onChange={(e)=>setOldSalaryMin(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="col-md-3 mb-3">
                      <div className="input-group mb-2">
                        <div className="input-group-prepend d-flex">
                          <div className="input-group-text">
                            <i className="fas fa-dollar-sign" />
                          </div>
                        </div>
                        <input
                          type="text"
                          className="form-control shadow p-3 mb-5 bg-body-tertiary rounded"
                          placeholder="Max"
                          defaultValue={OldSalaryMax}
                          onChange={(e)=>setOldSalaryMax(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="row mt-4 mt-lg-5">
                      <div className="col-12">
                        <h5 className="mb-4 text-dark">Other Information</h5>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <form className="row">
                          <div className="form-group col-md-6 select-border mb-3">
                            <label className="mb-2 text-dark">
                              Experience *
                            </label>
                            <select className="form-control shadow p-3 mb-5 bg-body-tertiary rounded basic-select" defaultValue={OldExperience} onChange={(e)=>setOldExperience(e.target.value)}>
                              <option value="6M Experience" selected="selected">
                                6M Experience
                              </option>
                              <option value="9M Experience">
                                9M Experience
                              </option>
                              <option value="1Y Experience">
                                1Y Experience
                              </option>
                              <option value="2Y Experience">
                                2Y Experience
                              </option>
                              <option value="5Y Experience">
                                5Y Experience
                              </option>
                            </select>
                          </div>

                          <div className="form-group col-md-6 select-border mb-3">
                            <label className="mb-2 text-dark">
                              Contract (
                              <a className="freelance">
                                {" "}
                                <i className="fas fa-suitcase pe-1" /> Freelance
                              </a>
                              <a className="full-time" href="#">
                                {" "}
                                <i className="fas fa-suitcase pe-1"></i> Full-time
                              </a>
                              <a className="temporary" href="#">
                                {" "}
                                <i className="fas fa-suitcase pe-1"></i> Temporary
                              </a>
                              <a className="part-time" href="#">
                                {" "}
                                <i className="fas fa-suitcase pe-1"></i> Part-Time
                              </a>
                              )
                            </label>
                            <select className="form-control shadow p-3 mb-5 bg-body-tertiary rounded basic-select" defaultValue={Oldcontract} onChange={(e)=>setOldcontract(e.target.value)}>
                              <option value="freelance" selected="selected">
                                <a className="freelance" href="#">
                                  <i className="fas fa-suitcase pe-1" />
                                  Freelance
                                </a>
                              </option>
                              <option value="Full-time">Full-time</option>
                              <option value="Temporary">Temporary</option>
                              <option value="Part-Time">Part-Time</option>
                            </select>
                          </div>

                          <div className="form-group col-md-12 select-border mb-md-0 mb-3">
                            <label className="mb-2 text-dark">
                              Qualifications *
                            </label>
                            <textarea
                              className="form-control shadow p-3 mb-5 bg-body-tertiary rounded"
                              rows={4}
                              defaultValue={OldQualification}
                              onChange={(e)=>setOldQualification(e.target.value)}
                            ></textarea>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="row mt-5">
                      <div className="col-12">
                        <h5 className="mb-4">Address / Location</h5>
                      </div>
                    </div>
                    <form className="row align-items-end">
                      <div className="form-group col-md-6 select-border mb-3">
                        <label className="mb-2 text-dark">Country</label>
                        <input
                          type="text"
                          className="form-control shadow p-3 mb-5 bg-body-tertiary rounded"
                          placeholder="Country"
                          defaultValue={OldCountry}
                          onChange={(e)=>setOldCountry(e.target.value)}
                        />
                      </div>
                      <div className="form-group col-md-6 select-border mb-3">
                        <label className="mb-2 text-dark">State</label>
                        <input
                          type="text"
                          className="form-control shadow p-3 mb-5 bg-body-tertiary rounded"
                          placeholder="State"
                          defaultValue={OldState}
                          onChange={(e)=>setOldState(e.target.value)}
                        />
                      </div>
                      <div className="form-group col-md-12 select-border mb-3">
                        <label className="mb-2 text-dark">City</label>
                        <input
                          type="text"
                          className="form-control shadow p-3 mb-5 bg-body-tertiary rounded"
                          placeholder="City"
                          defaultValue={OldCity}
                          onChange={(e)=>setOldCity(e.target.value)}
                        />
                      </div>
                      <div className="form-group col-xl-10 col-md-9 col-sm-8 mb-3">
                        <label className="mb-2 text-dark">Full Address *</label>
                        <input
                          type="text"
                          className="form-control shadow bg-body-tertiary rounded"
                          defaultValue={OldFullAddress}
                          onChange={(e)=>setOldFullAddress(e.target.value)}
                        />
                      </div>
                      <div className="col-md-12">
                        <a className="btn btn-primary" onClick={()=>UpdateJob()}>
                          Update Job
                        </a>
                      </div>
                    </form>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


</>)
}
export {ManageJobs}