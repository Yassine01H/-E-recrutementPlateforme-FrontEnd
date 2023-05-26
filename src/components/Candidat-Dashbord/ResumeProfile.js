//import { Outlet, Link ,useNavigate} from "react-router-dom";
import { Header } from "../Header";
//import { Footer } from "../Footer";
import { Education } from "./Education";
import { LicensesAndCertifications } from "./LicensesAndCertifications";
import { Language } from "./Language";
import { Cv } from "./Cv";
import { Skills } from "./Skills";
import { HeaderProfile } from "./HeaderProfile";
import { useState } from "react";
import { Footer } from "../Footer";

const ResumeProfile = () => {
//const idCandidat = localStorage.getItem("candidat_id");
//console.log("Resume"+idCandidat);
     
const [CandidatID, setIdCandidat] = useState([]);

const IdCandidat = (data) => {
  setIdCandidat(data);
};
  return (
      <>
      <Header/>
      <div>
      <HeaderProfile IdCandidat={IdCandidat} />
      <Cv idCandidat={CandidatID}/>
      <Education idCandidat={CandidatID}/>
      <LicensesAndCertifications idCandidat={CandidatID}/>
      <Skills idCandidat={CandidatID}/>

      <Language idCandidat={CandidatID}/>
      </div>
      
      <Footer/>
      </>
      )
}

export {ResumeProfile}
