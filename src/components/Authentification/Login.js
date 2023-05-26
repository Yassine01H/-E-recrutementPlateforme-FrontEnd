import { Header } from "../Header";
import { Footer } from "../Footer";
import { useState, React, Component } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { toast } from "react-hot-toast";
import Swal from "sweetalert2";
import {  useNavigate, Link } from "react-router-dom";
 
const Toast = Swal.mixin({
  toast: true,
  position: "top",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

  const Login = (props) => {
  // state
  const navigate = useNavigate();
  const [emailCandidat, setEmailCandidat] = useState("");
  const [passwordCandidat, setPasswordCandidat] = useState("");

  const [emailEmployer, setEmailEmployer] = useState("");
  const [passwordEmployer, setPasswordEmployer] = useState("");

  const [Loading, setLoading] = useState(false);


  const loginCandidat = () => {
    const body = {
      email: emailCandidat,
      password: passwordCandidat,
    };
    
    axios
      .post("http://127.0.0.1:8000/api/login", body)
      .then((res) => {
        if (res.status == 200) {
          
          if (res.data.user.role==="recruiter"){
      
            toast.error("This Candidat is not existe");
          }else{
            localStorage.setItem("token", res.data.token);

            props.IdUser(res.data.user.id);
            localStorage.setItem("user_id", res.data.user.id);      
            const user = jwt_decode(res.data.token);  
  
        //    localStorage.setItem("user", JSON.stringify(user));
            Toast.fire({
              icon: "success",
              title: "You are successfully login",
            });
  
            navigate("/dashbord-candidat");
          }
          
        }
      })
      .catch((err) => toast.error("error !"));
  };

const LoginEmployer =()=>{
  const body = {
    email: emailEmployer,
    password: passwordEmployer,
  };
  
  axios
    .post("http://127.0.0.1:8000/api/login", body)
    .then((res) => {
      if (res.status == 200) {
        
      //  localStorage.setItem("role",res.data.user.role);
        if (res.data.user.role === "candidat"){
          toast.error("This Employer is not existe");
        }else{
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user_id", res.data.user.id);  
          props.IdUser(res.data.user.id);    
          const user = jwt_decode(res.data.token);      
        //  localStorage.setItem("user", JSON.stringify(user));
          Toast.fire({
            icon: "success",
            title: "You are successfully login",
          });
          navigate("/employer-Dashbord");
        }

      }
    })
    .catch((err) => toast.error("error !"));
}

  return (
    <>
      <Header />
      <div
        className="header-inner bg-light text-center"
        style={{ background: "black" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="text-primary">Login</h2>
              <ol className="breadcrumb mb-0 p-0">
                <li className="breadcrumb-item">
                  <a href=""> Home </a>
                </li>
                <li className="breadcrumb-item active">
                  {" "}
                  <i className="fas fa-chevron-right" /> <span> Register </span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      {/*=================================
inner banner */}
      {/*=================================
Register */}
      <section className="space-ptb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10 col-md-12">
              <div className="login-register">
                <div className="section-title">
                  <h4 className="text-center">Login to Your Account</h4>
                </div>
                <fieldset>
                  <legend className="px-2">Choose your Account Type</legend>
                  <ul
                    className="nav nav-tabs nav-tabs-border d-flex"
                    role="tablist"
                  >
                    <li className="nav-item me-4">
                      <a
                        className="nav-link active"
                        data-bs-toggle="tab"
                        href="#candidate"
                        role="tab"
                      >
                        <div className="d-flex">
                          <div className="tab-icon">
                            <i className="flaticon-users" />
                          </div>
                          <div className="ms-3">
                            <h6 className="mb-0">Candidate</h6>
                            <p className="mb-0">
                              I want to discover companies.
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="nav-item ms-auto">
                      <a
                        className="nav-link"
                        data-bs-toggle="tab"
                        href="#employer"
                        role="tab"
                      >
                        <div className="d-flex">
                          <div className="tab-icon">
                            <i className="flaticon-suitcase" />
                          </div>
                          <div className="ms-3">
                            <h6 className="mb-0">Employer</h6>
                            <p className="mb-0">
                              I want to attract the best talent.
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </fieldset>
                <div className="tab-content">
                  <div
                    className="tab-pane active"
                    id="candidate"
                    role="tabpanel"
                  >
                    <form className="mt-4">
                      <div className="row">
                        <div className="mb-3 col-9">
                          <label
                            className="form-label"
                            style={{ color: "black" }}
                          >
                            Email :
                          </label>
                          <input
                            type="email"
                            value={emailCandidat}
                            onChange={(e) => setEmailCandidat(e.target.value)}
                            className="form-control shadow p-3 mb-5 bg-body-tertiary rounded"
                            placeholder="Email ..."
                          />
                        </div>
                        <div className="mb-3 col-9">
                          <label
                            className="form-label"
                            style={{ color: "black" }}
                          >
                            Password :
                          </label>
                          <input
                            type="password"
                            value={passwordCandidat}
                            onChange={(e) => setPasswordCandidat(e.target.value)}
                            className="form-control shadow p-3 mb-5 bg-body-tertiary rounded"
                            placeholder="Password ..."
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">

                          <button type="button" className="btn btn-primary" onClick={() => loginCandidat()}>
                        Login
                        {Loading && (
                              <div
                                className="spinner-border spinner-border-sm"
                                role="status"
                                style={{ marginLeft: "10px" }}
                              >
                                <span className="sr-only">Loading...</span>
                              </div>
                            )}
                      </button>
                        </div>
                        <div className="col-md-6 text-md-end mt-2 text-center">
                          <p>
                            Already registered?{" "}
                              <Link to="/Login"> Sign in here</Link>
                          </p>
                        </div>
                      </div>
                    </form>


                  </div>

                  <div className="tab-pane " id="employer" role="tabpanel">
                    <form className="mt-4">
                      <div className="row">
                        <div className="mb-3 col-9">
                          <label
                            className="form-label"
                            style={{ color: "black" }}
                          >
                            Email :
                          </label>
                          <input
                            type="email"
                            className="form-control shadow p-3 mb-5 bg-body-tertiary rounded"
                            placeholder="Email ..."
                            value={emailEmployer}
                            onChange={(e)=>setEmailEmployer(e.target.value)}
                          />
                        </div>
                        <div className="mb-3 col-9">
                          <label
                            className="form-label"
                            style={{ color: "black" }}
                          >
                            Password :
                          </label>
                          <input
                            type="password"
                            className="form-control shadow p-3 mb-5 bg-body-tertiary rounded"
                            placeholder="Password ..."
                            value={passwordEmployer}
                            onChange={(e)=>setPasswordEmployer(e.target.value)}
                          />
                        </div>
                      </div>
                      <button type="button" className="btn btn-primary" onClick={()=>LoginEmployer()}>
                        Ajout
                        {Loading && (
                              <div
                                className="spinner-border spinner-border-sm"
                                role="status"
                                style={{ marginLeft: "10px" }}
                              >
                                <span className="sr-only">Loading...</span>
                              </div>
                            )}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*=================================
Register */}
      {/*=================================
feature-info */}
      <section className="feature-info-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-lg-0 mb-4">
              <div className="feature-info feature-info-02 p-4 p-lg-5 bg-primary">
                <div className="feature-info-icon mb-3 mb-sm-0 text-dark">
                  <i className="flaticon-team" />
                </div>
                <div className="feature-info-content text-white ps-sm-4 ps-0">
                  <p>Jobseeker</p>
                  <h5 className="text-white">Looking For Job?</h5>
                </div>
                <a className="ms-auto align-self-center" href="#">
                  Apply now
                  <i className="fas fa-long-arrow-alt-right" />{" "}
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="feature-info feature-info-02 p-4 p-lg-5 bg-dark">
                <div className="feature-info-icon mb-3 mb-sm-0 text-primary">
                  <i className="flaticon-job-3" />
                </div>
                <div className="feature-info-content text-white ps-sm-4 ps-0">
                  <p>Recruiter</p>
                  <h5 className="text-white">Are You Recruiting?</h5>
                </div>
                <a className="ms-auto align-self-center" href="#">
                  Post a job
                  <i className="fas fa-long-arrow-alt-right" />{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export { Login };
