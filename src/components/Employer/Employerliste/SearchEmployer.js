const SearchEmployer = ()=>{
    return (
        <>

<section className="header-inner header-inner-big bg-holder text-white" style={{backgroundImage: 'url(images/bg/banner-01.jpg)'}}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="job-search-field">
                <div className="job-search-item">
                  <form className="form row">
                    <div className="col-lg-5 col-md-4">
                      <div className="form-group left-icon mb-md-0 mb-3">
                        <input type="text" className="form-control" name="job_title" placeholder="What?" />
                        <i className="fas fa-search" /> </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                      <div className="form-group left-icon mb-md-0 mb-3">
                        <input type="text" className="form-control" name="job_title" placeholder="Where?" />
                        <i className="fas fa-search" /> </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-12">
                      <div className="form-group form-action mb-0">
                        <button type="submit" className="btn btn-primary mt-0"><i className="fas fa-search-location" /> Find Employer</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        
        </>
    )
}
export {SearchEmployer}