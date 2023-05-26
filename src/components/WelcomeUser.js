import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { useState } from "react";
import axios from "axios";
const WelcomeUser = (props) => {
 //   console.log(props.token);
    const [role,setRole] = useState("");
    const userId = localStorage.getItem("user_id");
     const roleUser =()=>{
        if (userId != ""){
        axios.get("http://127.0.0.1:8000/api/users/"+userId).then((res)=>{
            setRole(res.data.role);
        })
      }
     }

     roleUser();
  //   console.log(role);
    


     const[FirstName,setFirstName] = useState("");
     const[LastName,setLastName] = useState("");

     const[nav,setNavigate] = useState ("");
     const getFirstNameLastName = () => {
   //   console.log(role.split("/")[3]);

      if (role.split("/")[3] == 1){
        if (userId != ""){
    
     
        axios.get("http://127.0.0.1:8000/candidat/" + userId).then((res) => {
        setFirstName(res.data.first_name);
        setLastName(res.data.last_name);
        setNavigate("/dashbord-candidat");
        });   }
       // console.log("candidat");
      }else if (role.split("/")[3] == 2){
        if (userId != ""){
        axios.get("http://127.0.0.1:8000/recruiter/"+userId).then((res)=>{
        
        setFirstName(res.data.first_name);
        setLastName(res.data.last_name);
        setNavigate("/employer-Dashbord");
         
        })}
      //  console.log("recruiter");
      }
    }
    getFirstNameLastName();
  //  console.log(FirstName + LastName );
    
   // console.log(jwt_decode(props.token)); 
    const navigate = useNavigate();
    const handleLogout = () => {
        // remove token from local storage
        localStorage.clear();
        // reload page to clear user session
        navigate("/");
      };
    
    const Dashbord = () =>{
      navigate(nav);
    }
  return (
    <>
                  <div className="dropdown-toggle" style={{paddingBottom: "8px"}}>
              <div className="login d-inline-block me-4">
              </div>
              
             <h6> <span style={{ color: "orange" }} >  Welcome {FirstName} {LastName} </span> <br/></h6>
                <a className="btn btn-primary" style={{padding:"9px 20px"}} onClick={Dashbord}>Dashbord </a>
                 <a className="btn btn-danger" style={{padding:"9px 20px"}} onClick={handleLogout}>LogOut </a>
               

              </div>

    </>
  );
};
export { WelcomeUser };
