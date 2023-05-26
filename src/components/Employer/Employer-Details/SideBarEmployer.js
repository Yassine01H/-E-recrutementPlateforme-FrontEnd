import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Similar_Jobs } from "../../Similar_Jobs";

const SideBarEmployer=()=>{
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
    return (
        <>
                      <div className="col-lg-4 mt-4 mt-lg-0">
                <div className="sidebar mb-0">
                  <div className="widget">
                    <div className="company-address widget-box">
                    <h5>Company Contact</h5>
                      <ul className="list-unstyled mt-3">
                      <li><a href="#"><span className="ps-2">{company_name}</span></a></li>
                        <li><a href="#"><i className="fas fa-link fa-fw" /><span className="ps-2">{web_site}</span></a></li>
                        <li><a href="tel:+905389635487"><i className="fas fa-phone fa-flip-horizontal fa-fw" /><span className="ps-2">{phone}</span></a></li>
                        <li><a href="mailto:ali.potenza@job.com"><i className="fas fa-map-marker-alt pe-1" /><span className="ps-2">{company_adress}</span></a></li>
                      </ul>
                    </div>
                  </div>
                   <Similar_Jobs/>
                </div>
              </div>
          
        </>
    )
}
export {SideBarEmployer}