import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const Skills = (props) => {

  const [visibleItems, setVisibleItems] = useState(3);

  const loadMore = () => {
    setVisibleItems(visibleItems + 3);
  };

  const [InputCompétance, setInputCompétance] = useState([]);
  const Compétance = (valeur) => {
    setInputCompétance(valeur);
  };

  const idcandidat = localStorage.getItem("candidat_id");

  const [competenceName, setCompetenceName] = useState("");


  const ADDCompétance = () => {

    //alert(competenceName);
   const dataComptence = {
      competenceName: competenceName,
      candidat: "/api/candidats/" + props.idCandidat,
    }
    //console.log(competenceName);
    if (props.idCandidat !=""){
      axios
      .post("http://127.0.0.1:8000/api/competences", dataComptence)
      .then((res) => {
        if (res.status == 201) {
          toast.success("success !");
          setSkills((skill) => [...skill, res.data]);  
        }
      });
    }

  }



  const DeleteSkills = (id) =>{
    axios.delete("http://127.0.0.1:8000/api/competences/"+id).then((res) => {
      if (res.status == 204){
        toast.success("success Delete !");
        setSkills((skill) => skill.filter((edu) => edu.id != id));
      }
      });
  }
  const [skills,setSkills] = useState([]);
  const GetAllSkills = () =>{
   // const idc = localStorage.getItem("candidat_id");
    if (props.idCandidat != ""){
    axios.get("http://127.0.0.1:8000/skills/"+props.idCandidat).then((res) => {
  //    console.log(res.data);
      setSkills(res.data);
     });
    }
  }
  useEffect(() => {
    GetAllSkills();   
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
                    <h4 className="mb-0">Skills</h4>
                  </div>
                  <a
                
                    data-bs-toggle="modal"
                    className="btn btn-md ms-sm-auto btn-primary"
                    data-bs-target="#skillsmodal"
                  >
                    Add Education
                  </a>
                </div>
                <div className="collapse show" id="dateposted"></div>
                <div className="jobber-candidate-timeline mt-4">
                  <div className="jobber-timeline-icon">
                    <i className="fas fa-graduation-cap" />
                  </div>

                  {skills.slice(0, visibleItems).map(skill =>
             
                  <div key={skill.id} className="jobber-timeline-item mb-0">
                    <div className="jobber-timeline-cricle">
                      <i className="far fa-circle" />
                    </div>  
                    <div   className="jobber-timeline-info">
                      <div className="dashboard-timeline-info">
                        <div className="dashboard-timeline-edit">
                          <ul className="list-unstyled d-flex">
                            <li>
                              <a
                                className="text-end"
                                data-bs-toggle="collapse"
                                href="#dateposted-03"
                                role="button"
                                aria-expanded="false"
                                aria-controls="dateposted"
                              >
                                {" "}
                               
                              </a>
                            </li>
                            <li>
                              <a>
                                <i className="far fa-trash-alt text-danger" onClick={()=>DeleteSkills(skill.id)} />
                              </a>
                            </li>
                          </ul>
                        </div>

                        <h6 className="mb-2">{skill.competenceName}</h6>
                      </div>
              
                    </div>

                           
                  </div>
       )}

                                 
                  <center>
                  {visibleItems < skills.length && (
                    <button className="btn btn-outline btn-lg"  onClick={loadMore}>Load More</button>
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
        id="skillsmodal"
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
              <h4 className="mb-0 text-center">Skills</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <form>
                <div className="row">
                  <div className="form-group col-md-12">
                    <label htmlFor="inputEmail4" className="text-dark">
                      SKILLS
                    </label>
                    <input
                      type="email"
                      className="form-control shadow p-3 mb-5 bg-body-tertiary rounded"
                      id="inputEmail4"
                      defaultValue={InputCompétance}
                      onChange={(e) => setCompetenceName(e.target.value)}
                    />
                  </div>
                  <div className="form-group col-md-12 mb-0">
                    <a
                      className="btn btn-md btn-primary"
                  
                      onClick={() => ADDCompétance()}
                    >
                      Add
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Skills };
