import { useState } from "react";
import { ChangePasswordForm } from "../Candidat-Dashbord/ChangePasswordForm";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { HeaderProfile } from "./HeaderProfile";


const ChangePasswordEmployer =()=>{
  const [Employer, setIdEmployer] = useState([]);

  const IdEmployer = (data) => {
    setIdEmployer(data);
  };
return (
    <>
     <Header/>
     <HeaderProfile IdEmployer={IdEmployer}/>
     <section>
          <div className="container">
            <div className="row">
             

             <ChangePasswordForm/>
            </div>
          </div>
        </section>
 
     <Footer/>

    </>
)
}
export {ChangePasswordEmployer}