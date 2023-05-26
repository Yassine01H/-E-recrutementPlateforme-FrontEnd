import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const HeaderCandidat = (props) => {
  const params = useParams();
  // console.log();
  const navigte = useNavigate();
  // console.log(props.idCandidat);
  const [id, setid] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [ProfileTitle, setProfileTitle] = useState("");
  const [Phone, setPhone] = useState("");
  const [Adresse, setAdresse] = useState("");
  const [Date_of_birth, setDate_of_birth] = useState("");
  const [Job, setJob] = useState("");
  const [ImgProfilePath, setimgProfilePath] = useState("");

// console.log(params.id);
  const getcandidat = () => {
    if (params.id != ""){
    axios.get("http://127.0.0.1:8000/candidat/"+ params.id).then((res) => {
      setid(res.data.id);
      setFirstName(res.data.first_name);
      setLastName(res.data.last_name);
      setProfileTitle(res.data.profileTitle);
      setAdresse(res.data.address);
      setPhone(res.data.phone);
      setDate_of_birth(res.data.date_of_birth.date);
      setJob(res.data.job);
      setimgProfilePath("http://127.0.0.1:8000/images/candidats/"+res.data.imgProfilePath);
      props.onchildDataID(res.data.id);
    });
  }
  };
 
    const cvdownload =(id)=>{
      
      navigte('/MyResume/'+params.id);

    }
    useEffect(() => {
      getcandidat();
    }, []);
  return (
    <>
      <div className="candidate-banner" style={{ background: "#eeeeee" }}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                className="candidate-list "
                style={{ background: "#eeeeee" }}
              >
                <div className="candidate-list-image">
                  <img
                    className="img-fluid"
                    src={
                  ImgProfilePath
                    }
                    alt=""
                  />
                </div>
                <div className="candidate-list-details">
                  <div className="candidate-list-info">
                    <div className="candidate-list-title">
                      <h5 className="mb-0">
                        {FirstName} {LastName}
                      </h5>
                    </div>
                    <div className="candidate-list-option">
                      <ul className="list-unstyled">
                        <li>
                          <i className="fas fa-filter pe-1" />
                          {Job}
                        </li>
                        <li>
                          <i className="fas fa-map-marker-alt pe-1" />
                          {Adresse}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="widget ms-auto mb-0">
                  <div className="company-detail-meta ms-auto">
                    <a className="btn btn-primary" href="#" onClick={()=>cvdownload(id)}>
                      Download CV <i className="fas fa-download ms-1" />
                    </a>
                    <ul className="list-unstyled mt-3 mb-0 ms-2 ms-sm-0">
                      <li>
                        <div className="share-box share-dark-bg">
                          <a href="#">
                            {" "}
                            <i className="fas fa-share-alt" />
                            <span className="ps-2">Share</span>
                          </a>
                          <ul className="list-unstyled share-box-social">
                            <li>
                              {" "}
                              <a href="#">
                                <i className="fab fa-facebook-f" />
                              </a>
                            </li>
                            <li>
                              {" "}
                              <a href="#">
                                <i className="fab fa-twitter" />
                              </a>{" "}
                            </li>
                            <li>
                              {" "}
                              <a href="#">
                                <i className="fab fa-linkedin" />
                              </a>{" "}
                            </li>
                            <li>
                              {" "}
                              <a href="#">
                                <i className="fab fa-instagram" />
                              </a>{" "}
                            </li>
                            <li>
                              {" "}
                              <a href="#">
                                <i className="fab fa-pinterest" />
                              </a>{" "}
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-print" />
                          <span className="ps-2">Print</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export { HeaderCandidat };
