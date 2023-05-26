import axios from "axios";
import { Header } from "../Header";
import { HeaderProfile } from "./HeaderProfile";
import CryptoJS from "crypto-js";
import { useState } from "react";
import { toast } from "react-hot-toast";

import jwt_decode from "jwt-decode";
import { ChangePasswordForm } from "./ChangePasswordForm";
import { Footer } from "../Footer";
const ChangePassword = (props) => {

  const [IDCandidat,setIDCandidat] = useState("");
  const IdCandidat =(data)=>{
    setIDCandidat(data);
  }

  return (
    <div>
      <Header />
      <div>
        <HeaderProfile IdCandidat={IdCandidat} />

        <section>
          <div className="container">
            <div className="row">
             <ChangePasswordForm/>
            </div>
          </div>
        </section>
      </div>

      <div>

      <Footer/>

      
      </div>
    </div>
  );
};
export { ChangePassword };
