import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { EducationCandidat } from "../EducationCandidat";
import { LicenseAndCertificationCandidat } from "../LicenseAndCertificationCandidat";
import { useReactToPrint } from "react-to-print";
const MyResume=()=>{
    const params = useParams();
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
    });
    const [id, setid] = useState("");
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [ProfileTitle, setProfileTitle] = useState("");
    const [Phone, setPhone] = useState("");
    const [Adresse, setAdresse] = useState("");
    const [Date_of_birth, setDate_of_birth] = useState("");
    const [Job, setJob] = useState("");
    const [ImgProfilePath, setimgProfilePath] = useState("");
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
    //console.log(myData);
  
    const getcandidat = () => {
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
    getcandidat();

    const [Languages, setLanguages] = useState([]);
    const getLanguage =() =>{
      axios.get("http://127.0.0.1:8000/api/languages").then((res) => {
        //console.log(res.data);
        setLanguages(res.data)
        })}

        const [skills,setSkills] = useState([]);
        const GetAllSkills = () =>{
          axios.get("http://127.0.0.1:8000/api/competences").then((res) => {
            console.log(res.data);
            setSkills(res.data);
           });      
        }
    useEffect(() => {
      GetAllSkills();
        getLanguage();
    }, []);

return(
    <><button onClick={handlePrint} className="print__button">  Print </button> 
         <div ref={componentRef}>
         
        <section className="space-ptb" >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-9">
                <div className="row">
                  <div className="col-lg-5">
                    <div className="resume-base user-dashboard-info-box" style={{backgroundColor:"#272828"}}>
                      <div className="profile" >
                        <div className="jobber-user-info" >
                          <div className="profile-avatar">
                            <img className="img-fluid " src={"http://127.0.0.1:8000/images/candidats/" + ImgProfilePath} alt="" />
                          </div>
                          <div className="profile-avatar-info mt-3" >
                            <h5  className="text-info">{FirstName} {LastName}</h5>
                          </div>
                        </div>
                      </div>
                      <div className="about-candidate border-top">
                        <div className="candidate-info">
                          <h6 className="text-info">Name :</h6>
                          <p className="text-white">{FirstName} {LastName}</p>
                        </div>
                        <div className="candidate-info">
                          <h6 className="text-info">Phone:</h6>
                          <p className="text-white"> {Phone}</p>
                        </div>
                        <div className="candidate-info">
                          <h6 className="text-info">Date Of Birth :</h6>
                          <p className="text-white">{Date_of_birth.split(" ")[0]}</p>
                        </div>
                        <div className="candidate-info">
                          <h6 className="text-info">Address :</h6>
                          <p className="text-white">{Adresse}</p>
                        </div>
                        <div className="candidate-info">
                          <h6 className="text-info">Skills :</h6>

                          {skills.map(skill=>
                          
              
                          <label className="text-white">{skill.competenceName+" , "}</label>
                        )}
                        </div>
                        
                        <div className="candidate-info">
                        <h5 className="text-info">Languages :</h5>
                        
                        {Languages.map(Language =>
                                  
                        <div className="progress">
                          <div className="progress-bar" role="progressbar" style={{width: '55%'}} aria-valuenow={55} aria-valuemin={0} aria-valuemax={100}>
                            <div className="progress-bar-title" >{Language.languageName}</div>
                            <span className="progress-bar-number">70%</span>
                          </div>
                        </div>
                     
                     )}

                        </div>
                        
                        
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="resume-experience ps-0">
                      <div className="timeline-box">
                      <EducationCandidat/>
                      </div>
                    </div>
                    <div className="resume-experience ps-0">
                  
                      <LicenseAndCertificationCandidat/>
                 
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div id="back-to-top" className="back-to-top">
          <i className="fas fa-angle-up" />
        </div>

      </div>
    </>
)
}
export {MyResume};