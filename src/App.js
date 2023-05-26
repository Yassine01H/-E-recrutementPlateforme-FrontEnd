import React, { Component, useState } from "react";
import "./App.css";
import { Toaster } from "react-hot-toast";
import { Home } from "./components/Home";
import { Signup } from "./components/Authentification/Signup";
import { Login } from "./components/Authentification/Login";
import { CandidatDashboard } from "./components/Candidat-Dashbord/CandidatDashboard";
import { ResumeProfile } from "./components/Candidat-Dashbord/ResumeProfile";
import { MyProfile } from "./components/Candidat-Dashbord/MyProfile";
import { Addprofile } from "./components/Authentification/AddprofileCandidat";
import { ChangePassword } from "./components/Candidat-Dashbord/ChangePassword";

import { EmployerListing } from "./components/Employer/EmployersListing";


import { CandidatsListing } from "./components/Candidat/CandidatsListing";
import { CandidateDetail } from "./components/Candidat/CandidatDetails/CandidateDetail";
import { MyResume } from "./components/Candidat/CandidatDetails/MyResumeCV.js/MyResume";


import { Routes, Route, useNavigate } from "react-router-dom";
import { AddprofileEmployer } from "./components/Authentification/AddprofileEmployer";
import { EmployerDashbord } from "./components/Employer-Dashbord/EmployerDashbord";
import { PostNewJob } from "./components/Employer-Dashbord/Post_a_New_Job";
import { Job_Listing } from "./components/JobListing/Jobs";
import { Services } from "./components/Services";
import { Contactus } from "./components/Contactus";
import { EmployerDetails } from "./components/Employer/Employer-Details/Employer";
import { PostConfirmation } from "./components/Employer-Dashbord/PostConfirmation";
import { JobDetails } from "./components/JobListing/JobDetails";
import { ManageJobs } from "./components/Employer-Dashbord/ManageJobs";
import { ManageCandidats } from "./components/Employer-Dashbord/ManageCandidats";
import { ChangePasswordEmployer } from "./components/Employer-Dashbord/ChangePassword";
import { RecruitingReview } from "./components/Candidat-Dashbord/RecruitingReview";

import { MeetHomePage } from "./components/Meet/HomePage";
import { RoomPage } from "./components/Meet/RoomPage";
import { EditProfile } from "./components/Employer-Dashbord/EditProfile";
function App(props) {
  const [Employer,setIdEmployer] = useState("");
  const IdEmployer=(data)=>{
    setIdEmployer(data);
  }
  const [Id_User,setIdUser] = useState("");
  const IdUser=(data)=>{
    setIdUser(data);
  }
   const [searchSidebarTop, setsearchSidebarTop] = useState(
    {
      dataFromChildWhere :  "",
      dataFromChildWhat  : "",
     }
    );
    //console.log();
  const searchTop = (data)=>{
    searchSidebarTop[data.nomCB] =  data.valCB;
  }
  //props.Employer(Employer);
 // console.log("Employer"+Employer);

  return (
    <div>
       
      <Routes>
     
        <Route path="/dashbord-candidat" element={<CandidatDashboard Id_User={Id_User}/>} />  
        <Route path="/candidats-Listing" element={<CandidatsListing />} />
        <Route path="/candidat-Detail/:id" element={<CandidateDetail />} />
        <Route path="/MyResume/:id" element={<MyResume />} />
        <Route path="/"   element={<Home onSearchTop={searchTop}/>} />
        <Route path="/employer-Listing" element={<EmployerListing />} />
        <Route path="/Job-Listing" element={<Job_Listing searchSidebarTop={searchSidebarTop} />} />
        <Route path="/services" element={<Services />} />
        <Route path="/Contactus" element={<Contactus />} />
  
        <Route path="/signup" element={<Signup />} />
        <Route path="login" element={<Login IdUser={IdUser}/>} />

        <Route path="/employerDetails/:id" element={<EmployerDetails />} />

        <Route path="/employer-Dashbord" element={<EmployerDashbord Employer={IdEmployer} Id_User={Id_User}/>}/>
        <Route path="/Manage-Candidats" element={<ManageCandidats />}/>
        <Route path="/PostNewJob" element={<PostNewJob IdEmployer={Employer}/>}/>
        <Route path="/Post-Confirmation" element={<PostConfirmation/>}/>
        <Route path="/Job-Details/:id" element={<JobDetails />}/>
        <Route path="/Manage-Jobs" element={<ManageJobs />}/>
       
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/resume-profile" element={<ResumeProfile />} />
        <Route path="/add-profile" element={<Addprofile />} />
        <Route path="/add-profile-Employer" element={<AddprofileEmployer />} />

        <Route path="/edit-profile" element={<EditProfile />} />

        <Route path="/change-password" element={<ChangePassword Id_User={Id_User}/>} />
        <Route path="/change-password-employer" element={<ChangePasswordEmployer />} />
        <Route path="/recruiting-review" element={<RecruitingReview />} />

        <Route path='/meet-homePage' element={<MeetHomePage/>}/>
        <Route path='/room/:roomID' element={<RoomPage/>}/>

      </Routes>

      <div>
        <Toaster position="top-right" reverseOrder={true} />
      </div>
    </div>
  );
}

export default App;
