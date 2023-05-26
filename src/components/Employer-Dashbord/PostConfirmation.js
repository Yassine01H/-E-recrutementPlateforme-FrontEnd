import { Link, useNavigate } from "react-router-dom";
import { Header } from "../Header";
import { NewJobHeader } from "./NewJobHeader";
import { Footer } from "../Footer";

const PostConfirmation = () => {
  const navigate = useNavigate("");
  const ManageJobs=()=>{
    navigate("/Manage-Jobs")
  }
  const ViewJob=()=>{
    alert("test");
  }
  return (
    <>
      <Header />

      <section className="space-ptb" style={{ background: "#eeeeee" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="section-title text-center">
                <h2 className="text-primary">Post a New Job</h2>
              </div>
            </div>
            <div className="col-md-8">
              <div className=" justify-content-center">
                <ul
                  className="nav nav-tabs nav-tabs-03 justify-content-center d-sm-flex d-block text-center"
                  id="myTab"
                  role="tablist"
                >
                  <li className="flex-fill">
                    <Link
                      className="nav-item"
                      data-bs-toggle="tab"
                      aria-selected="false"
                    >
                      <div className="feature-info-icon mb-3">
                        <i className="flaticon-suitcase" />
                      </div>
                      <span>Job Detail</span>
                    </Link>
                  </li>

                  <li className="flex-fill">
                    <Link className="nav-item active" aria-selected="false">
                      <div className="feature-info-icon mb-3">
                        <i className="flaticon-tick" />
                      </div>
                      <span>Confirmation</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        className="tab-pane fade show"
        role="tabpanel"
        aria-labelledby="Confirm-tab"
      >
        <section className="space-ptb">
          <div className="container">
            <div className="row text-center">
              <div className="col-12 mb-4">
                <svg
                  className="text-primary"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width={200}
                  height={200}
                  viewBox="0 0 60 60"
                  version="1.1"
                >
                  {/* Generator: Sketch 51.3 (57544) - http://www.bohemiancoding.com/sketch */}
                  <title>036 - Device Cover</title>
                  <desc>Created with Sketch.</desc>
                  <defs />
                  <g
                    id="Page-1"
                    stroke="none"
                    strokeWidth={1}
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g fill="#ff8a00" fillRule="nonzero">
                      <path d="M36.608,26.522 L44.42,32.083 C44.7671643,32.330178 45.2328357,32.330178 45.58,32.083 L53.392,26.523 C55.0192795,25.3702451 55.9904167,23.5031892 56,21.509 L56,9.677 C56.000591,9.27883898 55.7649212,8.91826415 55.4,8.759 L45.4,4.439 C45.1472508,4.33000068 44.8607492,4.33000068 44.608,4.439 L34.608,8.759 C34.2430788,8.91826415 34.007409,9.27883898 34.008,9.677 L34.008,21.509 C34.0158969,23.5014219 34.9839074,25.3678205 36.608,26.522 Z M36,10.334 L45,6.446 L54,10.334 L54,21.509 C53.9910962,22.8566812 53.3323369,24.117224 52.231,24.894 L45,30.042 L37.769,24.894 C36.6675346,24.1173365 36.0087381,22.8567225 36,21.509 L36,10.334 Z" />
                      <path d="M42.4,23.8 C42.8320438,24.1242308 43.4434866,24.0467489 43.781,23.625 L51.781,13.625 C52.1217114,13.1934254 52.0500699,12.5677379 51.6206245,12.2243466 C51.1911792,11.8809554 50.5650579,11.9487006 50.219,12.376 L42.819,21.619 L39.6,19.2 C39.3141875,18.9856406 38.9357266,18.9400436 38.6071797,19.0803848 C38.2786328,19.2207259 38.0499141,19.5256842 38.0071797,19.8803848 C37.9644453,20.2350853 38.1141875,20.5856406 38.4,20.8 L42.4,23.8 Z" />
                      <path d="M5,60 L55,60 C57.7600532,59.9966939 59.9966939,57.7600532 60,55 L60,51 C60,50.4477153 59.5522847,50 59,50 L57,50 L57,28.669 C58.9092563,26.7741494 59.98827,24.1989035 60,21.509 L60,7.047 C60.000591,6.64883898 59.7649212,6.28826415 59.4,6.129 L45.4,0.082 C45.1474495,-0.0279576698 44.8605505,-0.0279576698 44.608,0.082 L30.608,6.129 C30.2430788,6.28826415 30.007409,6.64883898 30.008,7.047 L30.008,12 L6,12 C4.34314575,12 3,13.3431458 3,15 L3,50 L1,50 C0.44771525,50 6.76353751e-17,50.4477153 0,51 L0,55 C0.00330611633,57.7600532 2.23994685,59.9966939 5,60 Z M40,50 L9,50 L9,18 L30,18 L30,21.509 C30.0104682,24.797038 31.6077945,27.8777289 34.289,29.781 L43.965,36.669 C44.5844619,37.1102315 45.4155381,37.1102315 46.035,36.669 L51,33.135 L51,50 L40,50 Z M37.383,54 L31,54 L31,52 L38.382,52 L37.382,54 L37.383,54 Z M22.618,54 L21.618,52 L29,52 L29,54 L22.618,54 Z M53,31.711 L55,30.287 L55,50 L53,50 L53,31.711 Z M32,7.705 L45,2.089 L58,7.705 L58,21.505 C57.9926625,23.8066487 57.0139816,25.9982404 55.305,27.54 L55.29,27.552 C55.0554562,27.7660987 54.8087098,27.9664341 54.551,28.152 L45,34.951 L35.449,28.151 C33.294533,26.6235813 32.010049,24.1499534 32,21.509 L32,7.705 Z M5,15 C5,14.4477153 5.44771525,14 6,14 L30,14 L30,16 L9,16 C7.8954305,16 7,16.8954305 7,18 L7,50 L5,50 L5,15 Z M4,52 L19.382,52 L20.829,54.894 C21.165329,55.5739318 21.8594388,56.0030461 22.618,56 L37.382,56 C38.1391514,56.0039364 38.8328012,55.5774329 39.171,54.9 L40.618,52 L58,52 L58,54 L51,54 C50.4477153,54 50,54.4477153 50,55 C50,55.5522847 50.4477153,56 51,56 L57.816,56 C57.3937454,57.1943509 56.2667854,57.9947486 55,58 L5,58 C3.73321457,57.9947486 2.60625455,57.1943509 2.184,56 L9,56 C9.55228475,56 10,55.5522847 10,55 C10,54.4477153 9.55228475,54 9,54 L2,54 L2,52 L4,52 Z" />
                      <path d="M13,56 L15,56 C15.5522847,56 16,55.5522847 16,55 C16,54.4477153 15.5522847,54 15,54 L13,54 C12.4477153,54 12,54.4477153 12,55 C12,55.5522847 12.4477153,56 13,56 Z" />
                      <path d="M45,56 L47,56 C47.5522847,56 48,55.5522847 48,55 C48,54.4477153 47.5522847,54 47,54 L45,54 C44.4477153,54 44,54.4477153 44,55 C44,55.5522847 44.4477153,56 45,56 Z" />
                      <path d="M12.707,24.707 L15.707,21.707 C16.0859722,21.3146211 16.0805524,20.6909152 15.6948186,20.3051814 C15.3090848,19.9194476 14.6853789,19.9140278 14.293,20.293 L11.293,23.293 C11.0330434,23.5440745 10.9287874,23.9158779 11.0203028,24.2655073 C11.1118183,24.6151368 11.3848632,24.8881817 11.7344927,24.9796972 C12.0841221,25.0712126 12.4559255,24.9669566 12.707,24.707 Z" />
                      <path d="M13.707,30.707 L21.707,22.707 C22.0859722,22.3146211 22.0805524,21.6909152 21.6948186,21.3051814 C21.3090848,20.9194476 20.6853789,20.9140278 20.293,21.293 L12.293,29.293 C12.0330434,29.5440745 11.9287874,29.9158779 12.0203028,30.2655073 C12.1118183,30.6151368 12.3848632,30.8881817 12.7344927,30.9796972 C13.0841221,31.0712126 13.4559255,30.9669566 13.707,30.707 Z" />
                      <path d="M26.293,22.293 L13.293,35.293 C13.0330434,35.5440745 12.9287874,35.9158779 13.0203028,36.2655073 C13.1118183,36.6151368 13.3848632,36.8881817 13.7344927,36.9796972 C14.0841221,37.0712126 14.4559255,36.9669566 14.707,36.707 L27.707,23.707 C28.0859722,23.3146211 28.0805524,22.6909152 27.6948186,22.3051814 C27.3090848,21.9194476 26.6853789,21.9140278 26.293,22.293 Z" />
                    </g>
                  </g>
                </svg>
              </div>
              <div className="col-sm-12">
                <h1 className="mb-4">Thank You For Submitting</h1>
                <h6 className="mb-2 text-light">
                  Thank you for submitting, your job has been published. if you
                  need help please contact us via{" "}
                </h6>
                <h6 className="mb-0 text-light">Email support@jobber.com</h6>
              </div>
              <div className="col-12 text-center mt-4 mt-sm-5">
                <a className="btn btn-outline-primary mb-3 mb-sm-0" onClick={()=>ManageJobs()}>
                  Manage Jobs
                </a>
            
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="feature-info-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-lg-0 mb-4">
              <div className="feature-info feature-info-02 p-4 p-lg-5 bg-primary">
                <div className="feature-info-icon mb-3 mb-sm-0 text-dark">
                  <i className="flaticon-team" />
                </div>
                <div className="feature-info-content text-white ps-sm-4 ps-0">
                  <p>Jobseeker</p>
                  <h5 className="text-white">Looking For Job?</h5>
                </div>
                <a className="ms-auto align-self-center" href="#">
                  Apply now
                  <i className="fas fa-long-arrow-alt-right" />{" "}
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="feature-info feature-info-02 p-4 p-lg-5 bg-dark">
                <div className="feature-info-icon mb-3 mb-sm-0 text-primary">
                  <i className="flaticon-job-3" />
                </div>
                <div className="feature-info-content text-white ps-sm-4 ps-0">
                  <p>Recruiter</p>
                  <h5 className="text-white">Are You Recruiting?</h5>
                </div>
                <a className="ms-auto align-self-center" href="#">
                  Post a job
                  <i className="fas fa-long-arrow-alt-right" />{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};
export { PostConfirmation };
