import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const LanguageCandidat = (props) => {
  const [visibleItems, setVisibleItems] = useState(3);

  const loadMore = () => {
    setVisibleItems(visibleItems + 5);
  };
  const [Languages, setLanguages] = useState([]);
  const params = useParams();
  const getLanguage = () => {
    if (props.id != ""){
    axios.get("http://127.0.0.1:8000/languages/"+props.id).then((res) => {
      //console.log(res.data);
      setLanguages(res.data);
    });
  }
  };
  useEffect(() => {
    getLanguage();
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
                    <h4 className="mb-0">Languages</h4>
                  </div>
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
                            <ul className="list-unstyled d-flex"></ul>
                          </div>

                          <h6 className="mb-2">{Language.languageName}</h6>
                          <span>- {Language.level}</span>
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
    </>
  );
};
export { LanguageCandidat };
