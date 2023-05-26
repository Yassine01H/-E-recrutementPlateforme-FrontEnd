import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SkillsCandidat = (props) => {
  const [visibleItems, setVisibleItems] = useState(3);

  const loadMore = () => {
    setVisibleItems(visibleItems + 3);
  };

  const [skills, setSkills] = useState([]);
  const params = useParams()
  const GetAllSkills = () => {
    if (props.id != ""){
    axios.get("http://127.0.0.1:8000/skills/"+props.id).then((res) => {
      setSkills(res.data);
    });
  }
  };
  useEffect(() => {
    GetAllSkills();
  }, [props.id]);

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
                </div>
                <div className="collapse show" id="dateposted"></div>
                <div className="jobber-candidate-timeline mt-4">
                  <div className="jobber-timeline-icon">
                    <i className="fas fa-graduation-cap" />
                  </div>

                  {skills.slice(0, visibleItems).map((skill) => (
                    <div key={skill.id} className="jobber-timeline-item mb-0">
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
                                  data-bs-toggle="collapse"
                                  href="#dateposted-03"
                                  role="button"
                                  aria-expanded="false"
                                  aria-controls="dateposted"
                                >
                                  {" "}
                                </a>
                              </li>
                            </ul>
                          </div>

                          <h6 className="mb-2">{skill.competenceName}</h6>
                        </div>
                      </div>
                    </div>
                  ))}

                  <center>
                    {visibleItems < skills.length && (
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
    </>
  );
};
export { SkillsCandidat };
