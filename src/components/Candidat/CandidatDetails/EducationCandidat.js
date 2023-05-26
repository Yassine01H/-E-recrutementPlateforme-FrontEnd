import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EducationCandidat = (props) => {
  const params = useParams();
  const [visibleItems, setVisibleItems] = useState(1);

  const loadMore = () => {
    setVisibleItems(visibleItems + 1);
  };

  const [educations, setEducations] = useState([]);
  const getAllEducation = () => {
   // console.log(params.id);
    if (props.id !=""){
      axios.get("http://127.0.0.1:8000/trainings/"+props.id).then((res) => {
        setEducations(res.data);
      });
    }
  };
  useEffect(() => {
    getAllEducation();
  }, [props.id]);
  return (
    <>
      <section>
        <div className="row">
          <div className="col-12">
            <div className="user-dashboard-info-box">
              <div className="dashboard-resume-title d-flex align-items-center">
                <div className="section-title-02 mb-sm-0">
                  <h4 className="mb-0">Education</h4>
                </div>
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
                          <ul className="list-unstyled d-flex"></ul>
                        </div>
                        <span className="jobber-timeline-time">
                          {educt.start_date.split("-")[0]}-
                          {educt.endDate.split("-")[0]}
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
      </section>
    </>
  );
};
export { EducationCandidat };
