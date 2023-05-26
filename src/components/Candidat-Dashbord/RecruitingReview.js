import { useEffect, useState } from "react";
import { Footer } from "../Footer";
import { Header } from "../Header"
import { HeaderProfile } from "./HeaderProfile"
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RecruitingReview =()=>{

  const [CandidatID, setIdCandidat] = useState([]);

  const IdCandidat = (data) => {
    setIdCandidat(data);
  };
      // console.log(props.Candidat);
    const candidat_id = localStorage.getItem("candidat_id");
    const [offres,setOffres] = useState([]);
    const getAllOffres =()=>{
      if (CandidatID !=""){
        axios.get("http://127.0.0.1:8000/review-Offercandidat/"+CandidatID).then((res)=>{
           setOffres(res.data);
         
        })
      }
    }
    

    
    useEffect(() => {
      getAllOffres();
      
    }, [CandidatID]);
return (
<>
    <Header/>
    <HeaderProfile IdCandidat={IdCandidat}/>
    <section>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="user-dashboard-info-box table-responsive pb-4 mb-0">
                <table className="table manage-candidates-top mb-0">
                  <thead>
                    <tr>
                      <th>Candidate Name</th>
                      <th className="text-center">Messages</th>
                      <th className="action text-end">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                 
                    {offres.map((offre)=>
                    <tr className="candidates-list" key={offre.id} >
                    
                      <td className="title">
                        <div className="candidate-list-details">
                          <div className="candidate-list-info">
                            <div className="candidate-list-title">
                              <h5 className="mb-0">
                                
                                <a href="#">{offre.fullName} </a>
                              </h5>
                            </div>
                            <div className="candidate-list-option">
                              <ul className="list-unstyled">
                                <li>
                                  <i className="fas fa-filter pe-1" />
                                  {offre.emailAddress}
                                </li>

                              </ul>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="candidate-list-favourite-time text-center" style={{width:"40%"}}>
                        <span className="candidate-list-time order-1" >
                          {offre.message}
                        </span>
                      </td>
                      <td>
                          {offre.statut === 1 ? (
                        <ul className="list-unstyled mb-0 d-flex justify-content-end">
                            <div style={{padding:"5px"}}>
                            Waiting For Review{"   "}
                            </div>
                            <div className="spinner-grow spinner-grow-sm" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </ul>
                                    ) : offre.statut === 2 ? (
                                      <ul className="list-unstyled mb-0 d-flex justify-content-end">
                                      <li style={{color:"green"}}>
                                        Meet Accepted <i className="far fa-comment"></i>
                                         </li>
                                      </ul>
                                    ) : offre.statut === 0 ? (
                               
                                   <ul className="list-unstyled mb-0 d-flex justify-content-end">
                                     <li> <span style={{color:"red"}}>unacceptable</span></li>  
                                     </ul>
                                    
                                    ) : (
                                      <div>Statut inconnu</div>
                                    )}            
                          

                        
                      </td>
                    </tr>
                      )}

                  </tbody>
                </table>
            
              </div>
            </div>
          </div>
        </div>
      </section>
    <Footer/>
</>
);
}
export {RecruitingReview}