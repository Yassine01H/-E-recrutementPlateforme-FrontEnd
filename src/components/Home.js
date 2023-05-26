//import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { useNavigate } from "react-router-dom";
//import { Footer } from "./Footer";
const Home = (props) => {
  const [Searchdatawhat, setDataWhat] = useState("");
  const [SearchdataWhere, setDataWhere] = useState("");

  const handleChangeWhat = (e) => {
    const { value, name } = e.target;
    setDataWhat(value);

    props.onSearchTop({
      valST : value,
      nomST : name
     });
  };
   
  const handleChangeWhere = (e) =>{
    const { value, name } = e.target;
    setDataWhere(value);

    props.onSearchTop({
      valST : value,
      nomST : name
     });
  }

  const navigate = useNavigate();
  const FindJob=()=>{
    navigate("/Job-Listing/"+Searchdatawhat+"/"+SearchdataWhere);
  }

  return (
    <>
      <Header />
      
      <section className="banner bg-holder bg-overlay-black-30 text-white" style={{backgroundImage: 'url(images/bg/banner-01.jpg)'}}>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center position-relative">
              <h1 className="text-white mb-3">Drop <span className="text-primary"> Resume &amp; Get </span> Your Desired Job</h1>
              <p className="lead mb-4 mb-lg-5 fw-normal">Find Jobs, Employment &amp; Career Opportunities</p>
              <div className="job-search-field">
                <div className="job-search-item">
                  <form className="form row">
                    <div className="col-lg-5">
                      <div className="form-group mb-3">
                        <div className="d-flex">
                          <label className="form-label">What</label>
                          <span className="ms-auto">e.g. job, company, title</span>
                        </div>
                        <div className="position-relative left-icon">
                          <input type="text" 
                          className="form-control" 
                          name="dataFromChildWhat"
                          value={Searchdatawhat} onChange={handleChangeWhat}
                          placeholder="Job title, skill or company" />
                          <i className="fas fa-search" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <div className="form-group mb-3">
                        <div className="d-flex">
                          <label className="form-label">Where</label>
                          <span className="ms-auto">e.g. city, county or postcode</span>
                        </div>
                        <div className="position-relative left-icon">
                          <input type="text"
                           className="form-control location-input"
                           
                            name="dataFromChildWhere"
                            value={SearchdataWhere} onChange={handleChangeWhere}
                             placeholder="Town, city or postcode" />
                          <i className="far fa-compass" />
                          <a href="#">
                            <div className="detect">
                              <span className="d-none d-sm-block">Detect</span>
                              <i className="fas fa-crosshairs" />
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-12">
                      <div className="form-group mb-3 form-action">
                        <button  onClick={()=>FindJob()} type="button" className="btn btn-primary btn-lg"><i className="fas fa-search"/> Find Jobs</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="job-tag mt-4">
                <ul className="justify-content-center">
                  <li className="text-primary">Trending Keywords :</li>
                  <li><a href="#">Automotive,</a></li>
                  <li><a href="#">Education,</a></li>
                  <li><a href="#">Health and Care Engineering</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>


        
     
    </>
  );
};

export { Home };
