import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

const HeaderEmployer=()=>{
    const params = useParams("");
    //console.log(params);
   
    const [company_name,setcompany_name] = useState("");
    const [company_adress,setcompany_adress] = useState("");
    const [phone,setphone] = useState("");
    const [logo,setlogo] = useState("");
  
     const getEmployer =()=>{
       axios.get("http://127.0.0.1:8000/recruiter/"+params.id).then((res)=>{
         setcompany_name(res.data.company_name);
         setcompany_adress(res.data.company_adress);
         setphone(res.data.phone);
         setlogo(res.data.logo);   
       })
   
     }
   
     getEmployer();
    return (
    <>
     <div className="employers-list border">
                  <div className="employers-list-logo">
                  <img className="img-fluid " src={
                        "http://127.0.0.1:8000/images/recruiters/" +
                        logo
                      } alt=""
                     
                      />
                  </div>
                  <div className="employers-list-details">
                    <div className="employers-list-info">
                      <div className="employers-list-title">
                        <h5 className="mb-0">{company_name}</h5>
                      </div>
                      <div className="employers-list-option">
                        <ul className="list-unstyled">
                          <li><i className="fas fa-map-marker-alt pe-1" />{company_adress}</li>
                          <li><i className="fa fa-phone fa-flip-horizontal ps-1" />{phone}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
              
                </div>
    </>)
}
export {HeaderEmployer}