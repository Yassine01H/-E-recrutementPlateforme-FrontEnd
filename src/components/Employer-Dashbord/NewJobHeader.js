import { Link } from "react-router-dom"

const NewJobHeader =()=>{
return (
    <>
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
            <ul className="nav nav-tabs nav-tabs-03 justify-content-center d-sm-flex d-block text-center" id="myTab" role="tablist">
              <li className="flex-fill">
              <Link className="nav-item active" to="/PostNewJob"  data-bs-toggle="tab"  aria-selected="false">
                
                  <div className="feature-info-icon mb-3">
                    <i className="flaticon-suitcase" />
                  </div>
                  <span>Job Detail</span>

                </Link>
              </li>

              <li className="flex-fill">
              <Link className="nav-item" to="/Post-Confirmation" aria-selected="false">
                
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
    </>
)
}
export {NewJobHeader}