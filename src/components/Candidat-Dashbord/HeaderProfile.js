import { Outlet, Link } from "react-router-dom";
import { Header } from "../Header";
//import { Footer } from "../Footer";
import axios from "axios";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HeaderProfile = (props) => {
  const conponentPDF = useRef();
  const navigate = useNavigate();
  const user = localStorage.getItem("user");
  const iduser = localStorage.getItem("user_id");
  const [id, setid] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [ProfileTitle, setProfileTitle] = useState("");
  const [Phone, setPhone] = useState("");
  const [Adresse, setAdresse] = useState("");
  const [Date_of_birth, setDate_of_birth] = useState("");
  const [Job, setJob] = useState("");
  const [ImgProfilePath, setimgProfilePath] = useState("");
 // 
  const myData = {
    id: id,
    FirstName: FirstName,
    LastName: LastName,
    ProfileTitle: ProfileTitle,
    Phone: Phone,
    Adresse: Adresse,
    Date_of_birth: Date_of_birth,
    Job: Job,
    ImgProfilePath: ImgProfilePath,
  };

  const getcandidat = () => {
    if (iduser !=""){
      axios.get("http://127.0.0.1:8000/candidat/" + iduser).then((res) => {
      setid(res.data.id);
     // 
    //  console.log(res.data.id);
      setFirstName(res.data.first_name);
      setLastName(res.data.last_name);
      setProfileTitle(res.data.profileTitle);
      setAdresse(res.data.address);
      setPhone(res.data.phone);
      setDate_of_birth(res.data.date_of_birth.date);
      setJob(res.data.job);
      setimgProfilePath("http://127.0.0.1:8000/images/candidats/"+res.data.imgProfilePath);
      props.IdCandidat(res.data.id);
    });
    }
   

  };

  localStorage.setItem("candidat_id", id);
  const LogOut = () => {
    localStorage.clear();
    navigate("/Login");
  };
  // console.log(myData.id);
  useEffect(() => {
    getcandidat();
  }, []);

  return (
    <>
      <div className="header-inner" style={{ background: "#eeeeee" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="candidates-user-info">
                <div className="jobber-user-info">
                  <div className="profile-avatar">
                    <img
                      className="img-fluid "
                      src={ImgProfilePath}
                      alt=""
                    />
                  </div>

                  <div className="profile-avatar-info ms-4">
                    <h3>
                      {FirstName} {LastName} 
                    </h3>
                    <div className="candidate-list-option">
                      <ul className="list-unstyled">
                        <li className="text-dark">
                          <i className="fas pe-1" />
                          {ProfileTitle}
                        </li>
                        <li className="text-dark">
                          <i className="fas pe-1" />
                          {Adresse}{" "}
                          <span
                            className="fw-bold  bg-warning"
                            data-bs-toggle="modal"
                            data-bs-target="#ModalCONTACTDETAIL"
                          >
                            CONTACT DETAIL
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
     
          </div>
        </div>
      </div>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="sticky-top secondary-menu-sticky-top">
                <div className="secondary-menu">
                  <ul className="list-unstyled mb-0">
                    <li>
                      <Link to="/dashbord-candidat" className="active">
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link to="/my-profile" state={myData}>
                        My Profile
                      </Link>
                    </li>
                    <li>
                      <Link to="/resume-profile">My Resume</Link>
                    </li>
                    <li>
                      <Link to="/change-password">Change Password</Link>
                    </li>
                    <li>
                    <Link to="/recruiting-review">Recruiting Review </Link>
              
                    </li>

                    <li>
                      <a
                        className="btn  mb-2"
                        style={{marginLeft:"350px" }}
                        onClick={() => LogOut()}
                      >
                        LogOut
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Outlet />

      <div
        className="modal fade"
        id="ModalCONTACTDETAIL"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered " role="document">
          <div className="modal-content">
            <div className="modal-header p-4">
              <h4 className="mb-0 text-center"> CONTACT DETAIL</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="card" style={{ width: "100%" }}>
                <div className="card-header text-dark">{Job}</div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <i className="font-xll text-primary align-self-center flaticon-account"></i>{" "}
                    <span className="fw-bold"> Name : </span>
                    {FirstName} {LastName}
                  </li>
                  <li className="list-group-item">
                    <i className="font-xll text-primary align-self-center flaticon-appointment"></i>{" "}
                    <span className="fw-bold">Anniversary :</span>{" "}
                    {Date_of_birth}
                  </li>
                  <li className="list-group-item">
                    <i className="font-xll text-primary align-self-center flaticon-contact"></i>{" "}
                    <span className="fw-bold">Phone :</span> {Phone}
                  </li>
                  <li className="list-group-item">
                    <i className="font-xll text-primary align-self-center flaticon-map"></i>{" "}
                    <span className="fw-bold">Adress :</span> {Adresse}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { HeaderProfile };
