import {  useNavigate, Link } from "react-router-dom";
import { Header } from "../Header";
import { Footer } from "../Footer";

import axios from "axios";
import {  useState } from "react";
import { toast } from "react-hot-toast";
// ES6 Modules or TypeScript
import Swal from "sweetalert2";
// CommonJS

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

const Signup = () => {
  const navigate = useNavigate();
  const [EmailCandidate, setEmailCandidate] = useState([]);
  const [PasswordCandidate, setPasswordCandidate] = useState([]);
  const [ConfirmPasswordCandidate, setConfirmPasswordCandidate] = useState([]);

  const [EmailRecruiter, setEmailRecruiter] = useState([]);
  const [PasswordRecruiter, setPasswordRecruiter] = useState([]);
  const [ConfirmPasswordRecruiter, setConfirmPasswordRecruiter] = useState([]);

  const [Loading, setLoading] = useState(false);
  const [formError, setFormError] = useState({});

  const ControleSaisieCandidat = () => {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!regex.test(EmailCandidate) || EmailCandidate == "") {
      toast.error("Email not valid!");
      setLoading(false);
      return false;
    }

    if (PasswordCandidate == "" || ConfirmPasswordCandidate == "") {
      toast.error("Password and Confirm Password required!");
      setLoading(false);
      return false;
    }

    if (PasswordCandidate != ConfirmPasswordCandidate) {
      toast.error("Password not matched!");
      setLoading(false);
      return false;
    }

    if (PasswordCandidate.length < 6) {
      toast.error("Password should greater than 6 characters!");
      setLoading(false);
      return false;
    }
    return true;
  };

  const ControleSaisieRecruteur = () => {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!regex.test(EmailRecruiter) || EmailRecruiter == "") {
      toast.error("Email not valid!");
      setLoading(false);
      return false;
    }

    if (PasswordRecruiter == "" || ConfirmPasswordRecruiter == "") {
      toast.error("Password and Confirm Password required!");
      setLoading(false);
      return false;
    }

    if (PasswordRecruiter != ConfirmPasswordRecruiter) {
      toast.error("Password not matched!");
      setLoading(false);
      return false;
    }

    if (PasswordRecruiter.length < 6) {
      toast.error("Password should greater than 6 characters!");
      setLoading(false);
      return false;
    }
    return true;
  };

  const AjoutRecruiter = () => {
    if (ControleSaisieRecruteur() == true) {
      setLoading(true);
      const datauserc = {
        email: EmailRecruiter,
        plainPassword: PasswordRecruiter,
        role: "/api/roles/2",
      };
      axios
        .post("http://127.0.0.1:8000/api/users", datauserc)
        .then((res) => {
          if (res.status == 201) {
            Toast.fire({
              icon: "success",
              title: "Signed in successfully",
            });
            navigate("/add-profile-Employer");
            localStorage.setItem("iduser", res.data.id);
            setLoading(false);
          }
        })
        .catch((error) => {
          toast.error("Email déja existe !");
          setLoading(false);
        });
    }
  };

  const Ajout = () => {
    if (ControleSaisieCandidat() == true) {
      setLoading(true);
      const datauser = {
        email: EmailCandidate,
        plainPassword: PasswordCandidate,
        role: "/api/roles/1",
      };

      axios
        .post("http://127.0.0.1:8000/api/users", datauser)
        .then((res) => {
          if (res.status == 201) {
            Toast.fire({
              icon: "success",
              title: "Signed in successfully",
            });
            navigate("/add-profile");
            localStorage.setItem("iduser", res.data.id);
            setLoading(false);
          }
        })
        .catch((error) => {
          toast.error("Email déja existe !");
          setLoading(false);
        });
    }
  };

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
              <h2 className="text-primary">Register</h2>
              <ol className="breadcrumb mb-0 p-0">
                <li className="breadcrumb-item">
                  <a href="index.html"> Home </a>
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
                  <h4 className="text-center">Create Your Account </h4>
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
                        <div className="form-group col-9 margin-auto">
                          <label
                            className="form-label"
                            style={{ color: "black" }}
                          >
                            Email :
                          </label>
                          <input
                            type="email"
                            value={EmailCandidate}
                            onChange={(e) => setEmailCandidate(e.target.value)}
                            className="form-control shadow p-3 mb-5 bg-body-tertiary rounded"
                            placeholder="Email ..."
                          />
                        </div>
                        <div className="mb-3 col-9 margin-auto">
                          <label
                            className="form-label"
                           
                            style={{ color: "black" }}
                          >
                            Password :
                          </label>
                          <input
                            type="password"
                            value={PasswordCandidate}
                            onChange={(e) =>
                              setPasswordCandidate(e.target.value)
                            }
                            className="form-control shadow p-3 mb-5 bg-body-tertiary rounded"
                            placeholder="Password ..."
                          />
                        </div>
                        <div className="mb-3 col-9 margin-auto">
                          <label
                            className="form-label"
                          
                            style={{ color: "black" }}
                          >
                            Confirm password :
                          </label>
                          <input
                            type="password"
                            className="form-control shadow p-3 mb-5 bg-body-tertiary rounded"
                            placeholder="Confirm Password ..."
                            value={ConfirmPasswordCandidate}
                            onChange={(e) =>
                              setConfirmPasswordCandidate(e.target.value)
                            }
                          />
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6">
                          <button
                            type="button"
                            className="btn btn-primary d-block margin-auto"
                            style={{ width: "60%" }}
                            onClick={() => Ajout()}
                          >
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
                        </div>
                        <div className="col-md-6 text-md-end mt-2 text-center ">
                          <p>
                            Already registered?{" "}
                              <Link to="/Login"> Sign in here</Link>                           
                          </p>
                        </div>
                      </div>
                    </form>
                  </div>

                  <div className="tab-pane fade" id="employer" role="tabpanel">
                    <form className="mt-4">
                      <div className="row">
                        <div className="form-group col-9 margin-auto">
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
                            value={EmailRecruiter}
                            onChange={(e) => setEmailRecruiter(e.target.value)}
                          />
                        </div>
                        <div className="mb-3 col-9 margin-auto">
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
                            value={PasswordRecruiter}
                            onChange={(e) =>
                              setPasswordRecruiter(e.target.value)
                            }
                          />
                        </div>
                        <div className="mb-3 col-9 margin-auto">
                          <label
                            className="form-label"
                            
                            style={{ color: "black" }}
                          >
                            Confirm password :
                          </label>
                          <input
                            type="password"
                            className="form-control shadow p-3 mb-5 bg-body-tertiary rounded"
                            placeholder="Password ..."
                            value={ConfirmPasswordRecruiter}
                            onChange={(e) =>
                              setConfirmPasswordRecruiter(e.target.value)
                            }
                          />
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6">
                          <button
                            type="button"
                            className="btn btn-primary d-block margin-auto"
                            style={{ width: "60%" }}
                            onClick={() => AjoutRecruiter()}
                          >
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

export { Signup };
