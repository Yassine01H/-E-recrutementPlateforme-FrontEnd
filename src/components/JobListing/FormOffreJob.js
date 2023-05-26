import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const FormOffreJob =(props)=>{
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const param = useParams();
    const RecruiterID =props.IdRecruiter.split("/")[3];
    const id_candidat = localStorage.getItem('candidat_id');
    const controleSaisieOffreJob =(full_name,email,message)=>{
      const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
      if (!full_name) {
        toast.error('Please enter your full name')
        return false;
      }   
      if (!regex.test(email)|| email == "")   {
        toast.error('email address not valid!')
        return false;
      }
      if (!message) {
          toast.error('Please enter a message')
          return false;
      }
      return true;
    }
    function validateForm(full_name,email,message) {
    if (controleSaisieOffreJob(full_name,email,message)===true){
           const body ={
            statut: 1,
            joboffer: "/api/job_offers/"+param.id,
            candidat: "/api/candidats/"+id_candidat,
            recruiter: "/api/recruiters/"+RecruiterID,
            fullName: fullName,
            emailAddress: email,
            message: message
           } 
          // console.log(body);
           axios.post("http://127.0.0.1:8000/api/demandes",body).then((res)=>{
            if (res.status === 201){
                toast.success("Post success !")
            }
           })
      }
      
      }



    const navigate = useNavigate();
      const OffreJob =()=>{
        if (id_candidat===null){
          navigate("/login");
        }else{
            validateForm(fullName,email,message)
     
        }
       
      }

return (
    <>
                <form>
              <div className="form-group mb-3">
                <label className="form-label">Full name</label>
                <input type="text" className="form-control"name="full_name" onChange={(e)=>setFullName(e.target.value)}  />
              </div>
              <div className="form-group mb-3">
                <label className="form-label">Email address</label>
                <input type="email" className="form-control" name="email"  onChange={(e)=>setEmail(e.target.value)} />
              </div>
              <div className="form-group mb-3">
                <label className="form-label">Message</label>
                <textarea className="form-control" rows={3} name="message" onChange={(e)=>setMessage(e.target.value)} />
              </div>
              <a className="btn btn-primary" style={{width:"100%"}} onClick={()=>OffreJob()}>Apply for this offer</a>
            </form>
    </>
)
}
export {FormOffreJob}