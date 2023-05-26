import axios from "axios"
import { useEffect, useState } from "react"
import { Link, Outlet, useNavigate } from "react-router-dom"
import { Loader } from "../Loader";

const HeaderProfile =(props) =>{
 const employerId = localStorage.getItem("user_id");
 const [idEmployer,setidEmployer] = useState("");
 const [firstname,setfirstname] = useState("");
 const [last_name,setlast_name] = useState("");
 const [web_site,setweb_site] = useState("");
 const [company_name,setcompany_name] = useState("");
 const [company_adress,setcompany_adress] = useState("");
 const [phone,setphone] = useState("");
 const [logo,setlogo] = useState("");
 const [company_description,setcompany_description] = useState("");
 const [loader,setLoader] = useState(false);
 localStorage.setItem("employerID", idEmployer);
  const getEmployer =()=>{
    if (employerId != ""){
    axios.get("http://127.0.0.1:8000/recruiter/"+employerId).then((res)=>{
      setidEmployer(res.data.id);
      setfirstname(res.data.first_name);
      setlast_name(res.data.last_name);
      setweb_site(res.data.web_site);
      setcompany_name(res.data.company_name);
      setcompany_adress(res.data.company_adress);
      setphone(res.data.phone);
      setlogo("http://127.0.0.1:8000/images/recruiters/"+res.data.logo);
      setcompany_description(res.data.company_description);

      props.IdEmployer(res.data.id);
      
    })
  }
  }

 // getEmployer();

  

  const navigate = useNavigate();
  const LogOut = () => {
    localStorage.clear();
    navigate("/Login");
  };
useEffect(() => {
  getEmployer();
}, []);
    return(
        <>
      
       <div className="header-inner" style={{backgroundColor:"#f6f6f6"}}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="jobber-user-info">
                <div className="profile-avatar">
                  <img className="img-fluid " src={logo} alt=""
                     
                      />
                 
                </div>
                <div className="profile-avatar-info ms-4">
                  <h3>{company_name}</h3>
                  <div className="candidate-list-option">
                      <ul className="list-unstyled">
                        <li className="text-dark">
                          <i className="fas pe-1" />
                          {firstname} {last_name}
                        </li>
                        <li className="text-dark">
                          <i className="fas pe-1" />
                        {company_adress} {" "}
                       
                        </li>
                        <li className="text-dark">
                          <i className="fas pe-1" />
                        {phone}
                       
                        </li>
                      </ul>
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
                  <ul>
                    <li><Link className="active" to="/employer-Dashbord" >Dashboard</Link></li>

                    
                    <li><Link  to="/edit-profile" >My Profile</Link></li>
                    <li><Link  to="/change-Password-employer" >Change Password</Link></li>
       
                    <li><Link to="/Manage-Candidats">Manage Candidates</Link></li>
                    <li><Link to="/Manage-Jobs">Manage Jobs</Link></li>
                    
                    <li>
                      <Link to="/PostNewJob">Post New Job</Link>
                    </li>
                    <li>
                      <a
                        className="btn mb-2"
                        style={{marginLeft:"200px" }}
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


      <Outlet/>
        </>
    )
}
export {HeaderProfile}