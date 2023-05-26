import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Education = (props) => {
 // console.log("education ::"+props.idCandidat);
  const [visibleItems, setVisibleItems] = useState(1);

  const loadMore = () => {
    setVisibleItems(visibleItems + 1);
  };

  const token = localStorage.getItem("token");
  //const navigate = useNavigate();
  const [SchoolName, setSchoolName] = useState([]);
  const [Diploma, setDiploma] = useState([]);
  const [Fieldofstudy, setFieldofstudy] = useState([]);
  const [StartDate, setStartDate] = useState([]);
  const [EndDate, setEndDate] = useState([]);
  const [Description, setDescription] = useState("");
  const [ActivitiesAndAssociations, setActivitiesAndAssociations] = useState("");

  const [OldSchoolName, setOldSchoolName] = useState("");
  const [OldDiploma, setOldDiploma] = useState("");
  const [OldFieldofstudy, setOldFieldofstudy] = useState("");
  const [OldStartDate, setOldStartDate] = useState("");
  const [OldEndDate, setOldEndDate] = useState("");
  const [OldDescription, setOldDescription] = useState("");
  const [OldActivitiesAndAssociations, setOldActivitiesAndAssociations] =
    useState("");



  const [id, setideuducation] = useState("");
  const getEducation = (id) => {
    setideuducation(id);

    axios.get("http://127.0.0.1:8000/api/trainings/"+ id).then((res) => {
      if (res.status == 200) {
        setOldSchoolName(res.data.school);
        setOldDiploma(res.data.diploma);
        setOldFieldofstudy(res.data.fieldOfStudy);
        setOldStartDate(res.data.startDate);
        setOldEndDate(res.data.endDate);
        setOldDescription(res.data.description);
        setOldActivitiesAndAssociations(res.data.description);
        //console.log(res.data);
        //alert(label);
      }
    });
  };

  const idcandidat = localStorage.getItem("candidat_id");
  const AddEducation = () => {
    const data = {
      school: SchoolName,
      diploma: Diploma,
      description: Description,
      candidat: "/api/candidats/" + idcandidat,
      fieldOfStudy: Fieldofstudy,
      activitiesAndAssociations: ActivitiesAndAssociations,
      startDate: StartDate,
      endDate: EndDate,
    };
    axios.post("http://127.0.0.1:8000/api/trainings", data).then((res) => {
      if (res.status == 201) {
        toast.success("success !");
        setEducations((educs) => [...educs, res.data]);
      }
    });
  };
  const Delete = (id) => {
    axios.delete("http://127.0.0.1:8000/api/trainings/" + id).then((res) => {
      if (res.status == 204) {
        toast.success("success !");
        setEducations((educs) => educs.filter((edu) => edu.id != id));
        //  setEducations((educs) => [...educs, res.data]);
      }
    });
  };

  const Update = () => {
    // alert(id);
    const newData = {
      school: OldSchoolName,
      diploma: OldDiploma,
      description: OldDescription,
      candidat: "/api/candidats/" + idcandidat,
      fieldOfStudy: OldFieldofstudy,
      activitiesAndAssociations: OldActivitiesAndAssociations,
      startDate: OldStartDate,
      endDate: OldEndDate,
    };
    axios
      .put("http://127.0.0.1:8000/api/trainings/" + id, newData)
      .then((res) => {
        if (res.status == 200) {
          const data = res.data;
          toast.success("success !");
          //console.log(res.data);
        //  window.location.reload(true);

          setEducations((educs) =>
            educs.map((edu) => {
              if (edu.id == id) return { id, ...data };
              return edu;
            })
          );
          // setEducations((educs) => educs.map((edu) => {if(edu.id == id) return res.data}));
          // setEducations((educs) => [...educs, res.data]);
        }
      });
  };
  const [educations, setEducations] = useState([]); 
  const getAllEducation = () => {
    if (props.idCandidat != ""){
    axios.get(`http://127.0.0.1:8000/trainings/${props.idCandidat}`)
      .then((res) => {
        setEducations(res.data);
      })
    }
  };
  useEffect(() => {
    getAllEducation();
  }, [props.idCandidat]);
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="user-dashboard-info-box" id="Education">
                <div className="dashboard-resume-title d-flex align-items-center">
                  <div className="section-title-02 mb-sm-0">
                    <h4 className="mb-0">Educations</h4>
                  </div>
                  <a
                    href="login.html"
                    data-bs-toggle="modal"
                    className="btn btn-md ms-sm-auto btn-primary"
                    data-bs-target="#exampleModalCenter"
                  >
                    Add Education
                  </a>
                </div>
                <div className="collapse show" id="dateposted"></div>
                <div className="jobber-candidate-timeline mt-4">
                  <div className="jobber-timeline-icon">
                    <i className="fas fa-graduation-cap" />
                  </div>
                  {educations.slice(0, visibleItems).map((educt) => (
                    //      {  if (educt.id == "10"){
                    //educt.candidat == "/api/candidats/"+idcandidat ?

                    <div key={educt.id} className="jobber-timeline-item mb-0">
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
                                  data-bs-target="#modifier"
                                  onClick={() => getEducation(educt.id)}
                                >
                                  {" "}
                                  <i className="fas fa-pencil-alt text-info me-2" />{" "}
                                </a>
                              </li>
                              <li>
                                <a onClick={() => Delete(educt.id)}>
                                  <i className="far fa-trash-alt text-danger" />
                                </a>
                              </li>
                            </ul>
                          </div>
                          <span className="jobber-timeline-time">
                          
                          </span>
                          <h6 className="mb-2">{educt.school}</h6>
                          <span>- {educt.diploma}</span>
                          <p className="mt-2">
                            {educt.field_of_study}
                            <br />
                            {educt.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                  <center>
                    {visibleItems < educations.length && (
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
        id="exampleModalCenter"
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
              <h4 className="mb-0 text-center">Add Education</h4>
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
                  <label className="text-dark">School Name</label>
                  <input
                    type="text"
                    className="form-control shadow p-3 mb-5 bg-body-tertiary rounded"
                    value={SchoolName}
                    onChange={(e) => setSchoolName(e.target.value)}
                    placeholder="Graphic Arts Institute"
                  />
                </div>

                <div className="form-group mb-3 col-md-6 select-border">
                  <label className="text-dark">Diploma</label>
                  <input
                    type="text"
                    className="form-control shadow p-3 mb-5 bg-body-tertiary rounded"
                    value={Diploma}
                    onChange={(e) => setDiploma(e.target.value)}
                    placeholder="Diploma in Graphics Design"
                  />
                </div>

                <div className="form-group mb-3 col-md-6">
                  <label className="text-dark">Field of study</label>
                  <input
                    type="text"
                    className="form-control shadow p-3 mb-5 bg-body-tertiary rounded"
                    value={Fieldofstudy}
                    onChange={(e) => setFieldofstudy(e.target.value)}
                    placeholder="Graphic Arts"
                  />
                </div>

                <div className="form-group mb-3 col-md-6 select-border">
                  <label className="text-dark">Start Date</label>
                  <input
                    type="month"
                    className="form-control shadow p-3 mb-5 bg-body-tertiary rounded"
                    value={StartDate}
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                </div>

                <div className="form-group mb-3 col-md-6">
                  <label className="text-dark">End Date</label>
                  <input
                    type="month"
                    className="form-control shadow p-3 mb-5 bg-body-tertiary rounded"
                    value={EndDate}
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                </div>

                <div className="form-group mb-3 col-md-12">
                  <label className="text-dark">
                    Activities And Associations
                  </label>
                  <input
                    type="text"
                    className="form-control shadow p-3 mb-5 bg-body-tertiary rounded"
                    placeholder="EX : club  d'échecs, basketball"
                    value={ActivitiesAndAssociations}
                    onChange={(e) =>
                      setActivitiesAndAssociations(e.target.value)
                    }
                  />
                </div>

                <div className="form-group mb-3 col-md-12">
                  <label className="text-dark">Description</label>
                  <textarea
                    className="form-control shadow p-3 mb-5 bg-body-tertiary rounded"
                    rows={4}
                    value={Description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <div className="form-group mb-3 col-md-12">
                  <a
                    className="btn btn-md btn-primary"
                 
                    style={{ width: "100%" }}
                    onClick={() => AddEducation()}
                  >
                    Add Education
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="modifier"
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
              <h4 className="mb-0 text-center">Edit Education</h4>
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
                  <label className="text-dark">School Name</label>
                  <input
                    type="text"
                    className="form-control shadow p-3 mb-5 bg-body-tertiary rounded"
                    defaultValue={OldSchoolName}
                    onChange={(e) => setOldSchoolName(e.target.value)}
                    placeholder="Graphic Arts Institute"
                  />
                </div>

                <div className="form-group mb-3 col-md-6 select-border">
                  <label className="text-dark">Diploma</label>
                  <input
                    type="text"
                    className="form-control shadow p-3 mb-5 bg-body-tertiary rounded"
                    defaultValue={OldDiploma}
                    onChange={(e) => setOldDiploma(e.target.value)}
                    placeholder="Diploma in Graphics Design"
                  />
                </div>

                <div className="form-group mb-3 col-md-6">
                  <label className="text-dark">Field of study</label>
                  <input
                    type="text"
                    className="form-control shadow p-3 mb-5 bg-body-tertiary rounded"
                    defaultValue={OldFieldofstudy}
                    onChange={(e) => setOldFieldofstudy(e.target.value)}
                    placeholder="Graphic Arts"
                  />
                </div>

                <div className="form-group mb-3 col-md-6 select-border">
                  <label className="text-dark">Start Date</label>
                  <input
                    type="month"
                    className="form-control shadow p-3 mb-5 bg-body-tertiary rounded"
                    defaultValue={OldStartDate}
                    onChange={(e) => setOldStartDate(e.target.value)}
                  />
                </div>

                <div className="form-group mb-3 col-md-6">
                  <label className="text-dark">End Date</label>
                  <input
                    type="month"
                    className="form-control shadow p-3 mb-5 bg-body-tertiary rounded"
                    defaultValue={OldEndDate}
                    onChange={(e) => setOldEndDate(e.target.value)}
                  />
                </div>

                <div className="form-group mb-3 col-md-12">
                  <label className="text-dark">
                    Activities And Associations
                  </label>
                  <input
                    type="text"
                    className="form-control shadow p-3 mb-5 bg-body-tertiary rounded"
                    placeholder="EX : club  d'échecs, basketball"
                    defaultValue={OldActivitiesAndAssociations}
                    onChange={(e) =>
                      setOldActivitiesAndAssociations(e.target.value)
                    }
                  />
                </div>

                <div className="form-group mb-3 col-md-12">
                  <label className="text-dark">Description</label>
                  <textarea
                    className="form-control shadow p-3 mb-5 bg-body-tertiary rounded"
                    rows={4}
                    defaultValue={OldDescription}
                    onChange={(e) => setOldDescription(e.target.value)}
                  />
                </div>
                <div className="form-group mb-3 col-md-12">
                  <a
                    className="btn btn-md btn-primary"
                
                    style={{ width: "100%" }}
                    onClick={() => Update()}
                  >
                    Update Education
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

export { Education };
