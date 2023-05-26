import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const LicenseAndCertificationCandidat = (props) => {
  const [visibleItems, setVisibleItems] = useState(1);

  const loadMore = () => {
    setVisibleItems(visibleItems + 5);
  };
  const [LicenseAndCertification, setLicenseAndCertification] = useState([]);
  const params = useParams();
  const getAllLicenseAndCertification = () => {
    if (props.id != ""){
    axios
      .get("http://127.0.0.1:8000/license-And-Certification/"+props.id)
      .then((res) => {
        setLicenseAndCertification(res.data);
      });
    }
  };
  useEffect(() => {
    getAllLicenseAndCertification();
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
                    <h4 className="mb-0">Licenses And Certifications</h4>
                  </div>
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
                            <ul className="list-unstyled d-flex"></ul>
                          </div>
                          <span className="jobber-timeline-time">
                        
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
export { LicenseAndCertificationCandidat };
