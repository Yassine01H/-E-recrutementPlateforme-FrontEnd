import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Similar_Candidats =()=>{

    const [visibleItems, setVisibleItems] = useState(3);
    const navigate = useNavigate("");
    const loadMore = () => {
      navigate("/candidats-Listing");
    };
  
    const [candidats,setcandidats] = useState([]);
    const getAllJob = () => {
      axios.get("http://127.0.0.1:8000/api/candidats").then((res) => {
      // console.log(res.data);
       setcandidats(res.data);
      })
     }

     const CandidatDetails=(id)=>{
    //  console.log(id);
      navigate("/candidat-Detail/"+id);
    }

    useEffect(() => {
        getAllJob();
        //setFilteredData([]);
       
      }, []);
return (
<>

<div className="widget">
                  <div className="widget-title">
                    <h5>Similar Candidats</h5>
                  </div>
                  <div className="similar-jobs-item widget-box">
                {candidats.slice(0, visibleItems).map((Candidat) =>( 
                    <div className="job-list" key={Candidat.id}>
                      <div className="job-list-details">

                        <div className="job-list-info">
                          <div className="job-list-title">
                            <h6>
                            <div className="candidate-list-image">
                            <img
                            className="img-fluid"
                            src={
                                "http://127.0.0.1:8000/images/candidats/" +
                                Candidat.imgProfilePath
                            }
                            alt=""
                            style={{width: "70px",borderRadius: '50px'}}
                            />
                        </div>
                                <a onClick={()=>CandidatDetails(Candidat.user.split('users/')[1])}>{Candidat.profileTitle} </a></h6>
                          </div>
                          <div className="job-list-option">
                            <ul className="list-unstyled">
                              <li>
                                <span>Full Name: </span>
                                <a onClick={()=>CandidatDetails(Candidat.user.split('users/')[1])}>{Candidat.first_name} {Candidat.last_name}</a>
                              </li>
                              <li>
                                <span>Phone :</span>
                                <a onClick={()=>CandidatDetails(Candidat.user.split('users/')[1])}>{Candidat.phone}</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                              ))
                            }
                    <div className="d-grid gap-2 col-6 mx-auto" style={{marginTop:"20px"}}>
                    {visibleItems < candidats.length && (
                    <button onClick={loadMore} className="btn btn-outline-dark" style={{padding: "5px"}} type="button">View More</button>
                    )}
                  </div>     
                  </div>
                </div>
</>
)
}
export {Similar_Candidats}