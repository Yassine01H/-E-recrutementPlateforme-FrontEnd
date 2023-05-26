//import { Outlet, Link } from "react-router-dom";
import { Header } from "../../Header";
import { Footer } from "../../Footer";

import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { HeaderProfile } from "../../Candidat-Dashbord/HeaderProfile";
import { HeaderCandidat } from "./HeaderCandidat";
import { AboutMe } from "./AboutMe";
import { EducationCandidat } from "./EducationCandidat";
import { LicenseAndCertificationCandidat } from "./LicenseAndCertificationCandidat";
import { LanguageCandidat } from "./LanguageCandidat";
import { SkillsCandidat } from "./SkillsCandidat";
import { Similar_Jobs } from "../../Similar_Jobs";
import { Similar_Candidats } from "../../Similar_Candidats";
const CandidateDetail = () => {
  const [childDataId, setChildDataId] = useState("");

  const handleChildDataId = (data) => {
    setChildDataId(data);
  };

  return (
    <>
      <Header />

      <HeaderCandidat onchildDataID={handleChildDataId} />
    
      <section className="space-pb">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="sticky-top secondary-menu-sticky-top">
                <div className="secondary-menu">
                  <ul>
                    <li>
                      <a href="#about"> About </a>
                    </li>
                    <li>
                      <a href="#education"> Education </a>
                    </li>
                    <li>
                      <a href="#licensesandcertifications"> Licenses and certifications </a>
                    </li>
                    <li>
                      <a href="#LANGUAGES"> Languages </a>
                    </li>
                    <li>
                      <a href="#skill"> professional Skill </a>
                    </li>
      
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-8 mb-4 mb-lg-0">
              <div className="jobber-candidate-detail"  id="about">
                <hr className="my-4 my-md-5" />

                <AboutMe id={childDataId} />

                <hr className="my-4 my-md-5" id="education"/>

                <EducationCandidat id={childDataId} />

                <hr className="my-4 my-md-5" id="licensesandcertifications" />

               <LicenseAndCertificationCandidat id={childDataId}/>


                <hr className="my-4 my-md-5" id="LANGUAGES"/>
          

                    <LanguageCandidat id={childDataId}/>


                <hr className="my-4 my-md-5" id="skill"/>

                    <SkillsCandidat id={childDataId}/>
              </div>
            </div>

            {/*=================================
    sidebar */}
            <div className="col-lg-4">
              <div className="sidebar mb-0">

                 <Similar_Jobs/>
                 <Similar_Candidats/>
              </div>
            </div>
            {/*=================================
    sidebar */}
    
    
    
          </div>
        </div>
      </section>
      {/*=================================
feature */}

      <section className="feature-info-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-lg-0 mb-4">
              <div className="feature-info feature-info-02 p-4 p-lg-5 bg-primary">
                <div className="feature-info-icon mb-3 mb-sm-0 text-dark">
                  <i className="flaticon-team" />
                </div>
                <div className="feature-info-content text-white ps-sm-4 ps-0">
                  <p>Jobseeker</p>
                  <h5 className="text-white">Looking For Job?</h5>
                </div>
                <a className="ms-auto align-self-center" href="#">
                  Apply now
                  <i className="fas fa-long-arrow-alt-right" />{" "}
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="feature-info feature-info-02 p-4 p-lg-5 bg-dark">
                <div className="feature-info-icon mb-3 mb-sm-0 text-primary">
                  <i className="flaticon-job-3" />
                </div>
                <div className="feature-info-content text-white ps-sm-4 ps-0">
                  <p>Recruiter</p>
                  <h5 className="text-white">Are You Recruiting?</h5>
                </div>
                <a className="ms-auto align-self-center" href="#">
                  Post a job
                  <i className="fas fa-long-arrow-alt-right" />{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export { CandidateDetail };
