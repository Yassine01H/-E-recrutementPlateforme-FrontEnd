import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

const DetailsEmployer=()=>{
    const params = useParams("");
  
    const [idEmployer,setidEmployer] = useState("");
    const [firstname,setfirstname] = useState("");
    const [last_name,setlast_name] = useState("");
    const [web_site,setweb_site] = useState("");
    const [company_name,setcompany_name] = useState("");
    const [company_adress,setcompany_adress] = useState("");
    const [phone,setphone] = useState("");
    const [logo,setlogo] = useState("");
    const [company_description,setcompany_description] = useState("");
     const getEmployer =()=>{
       axios.get("http://127.0.0.1:8000/recruiter/"+params.id).then((res)=>{
         setidEmployer(res.data.id);
         setfirstname(res.data.first_name);
         setlast_name(res.data.last_name);
         setweb_site(res.data.web_site);
         setcompany_name(res.data.company_name);
         setcompany_adress(res.data.company_adress);
         setphone(res.data.phone);
         setlogo(res.data.logo);
         setcompany_description(res.data.company_description);
       })
   
     }
   
     getEmployer();
    return(
        <>
        <div className="col-md-4 col-sm-6 mb-4">
                      <div className="d-flex">
                        <i className="font-xll text-primary align-self-center flaticon-binoculars" />
                        <div className="feature-info-content ps-3">
                          <label className="mb-1">Viewed</label>
                          <span className="mb-0 fw-bold d-block text-dark">164</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 mb-4">
                      <div className="d-flex">
                        <i className="font-xll text-primary align-self-center flaticon-placeholder" />
                        <div className="feature-info-content ps-3">
                          <label className="mb-1">Locations</label>
                          <span className="mb-0 fw-bold d-block text-dark">{company_adress}</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 mb-4">
                      <div className="d-flex">
                        <i className="font-xll text-primary align-self-center flaticon-list" />
                        <div className="feature-info-content ps-3">
                          <label className="mb-1">Categories</label>
                          <span className="mb-0 fw-bold d-block text-dark">Arts, Design, Media</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 mb-md-0 mb-4">
                      <div className="d-flex">
                        <i className="font-xll text-primary align-self-center flaticon-time" />
                        <div className="feature-info-content ps-3">
                          <label className="mb-1">Since</label>
                          <span className="mb-0 fw-bold d-block text-dark">Management</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 mb-sm-0 mb-4">
                      <div className="d-flex">
                        <i className="font-xll text-primary align-self-center flaticon-users" />
                        <div className="feature-info-content ps-3">
                          <label className="mb-1">Team Size</label>
                          <span className="mb-0 fw-bold d-block text-dark">15</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <div className="d-flex">
                        <i className="font-xll text-primary align-self-center flaticon-add-user" />
                        <div className="feature-info-content ps-3">
                          <label className="mb-1">Followers</label>
                          <span className="mb-0 fw-bold d-block text-dark">50</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 mt-md-5 mb-4 mb-md-5">
                  <h5 className="mb-3 mb-md-4">About Us</h5>
                  <p>{company_description}</p>
                </div>
        </>
    )
}
export {DetailsEmployer}