import { logDOM } from "@testing-library/react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



const NewJobForm = (props) => {
  const navigate = useNavigate("");
  const [title,setTitle] = useState("");
  const [JobDescription,setJobDescription] =useState("");
  const [Email,setEmail] = useState("");
  const [CurrencyPosition,SetCurrencyPosition] = useState("");
  const [Salary,setSalary] = useState("");
  const [SalaryMin,setSalaryMin] = useState("");
  const [SalaryMax,setSalaryMax] = useState("");
  const [Experience,setExperience] = useState();
  const [Qualification,setQualification] = useState("");
  const [Country,setCountry] = useState("");
  const [State,setState] = useState("");
  const [City,setCity] = useState("");
  const [FullAddress,setFullAddress] = useState("");
  const [contract,setcontract] = useState("");
 // console.log(props.IdEmployer);
 const IDEmployer= localStorage.getItem("employerID") ;
// console.log(IDEmployer);

const OnSubmit =()=>{

  const data = {
    titlejob: title,
    expeience:  parseInt(Experience),
    description: JobDescription,
    recruiter: "/api/recruiters/"+IDEmployer,
    salary: Salary,
    CONTRACT: contract,
    salaryMin: SalaryMin,
    SalaryMax: SalaryMax,
    State: State,
    CurrencyPosition: CurrencyPosition,
    Qualifications: Qualification,
    Country: Country,
    City: City,
    FullAdress: FullAddress,
    email: Email
  }
  if (IDEmployer ===""){
    navigate("/employer-Dashbord")
  }else{ 
 // 
  axios.post("http://127.0.0.1:8000/api/job_offers", data)
  .then((res) => {
    if (res.status === 201) {
      //alert("success")
      navigate("/Post-Confirmation");
    }
  })
}
}

  return (
    <>
      <div className="row">
        <div className="col-12">
          <form className="row">
            <div className="form-group col-md-12 mb-3">
              <label className="mb-2 text-dark">Job Title *</label>
              <input
                type="text"
                className="form-control shadow p-3 mb-5 bg-body-tertiary rounded"
                placeholder="Enter a Title"
                onChange={(e)=>setTitle(e.target.value)}
              />
            </div>
            <div className="form-group col-md-12 mb-3">
              <label className="mb-2 text-dark">Job Description *</label>
              <textarea
                className="form-control shadow p-3 mb-5 bg-body-tertiary rounded"
                rows={4}
                defaultValue={""}
                onChange={(e)=>setJobDescription(e.target.value)}
              />
            </div>
            <div className="form-group col-md-6 mb-3">
              <label className="mb-2 text-dark">Email Address *</label>
              <input
                type="email"
                className="form-control shadow p-3 mb-5 bg-body-tertiary rounded"
                onChange={(e)=>setEmail(e.target.value)}
                placeholder="Enter Email Address of Contact Person"
              />
            </div>
            <div className="form-group col-md-6 mb-3">
            <label className="mb-2 text-dark">Currency position</label>
              <select className="form-control shadow p-3 mb-5 bg-body-tertiary rounded basic-select" onChange={(e)=>SetCurrencyPosition(e.target.value)}>
                <option value="USD" selected="selected" >
                  U.S. Dollar (USD)
                </option>
                <option value="EUR">European Euro (EUR)</option>
                <option value="JPY">Japanese Yen (JPY)</option>
                <option value="GBP">British Pound (GBP)</option>
                <option value="CHF">Swiss Franc (CHF)</option>
                <option value="CAD">Canadian Dollar (CAD)</option>
                <option value="Australian Dollar">Australian Dollar</option>
              </select>
            </div>

            <div className="form-group col-md-12">
              <label className="mb-2 text-dark">Salary *</label>
            </div>
            <div className="form-group col-md-6 select-border mb-3">
              <select className="form-control shadow p-3 mb-5 bg-body-tertiary rounded" onChange={(e)=>setSalary(e.target.value)}>
                <option selected>Salary</option>
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
                  onChange={(e)=>setSalaryMin(e.target.value)}
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
                  onChange={(e)=>setSalaryMax(e.target.value)}
                />
              </div>
            </div>
          
 
          </form>
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
              <label className="mb-2 text-dark">Experience *</label>
              <select className="form-control shadow p-3 mb-5 bg-body-tertiary rounded basic-select" onChange={(e)=>setExperience(e.target.value)}>
                <option selected >Experience</option>
                <option value="1">
                  1Y Experience
                </option>
                <option value="2">2Y Experience</option>
                <option value="3">3Y Experience</option>
                <option value="5">5Y Experience</option>
              </select>
            </div>

            <div className="form-group col-md-6 select-border mb-3">
              <label className="mb-2 text-dark">Contract ( 
                <a className="freelance"><i className="fas fa-suitcase pe-1" /> Freelance</a> 
                <a className="full-time" href="#"> <i className="fas fa-suitcase pe-1"></i> Full-time</a>               
                <a className="temporary" href="#"> <i className="fas fa-suitcase pe-1"></i> Temporary</a> 
                <a className="part-time" href="#"> <i className="fas fa-suitcase pe-1"></i> Part-Time</a> 
                )</label>
              <select className="form-control shadow p-3 mb-5 bg-body-tertiary rounded basic-select"
              onChange={(e)=>setcontract(e.target.value)}>
                <option selected >Contract</option>
                <option value="freelance">
                <a className="freelance" ><i className="fas fa-suitcase pe-1" />Freelance</a>
                </option>
                <option value="Full-time">Full-time</option>
                <option value="Temporary">Temporary</option>
                <option value="Part-Time">Part-Time</option>
              </select>
            </div>
           

            <div className="form-group col-md-12 select-border mb-md-0 mb-3">
              <label className="mb-2 text-dark">Qualifications *</label>
              <textarea
                className="form-control shadow p-3 mb-5 bg-body-tertiary rounded"
                rows={4}
                defaultValue={""}
                onChange={(e)=>setQualification(e.target.value)}
                
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
            onChange={(e)=>setCountry(e.target.value)}
          />
      </div>
        <div className="form-group col-md-6 select-border mb-3">
          <label className="mb-2 text-dark">State</label>
          <input
            type="text"
            className="form-control shadow p-3 mb-5 bg-body-tertiary rounded"
            placeholder="State"
            onChange={(e)=>setState(e.target.value)}
          />
        </div>
        <div className="form-group col-md-12 select-border mb-3">
          <label className="mb-2 text-dark">City</label>
          <input
            type="text"
            className="form-control shadow p-3 mb-5 bg-body-tertiary rounded"
            placeholder="City"
            onChange={(e)=>setCity(e.target.value)}
          />
        </div>
        <div className="form-group col-xl-10 col-md-9 col-sm-8 mb-3">
          <label className="mb-2 text-dark">Full Address *</label>
          <input type="text" className="form-control shadow bg-body-tertiary rounded" onChange={(e)=>setFullAddress(e.target.value)}/>
        </div>
        <div className="col-xl-2 col-md-3 col-sm-4 mb-3">
          <a className="btn btn-outline-primary d-grid" href="https://www.google.tn/maps/@36.3620011,10.770171,8.67z?hl=fr">
            Find on Map
          </a>
        </div>
        <div className="col-md-12">
          <a className="btn btn-primary" href="#" onClick={() =>OnSubmit()}>
            Post Job
          </a>
        </div>
      </form>
      
    </>
  );
};
export { NewJobForm };
