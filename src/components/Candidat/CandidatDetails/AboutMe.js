import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AboutMe = (props) => {
  //console.log("AboutMe" + props.id);
  const params = useParams();
  const [id, setid] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [ProfileTitle, setProfileTitle] = useState("");
  const [Phone, setPhone] = useState("");
  const [Adresse, setAdresse] = useState("");
  const [Date_of_birth, setDate_of_birth] = useState("");
  const [Job, setJob] = useState("");
  const [ImgProfilePath, setimgProfilePath] = useState("");
  const getcandidat = () => {
    if (params.id !==""){
    axios.get("http://127.0.0.1:8000/candidat/" + params.id).then((res) => {
      setid(res.data.id);
      setFirstName(res.data.first_name);
      setLastName(res.data.last_name);
      setProfileTitle(res.data.profileTitle);
      setAdresse(res.data.address);
      setPhone(res.data.phone);
      setDate_of_birth(res.data.date_of_birth.date);
      setJob(res.data.job);
      setimgProfilePath(res.data.imgProfilePath);
    });
  }
  }
      getcandidat();

    
  return (
    <>
      <div id="about">
        <h5 className="mb-3">About Me</h5>
        <div className="border p-3">
          <div className="row">
            <div className="col-md-4 col-sm-6 mb-4">
              <div className="d-flex">
                <i className="font-xll text-primary align-self-center fas fa-filter pe-1 " />
                <div className="feature-info-content ps-3">
                  <label className="mb-0">Job :</label>
                  <span className="d-block fw-bold text-dark">{Job}</span>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 mb-4">
              <div className="d-flex">
                <i className="font-xll text-primary align-self-center flaticon-account" />
                <div className="feature-info-content ps-3">
                  <label className="mb-0">Name:</label>
                  <span className="d-block fw-bold text-dark">
                    {" "}
                    {FirstName} {LastName}
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 mb-4">
              <div className="d-flex">
                <i className="font-xll text-primary align-self-center flaticon-contact" />
                <div className="feature-info-content ps-3">
                  <label className="mb-0">Phone :</label>
                  <span className="d-block fw-bold text-dark">{Phone}</span>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 mb-4">
              <div className="d-flex">
                <i className="font-xll text-primary align-self-center flaticon-appointment" />
                <div className="feature-info-content ps-3">
                  <label className="mb-0">Date Of Birth :</label>
                  <span className="d-block fw-bold text-dark">
                    {Date_of_birth.split(" ")[0]}
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 mb-4">
              <div className="d-flex">
                <i className="font-xll text-primary align-self-center flaticon-map" />
                <div className="feature-info-content ps-3">
                  <label className="mb-0">Address :</label>
                  <span className="d-block fw-bold text-dark">{Adresse}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export { AboutMe };
