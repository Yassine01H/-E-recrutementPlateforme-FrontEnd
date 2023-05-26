import axios from "axios";
import jwt_decode from "jwt-decode";
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
const Language = (props) => {
  const [visibleItems, setVisibleItems] = useState(3);

  const loadMore = () => {
    setVisibleItems(visibleItems + 5);
  };

  const [selected, setSelected] = useState("");
  const [LanguageName, setLanguageName] = useState("");

  const Delete = (id) => {
    axios.delete("http://127.0.0.1:8000/api/languages/" + id).then((res) => {
      if (res.status == 204) {
        toast.success("delete !");
        setLanguages((Language) => Language.filter((edu) => edu.id != id));
      }
    });
  };
  const idcandidat = localStorage.getItem('candidat_id')
  const Add = () => {
    const datalanguage = {
      languageName: LanguageName,
      level: selected,
      candidat: "/api/candidats/" + idcandidat,
    };
    axios
      .post("http://127.0.0.1:8000/api/languages", datalanguage)
      .then((res) => {
        if (res.status == 201) {
          toast.success("success !");
          setLanguages((Language) => [...Language, res.data]);
        }
      });
  };



  const [newlanguageName, setNewlanguageName] = useState("");
  const [newlevel, setNewlevel] = useState("");
  const [id, setID] = useState("");
  const getLanguageid = (id) => {
    axios.get("http://127.0.0.1:8000/api/languages/" + id).then((res) => {
      setNewlanguageName(res.data.languageName);
      setNewlevel(res.data.level);
      setID(res.data.id);
    });
    //alert(id);
  };
 
  const Update = () => {
    const data = {
      languageName: newlanguageName,
      level: newlanguageName,
      candidat: "/api/candidats/" + idcandidat,
    };
    axios.put("http://127.0.0.1:8000/api/languages/" + id, data).then((res) => {
      if (res.status == 200) {
        const data = res.data;
        toast.success("success !");
        //console.log(res.data);
         setLanguages((Language) => Language.map((edu) => {if(edu.id == id ) return {id, ...data};
         return edu;
        }));
        // setEducations((educs) => educs.map((edu) => {if(edu.id == id) return res.data}));
        // setEducations((educs) => [...educs, res.data]);
      }
    });
  };

  const [Languages, setLanguages] = useState([]);
  const getLanguage = () => {
   // const idc =  localStorage.getItem('candidat_id');
    if (props.idCandidat != ""){
      axios.get("http://127.0.0.1:8000/languages/"+props.idCandidat).then((res) => {
        // console.log(res.data);
         setLanguages(res.data);
       });
    }
  };
  useEffect(() => {
    getLanguage();
  }, [props.idCandidat]);
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="user-dashboard-info-box">
                <div className="dashboard-resume-title d-flex align-items-center">
                  <div className="section-title-02 mb-sm-0">
                    <h4 className="mb-0">Languages</h4>
                  </div>
                  <a
           
                    data-bs-toggle="modal"
                    className="btn btn-md ms-sm-auto btn-primary"
                    data-bs-target="#languagesAdd"
                  >
                    Add Language
                  </a>
                </div>
                <div className="collapse show" id="dateposted"></div>
                <div className="jobber-candidate-timeline mt-4">
                  <div className="jobber-timeline-icon">
                    <i className="fas fa-graduation-cap" />
                  </div>

                  {Languages.slice(0, visibleItems).map((Language) => (
                    <div
                      key={Language.id}
                      className="jobber-timeline-item mb-0"
                    >
                      <div className="jobber-timeline-cricle">
                        <i className="far fa-circle" />
                      </div>
                      <div className="jobber-timeline-info">
                        <div className="dashboard-timeline-info">
                          <div className="dashboard-timeline-edit">
                            <ul className="list-unstyled d-flex">
                              <li>
                                <a
                                  className="text-end"
                                  href="#Editlanguagesupdate"
                                  role="button"
                                  aria-expanded="false"
                                  aria-controls="dateposted"
                                  data-bs-toggle="modal"
                                >
                                  {" "}
                                  <i
                                    className="fas fa-pencil-alt text-info me-2"
                                    onClick={() => getLanguageid(Language.id)}
                                  />{" "}
                                </a>
                              </li>
                              <li>
                                <a >
                                  <i
                                    className="far fa-trash-alt text-danger"
                                    onClick={() => Delete(Language.id)}
                                  />
                                </a>
                              </li>
                            </ul>
                          </div>

                          <h6 className="mb-2">{Language.languageName}</h6>
                          <span>- {Language.level}</span>
                        </div>
                        <div className="collapse" id="languagesupdate">
                          <div
                            className="p-3"
                            style={{ background: "#eeeeee" }}
                          >
                            <form
                              className="row collapse show"
                              id="dateposted-04"
                            >
                              <div className="form-group mb-3 col-md-6">
                                <label className="text-dark">
                                  Language Name
                                </label>
                                <input
                                  type="text"
                                  className="form-control shadow p-3 mb-5 bg-body-tertiary rounded"
                                  placeholder="English"
                                />
                              </div>
                              <div
                                className="form-group mb-3 col-md-6"
                                style={{ marginBottom: "50px" }}
                              >
                                <label className="text-dark">Niveau</label>
                                <select className="form-control shadow p-3 mb-5 bg-body-tertiary rounded">
                                  <option value="" selected="selected">
                                    Veuillez sélectionner
                                  </option>
                                  <option value="Compétence_professionnelle_limitée">
                                    Compétence professionnelle limitée
                                  </option>
                                  <option value="Compétence_professionnelle_limitée">
                                    Compétence professionnelle limitée
                                  </option>
                                  <option value="Compétence_professionnelle">
                                    Compétence professionnelle
                                  </option>
                                  <option value="Capacité_professionnelle_complète">
                                    Capacité professionnelle complète
                                  </option>
                                </select>
                              </div>

                              <div className="form-group col-md-12 mb-0">
                                <a
                                  className="btn btn-md btn-primary"
                                 
                                  style={{ width: "100%" }}
                                >
                                  Update
                                </a>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  <center>
                    {visibleItems < Languages.length && (
                      <button
                        className="btn btn-outline btn-lg"
                        onClick={loadMore}
                      >
                        Load More
                      </button>
                    )}
                  </center>
                </div>
              </div>

              {/*=================================
        Work & Experience */}
            </div>
          </div>
        </div>
      </section>

      <div
        className="modal fade"
        id="languagesAdd"
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
              <h4 className="mb-0 text-center">Languages</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <form className="row collapse show" id="dateposted-04">
                <div className="form-group mb-3 col-md-6">
                  <label className="text-dark">Language Name</label>
                  <input
                    type="text"
                    className="form-control shadow p-3 mb-5 bg-body-tertiary rounded"
                    placeholder="English"
                    
                    onChange={(e) => setLanguageName(e.target.value)}
                  />
                </div>
                <div
                  className="form-group mb-3 col-md-6"
                  style={{ marginBottom: "50px" }}
                >
                  <label className="text-dark">Niveau</label>
                  <select
                    className="form-control shadow p-3 mb-5 bg-body-tertiary rounded"
                    value={selected}
                    onChange={(e) => setSelected(e.target.value)}
                  >
                    <option value="" selected="selected">
                      Veuillez sélectionner
                    </option>
                    <option value="Notions">Notions</option>
                    <option value="Compétence_professionnelle_limitée">
                      Compétence professionnelle limitée
                    </option>
                    <option value="Compétence_professionnelle">
                      Compétence professionnelle
                    </option>
                    <option value="Capacité_professionnelle_complète">
                      Capacité professionnelle complète
                    </option>
                  </select>
                </div>

                <div className="form-group col-md-12 mb-0">
                  <a
                    className="btn btn-md btn-primary"
             
                    style={{ width: "100%" }}
                    onClick={() => Add()}
                  >
                    Add
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="Editlanguagesupdate"
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
              <h4 className="mb-0 text-center">Languages</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <form className="row collapse show" id="dateposted-04">
                <div className="form-group mb-3 col-md-6">
                  <label className="text-dark">Language Name</label>

                  <input
                    type="text"
                    className="form-control shadow p-3 mb-5 bg-body-tertiary rounded"
                    placeholder="English"
                    defaultValue={newlanguageName}
                    onChange={(e) => setLanguageName(e.target.value)}
                  />
                </div>
                <div
                  className="form-group mb-3 col-md-6"
                  style={{ marginBottom: "50px" }}
                >
                  <label className="text-dark">Niveau</label>
                  <select
                    className="form-control shadow p-3 mb-5 bg-body-tertiary rounded"
                    defaultValue={newlevel}
                    onChange={(e) => setSelected(e.target.value)}
                  >
                    <option value="" selected="selected">
                      Veuillez sélectionner
                    </option>
                    <option value="Notions">Notions</option>
                    <option value="Compétence_professionnelle_limitée">
                      Compétence professionnelle limitée
                    </option>
                    <option value="Compétence_professionnelle">
                      Compétence professionnelle
                    </option>
                    <option value="Capacité_professionnelle_complète">
                      Capacité professionnelle complète
                    </option>
                  </select>
                </div>

                <div className="form-group col-md-12 mb-0">
                  <a
                    className="btn btn-md btn-primary"
           
                    style={{ width: "100%" }}
                    onClick={() => Update()}
                  >
                    Update
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Language };
