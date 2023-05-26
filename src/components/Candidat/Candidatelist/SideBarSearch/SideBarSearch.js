import { useState } from "react";

const SideBarSearch = (props) => {
  const [searchSidebar , setSearchSidebar] = useState({
    dateposted1 :false,
    dateposted2 :false,
    dateposted3 :false,
    dateposted4 :false,
    dateposted5 :false
  })

  function handelDatePosted1(e){
    const { value, checked } = e.target;
    setSearchSidebar({
      ...searchSidebar,
      dateposted1 : checked
  })
     props.checkboxes({
      nomCB : value,
      valCB : checked
     });
  }
  function handelDatePosted2(e){
    const { value, checked } = e.target;
    setSearchSidebar({
      ...searchSidebar,
      dateposted2 : checked
  })
     props.checkboxes({
      nomCB : value,
      valCB : checked
     });
  }
  function handelDatePosted3(e){
    const { value, checked } = e.target;
    setSearchSidebar({
      ...searchSidebar,
      dateposted3 : checked
  })
     props.checkboxes({
      nomCB : value,
      valCB : checked
     });
  }
  function handelDatePosted4(e){
    const { value, checked } = e.target;
    setSearchSidebar({
      ...searchSidebar,
      dateposted4 : checked
  })
     props.checkboxes({
      nomCB : value,
      valCB : checked
     });
  }
  function handelDatePosted5(e){
    const { value, checked } = e.target;
    setSearchSidebar({
      ...searchSidebar,
      dateposted5 : checked
  })
     props.checkboxes({
      nomCB : value,
      valCB : checked
     });
  }
  return (
    <>
        <div className="col-lg-3">
              <div className="sidebar">
                <div className="widget">
                  <div className="widget-title widget-collapse">
                    <h6>Date Posted</h6>
                    <a className="ms-auto" data-bs-toggle="collapse" href="#dateposted" role="button" aria-expanded="false" aria-controls="dateposted"> <i className="fas fa-chevron-down" /> </a>
                  </div>
                  <div className="collapse show" id="dateposted">
            <div className="widget-content">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="dateposted1"
                  value="dateposted1"
                  onChange={handelDatePosted1}
                  checked={searchSidebar.dateposted1}
                />
                <label className="form-check-label" htmlFor="dateposted1">
                  Last hour
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="dateposted2"
                  value="dateposted2"
                  onChange={handelDatePosted2}
                  checked={searchSidebar.dateposted2}
                />
                <label className="form-check-label" htmlFor="dateposted2">
                  Last 24 hour
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="dateposted3"
                  value="dateposted3"
                  onChange={handelDatePosted3}
                  checked={searchSidebar.dateposted3}
                />
                <label className="form-check-label" htmlFor="dateposted3">
                  Last 7 days
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="dateposted4"
                  value="dateposted4"
                  onChange={handelDatePosted4}
                  checked={searchSidebar.dateposted4}
                />
                <label className="form-check-label" htmlFor="dateposted4">
                  Last 14 days
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="dateposted5"
                  value="dateposted5"
                  onChange={handelDatePosted5}
                  checked={searchSidebar.dateposted5}
                />
                <label className="form-check-label" htmlFor="dateposted5">
                  Last 30 days
                </label>
              </div>
            </div>
          </div>
                </div>






                <hr />

              </div>
            </div>
    </>
  );
};
export { SideBarSearch };
