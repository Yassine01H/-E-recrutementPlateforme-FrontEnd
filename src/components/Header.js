import axios from "axios";
import { useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { WelcomeUser } from "./WelcomeUser";
const Header = () => {
    // check if token exists in local storage
    const hasToken = localStorage.getItem("token");
    const navigate = useNavigate();
    // handle logout click event


    const Sign_in =() =>{
      navigate ("/login");
    }
    const Sign_up =()=>{
      navigate ("/signup");
    }


  return (
    <>
      <header className="header bg-dark">
        <nav className="navbar navbar-static-top navbar-expand-lg header-sticky">
          <div className="container-fluid">
            <button
              id="nav-icon4"
              type="button"
              className="navbar-toggler"
              data-bs-toggle="collapse"
              data-bs-target=".navbar-collapse"
            >
              <span />
              <span />
              <span />
            </button>
            <Link className="nav-link dropdown-toggle navbar-brand" to="/">
              <img className="img-fluid" src="/images/logo.svg" alt="logo" />
            </Link>
            <div className="navbar-collapse collapse justify-content-start">
              <ul className="nav navbar-nav">
              <li className="nav-item dropdown active">
                <Link className="nav-link dropdown-toggle" to="/">Home</Link>
                </li>

      
                <li className="dropdown nav-item mega-menu">
                <Link className="nav-link dropdown-toggle" to="/Job-Listing">Jobs</Link>         
                </li>


                <li className="nav-item dropdown">

                  <Link className="nav-link dropdown-toggle" to="/employer-Listing">Employer</Link>

                </li>
                <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/candidats-Listing">Candidates</Link>

             
                </li>
                <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/services">Services</Link>
                </li>

                <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/Contactus">Contact US</Link>
                </li>
              </ul>
            </div>
            <div className="add-listing">
            {hasToken ? (

              <WelcomeUser token={hasToken}/>
            ) : (
              <div>
              <div className="login d-inline-block me-4">
              <a
                onClick={()=>Sign_in()}
              >
                  <i className="far fa-user pe-2" />
                  Sign in
              </a>
              </div>
              <a className="btn btn-white btn-md" 
               onClick={()=>Sign_up()}
              >
                
                <i className="fas fa-plus-circle" />
                Sign up
              </a>
              </div>

            )}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export { Header };
