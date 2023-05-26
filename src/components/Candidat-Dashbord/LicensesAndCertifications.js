import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { upload } from "@testing-library/user-event/dist/upload";
const LicensesAndCertifications = (props) => {
  const [visibleItems, setVisibleItems] = useState(1);
  const idcandidat = localStorage.getItem("candidat_id");
  const loadMore = () => {
    setVisibleItems(visibleItems + 5);
  };

  const [name, setName] = useState("");
  const [issuingBody, setIssuingBody] = useState("");
  const [dateofIssue, setDateofIssue] = useState("");
  const [degreeId, setDegreeId] = useState("");
  const [degreeURL, setDegreeURL] = useState("");

  const [LicenseAndCertification, setLicenseAndCertification] = useState([]);

  const AddLicenseAndCertification = () => {

    const data = {
      name: name,
      iddegree: degreeId,
      issuingBody: issuingBody,
      dateOfIssue: dateofIssue,
      degreeUrl: degreeURL,
      candidat: "/api/candidats/" + idcandidat,
    };
    axios
      .post("http://127.0.0.1:8000/api/licenses_and_certifications", data)
      .then((res) => {
        if (res.status == 201) {
          toast.success("success !");
          setLicenseAndCertification((LAD) => [...LAD, res.data]);
        }
      });
  };

  const Delete = (id) => {
    axios
      .delete("http://127.0.0.1:8000/api/licenses_and_certifications/" + id)
      .then((res) => {
        if (res.status == 204) {
          toast.success("success !");
          setLicenseAndCertification((LAD) =>
            LAD.filter((edu) => edu.id != id)
          );
        }
      });
  };

  const [newname, setNewName] = useState("");
  const [newissuingBody, setNewIssuingBody] = useState("");
  const [newdateofIssue, setNewDateofIssue] = useState("");
  const [newdegreeId, setNewDegreeId] = useState("");
  const [id, setIdLC] = useState("");
  const [newdegreeURL, setNewDegreeURL] = useState("");

  const getLicenseAndCertification = (id) => {
    axios
      .get("http://127.0.0.1:8000/api/licenses_and_certifications/" + id)
      .then((res) => {
        setIdLC(res.data.id);
        setNewName(res.data.name);
        setNewIssuingBody(res.data.issuingBody);
        setNewDateofIssue(res.data.dateOfIssue);
        setNewDegreeId(res.data.iddegree);
        setNewDegreeURL(res.data.degreeUrl);
      });
  };

  


  const Update = () => {
    const NewData = {
      name: newname,
      iddegree: newdegreeId,
      issuingBody: newissuingBody,
      dateOfIssue: newdateofIssue,
      degreeUrl: newdegreeURL,
      candidat: "/api/candidats/" + idcandidat,
    };
    axios
      .put(
        "http://127.0.0.1:8000/api/licenses_and_certifications/" + id,
        NewData
      )
      .then((res) => {
        if (res.status == 200) {
          toast.success("success Update!");
         setLicenseAndCertification((LAD) => LAD.map((edu) => {if(edu.id == id ) return {id, ...res.data};
         return edu;
        }));
        }
      });
  };
  const getAllLicenseAndCertification = () => {
    if (props.idCandidat !=""){
      axios
      .get(`http://127.0.0.1:8000/license-And-Certification/${props.idCandidat}`)
      .then((res) => {
        //console.log(res.data);
        setLicenseAndCertification(res.data);
      });
    }

  };

  useEffect(() => {
    getAllLicenseAndCertification();
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
                    <h4 className="mb-0">Licenses And Certifications</h4>
                  </div>
                  <a
                    data-bs-toggle="modal"
                    className="btn btn-md ms-sm-auto btn-primary"
                    data-bs-target="#LicensesAndCertifications"
                  >
                    Add License And Certification
                  </a>
                </div>
                <div className="collapse show" id="dateposted"></div>
                <div className="jobber-candidate-timeline mt-4">
                  <div className="jobber-timeline-icon">
                    <i className="fas fa-graduation-cap" />
                  </div>

                  {LicenseAndCertification.slice(0, visibleItems).map((LAD) => (
                    <div key={LAD.id} className="jobber-timeline-item mb-0">
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
                                  data-bs-toggle="modal"
                                  href="#EditLicensesAndCertifications"
                                  role="button"
                                  aria-expanded="false"
                                  aria-controls="dateposted"
                                >
                                  {" "}
                                  <i
                                    className="fas fa-pencil-alt text-info me-2"
                                    onClick={() =>
                                      getLicenseAndCertification(LAD.id)
                                    }
                                  />{" "}
                                </a>
                              </li>
                              <li>
                                <a onClick={() => Delete(LAD.id)}>
                                  <i className="far fa-trash-alt text-danger" />
                                </a>
                              </li>
                            </ul>
                          </div>
                          <span className="jobber-timeline-time">
                            {/*LAD.date_of_issue.date.split(" ")[0]*/}
                          </span>
                          <h6 className="mb-2">{LAD.name}</h6>
                          <span>- {LAD.issuing_body}</span>
                          <p className="mt-2">ID Diplome :{LAD.iddegree}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                    

                          
                  <center>
                  {visibleItems < LicenseAndCertification.length && (
                    <button className="btn btn-outline btn-lg" onClick={loadMore}>Load More</button>
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
        id="LicensesAndCertifications"
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
              <h4 className="mb-0 text-center">Licenses And Certifications</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <form className="row collapse show" id="dateposted-04">
                <div className="form-group mb-3 col-md-12">
                  <label className="text-dark">Name</label>
                  <input
                    type="text"
                    className="form-control shadow p-3 mb-5 bg-body-tertiary rounded"
                    placeholder="E.g Certified Network Associate Security  (CCNA) from  microsoft"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                </div>

                <div className="form-group mb-3 col-md-12">
                  <label className="text-dark">Issuing body</label>
                  <input
                    type="text"
                    className="form-control shadow p-3 mb-5 bg-body-tertiary rounded"
                    placeholder="E.g Microsoft"
                    onChange={(e) => setIssuingBody(e.target.value)}
                    value={issuingBody}
                  />
                </div>

                <div className="form-group mb-3 col-md-6 select-border">
                  <label className="text-dark">Date of issue</label>
                  <input
                    type="date"
                    className="form-control shadow p-3 mb-5 bg-body-tertiary rounded"
                    onChange={(e) => setDateofIssue(e.target.value)}
                    value={dateofIssue}
                  />
                </div>

                <div className="form-group mb-3 col-md-6">
                  <label className="text-dark">Degree ID</label>
                  <input
                    type="number"
                    className="form-control shadow p-3 mb-5 bg-body-tertiary rounded"
                    onChange={(e) => setDegreeId(e.target.value)}
                    value={degreeId}
                  />
                </div>

                <div className="form-group mb-3 col-md-12">
                  <label className="text-dark">Degree URL</label>
                  <input
                    type="text"
                    className="form-control shadow p-3 mb-5 bg-body-tertiary rounded"
                    onChange={(e) => setDegreeURL(e.target.value)}
                    value={degreeURL}
                  />
                </div>

                <div className="form-group col-md-12 mb-0">
                  <a
                    className="btn btn-md btn-primary"
               
                    onClick={() => AddLicenseAndCertification()}
                    style={{ width: "100%" }}
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
        id="EditLicensesAndCertifications"
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
              <h4 className="mb-0 text-center">Licenses And Certifications</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <form className="row collapse show" id="dateposted-04">
                <div className="form-group mb-3 col-md-12">
                  <label className="text-dark">Name</label>
                  <input
                    type="text"
                    className="form-control shadow p-3 mb-5 bg-body-tertiary rounded"
                    placeholder="E.g Certified Network Associate Security  (CCNA) from  microsoft"
                    onChange={(e) => setNewName(e.target.value)}
                    value={newname}
                  />
                </div>

                <div className="form-group mb-3 col-md-12">
                  <label className="text-dark">Issuing body</label>
                  <input
                    type="text"
                    className="form-control shadow p-3 mb-5 bg-body-tertiary rounded"
                    placeholder="E.g Microsoft"
                    onChange={(e) => setNewIssuingBody(e.target.value)}
                    value={newissuingBody}
                  />
                </div>

                <div className="form-group mb-3 col-md-6 select-border">
                  <label className="text-dark">Date of issue</label>
                  <input
                    type="month"
                    className="form-control shadow p-3 mb-5 bg-body-tertiary rounded"
                    onChange={(e) => setNewDateofIssue(e.target.value)}
                    value={newdateofIssue}
                  />
                </div>

                <div className="form-group mb-3 col-md-6">
                  <label className="text-dark">Degree ID</label>
                  <input
                    type="number"
                    className="form-control shadow p-3 mb-5 bg-body-tertiary rounded"
                    onChange={(e) => setNewDegreeId(e.target.value)}
                    value={newdegreeId}
                  />
                </div>

                <div className="form-group mb-3 col-md-12">
                  <label className="text-dark">Degree URL</label>
                  <input
                    type="text"
                    className="form-control shadow p-3 mb-5 bg-body-tertiary rounded"
                    onChange={(e) => setNewDegreeURL(e.target.value)}
                    value={newdegreeURL}
                  />
                </div>

                <div className="form-group col-md-12 mb-0">
                  <a
                    className="btn btn-md btn-primary"
                    
                    onClick={() => Update()}
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
    </>
  );
};

export { LicensesAndCertifications };
