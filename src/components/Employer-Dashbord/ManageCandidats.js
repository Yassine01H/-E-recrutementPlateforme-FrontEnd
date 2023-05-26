import { useEffect, useState } from "react";
import { Header } from "../Header";
import { HeaderProfile } from "./HeaderProfile";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { Loader } from "../Loader";
import { Footer } from "../Footer";

const ManageCandidats = () => {
  const [UrlMeet, setUrlMeet] = useState([]);
  const [message, setMessage] = useState([]);
  const [candidatID, setCandidatID] = useState("");
  const [loader, setLoader] = useState(false);
 
  const getIdc = (id) => {
    //  console.log(id);
    setCandidatID(id);
  };
  const [Employer, setIdEmployer] = useState([]);

  const IdEmployer = (data) => {
    setIdEmployer(data);
  };

  const controleSaisieMeet =(urlMeet,message)=>{
    if (urlMeet == "") {
      toast.error("Meet URL required!");
      return false;
    }if (message == ""){
      toast.error("Meet URL required!");
      return false;
    }
    return true;
  }
  const sendurlMeet = () => {
    const data = {
      urlMeet: UrlMeet,
      message: message,
      candidat: "/api/candidats/" + candidatID,
      recruiter: "/api/recruiters/" + Employer,
    };
    if (controleSaisieMeet(UrlMeet,message) == true){
   // console.log(data);
    axios.post("http://127.0.0.1:8000/api/meets", data).then((res) => {
      if (res.status == 201) {
        toast.success("success add");
      }
    });
  }
  };

  // console.log(props.Candidat);
  const navigate = useNavigate();

  const [userid,setUserId] = useState("");
  //console.log(user);
  const handleClick = (id) => {
    axios.get("http://127.0.0.1:8000/candidatID/"+id).then((res)=>{
      if (res.status == 200){
        navigate("/candidat-Detail/" + res.data.user);
      }
    })
  
  };

  const [offres, setOffres] = useState([]);
  const getAllOffres = () => {
    if (Employer != ""){
      setLoader(true);
      axios
        .get("http://127.0.0.1:8000/review-Offerrecruiter/" + Employer)
        .then((res) => {
          setOffres(res.data);
          setLoader(false);
        });
    }

  };



  // console.log(IdCandidat);
  const Accept = (id) => {
    const data = {
      statut: 2,
    };
    axios
      .put("http://127.0.0.1:8000/api/demandes/" + id, data)
      .then((res) => {
        if (res.status === 200) {
          //toast.success("Success Accept ");
          window.location.reload(true);
        }
      })
      .catch(function (error) {
        console.log(error.toJSON());
      });
  };
  const Refuser = (id) => {
    const data = {
      statut: 0,
    };
    axios.put("http://127.0.0.1:8000/api/demandes/" + id, data).then((res) => {
      if (res.status === 200) {
        //toast.success("Success Accept ");
        window.location.reload(true);
      }
    });
  };
  const createMeet = () => {
    navigate("/meet-homePage");
    window.location.reload();
  };

  useEffect(() => {
    getAllOffres();
  }, [Employer]);

  return (
    <>
      <Header />

      <HeaderProfile IdEmployer={IdEmployer} />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="row">
               <div className="col-10">

               </div>
               <div className="col-2">
               <button
                type="button"
                className="btn btn-primary"
                onClick={() => createMeet()}
              >
                Create Meet
              </button>
               </div>
              </div>

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
                    {offres.map((offre) => (
                      <tr className="candidates-list" key={offre.id}>
                        <td className="title">
                          <div className="candidate-list-details">
                            <div className="candidate-list-info">
                              <div className="candidate-list-title">
                                <h5 className="mb-0">
                                  <a href="#">{offre.fullName}</a>
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
                        <td
                          className="candidate-list-favourite-time text-center"
                          style={{ width: "40%" }}
                        >
                          <span className="candidate-list-time order-1">
                            {offre.message}
                          </span>
                        </td>
                        <td>
                          {offre.statut === 1 ? (
                            <ul className="list-unstyled mb-0 d-flex justify-content-end">
                              <li>
                                <button
                                  type="button"
                                  className="btn btn-outline-success"
                                  style={{ padding: "8px" }}
                                  onClick={() => Accept(offre.id)}
                                >
                                  Accept
                                </button>
                              </li>
                              <li>
                                <button
                                  type="button"
                                  className="btn btn-outline-danger"
                                  style={{ padding: "8px" }}
                                  onClick={() => Refuser(offre.id)}
                                >
                                  Refuse
                                </button>
                              </li>
                              <li>
                                <button
                                  type="button"
                                  className="btn btn-outline-dark"
                                  style={{ padding: "8px" }}
                                  onClick={() => handleClick(offre.candidat)}
                                >
                                  Profile
                                </button>
                              </li>
                            </ul>
                          ) : offre.statut === 2 ? (
                            <ul className="list-unstyled mb-0 d-flex justify-content-end">
                              <li>
                                {" "}
                                <a
                                  href="login.html"
                                  data-bs-toggle="modal"
                                  className="btn btn-outline-dark"
                                  data-bs-target="#Meet"
                                  style={{ padding: "8px" }}
                                  onClick={() => getIdc(offre.candidat)}
                                >
                                  Send Meet
                                </a>
                              </li>
                            </ul>
                          ) : offre.statut === 0 ? (
                            <ul className="list-unstyled mb-0 d-flex justify-content-end">
                              <li>
                                {" "}
                                <span style={{ color: "red" }}>Refuser</span>
                              </li>
                            </ul>
                          ) : (
                            <div>Statut inconnu</div>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {loader ? <Loader /> : ""}
              
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>

      <div
        className="modal fade"
        id="Meet"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header p-4">

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <form>
              <div style={{ padding: "30px" }}>
                <div className="form-group col-md-12 mb-3">
                  <label className="form-label">URL Meet</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setUrlMeet(e.target.value)}
                  />
                </div>
                <div className="form-group col-md-12 mb-3">
                  <label className="form-label">Message</label>
                  <textarea
                    className="form-control"
                    rows="4"
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={() => sendurlMeet()}
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export { ManageCandidats };
