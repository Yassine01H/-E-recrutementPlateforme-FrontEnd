import { useState } from "react";


const SidebarSearch = (props) => {


  const [searchSidebar , setSearchSidebar] = useState({
    fullTime : false,
    partTime : false,
    freelancer : false,
    temporary: false,
    oneLessExperience : false,
    twoExperience : false,
    threeExperience : false,
    fourExperience : false,
    fiveExperience : false,
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

  
  function handelExperience1(e){
    const { value, checked } = e.target;
    setSearchSidebar({
      ...searchSidebar,
      oneLessExperience : checked
  })
     props.checkboxes({
      nomCB : value,
      valCB : checked
     });
  }
  function handelExperience2(e){
    const { value, checked } = e.target;
    setSearchSidebar({
      ...searchSidebar,
      twoExperience : checked
  })
     props.checkboxes({
      nomCB : value,
      valCB : checked
     });
  }
  function handelExperience3(e){
    const { value, checked } = e.target;
    setSearchSidebar({
      ...searchSidebar,
      threeExperience : checked
  })
     props.checkboxes({
      nomCB : value,
      valCB : checked
     });
  }
  function handelExperience4(e){
    const { value, checked } = e.target;
    setSearchSidebar({
      ...searchSidebar,
      fourExperience : checked
  })
     props.checkboxes({
      nomCB : value,
      valCB : checked
     });
  }

  function handelExperience5(e){
    const { value, checked } = e.target;
    setSearchSidebar({
      ...searchSidebar,
      fiveExperience : checked
  })
     props.checkboxes({
      nomCB : value,
      valCB : checked
     });
  }



  function handelFullTime(e){
    const { value, checked } = e.target;
    setSearchSidebar({
      ...searchSidebar,
      fullTime : checked
  })
     props.checkboxes({
      nomCB : value,
      valCB : checked
     });
  }

  function handelPartTime(e){
    const { value, checked } = e.target;
    setSearchSidebar({
      ...searchSidebar,
      partTime : checked
  })
    props.checkboxes({
     nomCB : value,
     valCB : checked
    });
 }

 function handelFreelancer(e){
  const { value, checked } = e.target;
  setSearchSidebar({
    ...searchSidebar,
    freelancer : checked
})
  props.checkboxes({
   nomCB : value,
   valCB : checked
  });
}

function handelTemporary(e){
  const { value, checked } = e.target;
  setSearchSidebar({
    ...searchSidebar,
    temporary : checked
})
  props.checkboxes({
   nomCB : value,
   valCB : checked
  });
}


  //console.log(searchSidebar);
 

  return (
    <>
      <div className="sidebar">
        <div className="widget">
          <div className="widget-title widget-collapse">
            <h6>Date Posted</h6>
            <a
              className="ms-auto"
              data-bs-toggle="collapse"
              href="#dateposted"
              role="button"
              aria-expanded="false"
              aria-controls="dateposted"
            >
              <i className="fas fa-chevron-down" />
            </a>
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

        <div className="widget">
          <div className="widget-title widget-collapse">
            <h6>Job Type</h6>
            <a
              className="ms-auto"
              data-bs-toggle="collapse"
              href="#jobtype"
              role="button"
              aria-expanded="false"
              aria-controls="jobtype"
            >
              <i className="fas fa-chevron-down" />
            </a>
          </div>
          <div className="collapse show" id="jobtype">
            <div className="widget-content">

              <div className="form-check fulltime-job">
                <input 
                  type="checkbox" className="form-check-input" id="fullTime" 
                  value="fullTime" onChange={handelFullTime} checked={searchSidebar.fullTime}
                />
                <label className="form-check-label" htmlFor="fullTime">
                  Full Time
                </label>
              </div>
              <div className="form-check parttime-job">
                <input
                  type="checkbox" className="form-check-input"  id="partTime" 
                  value="partTime" onChange={handelPartTime} checked={searchSidebar.partTime}
                />
                <label className="form-check-label" htmlFor="partTime">
                  Part-Time
                </label>
              </div>
              <div className="form-check freelance-job">
                <input
                  type="checkbox" className="form-check-input" id="freelancer" 
                  value="freelancer" onChange={handelFreelancer} checked={searchSidebar.freelancer}
                />
                <label className="form-check-label" htmlFor="freelancer">
                  Freelance
                </label>
              </div>
              <div className="form-check temporary-job">
                <input
                  type="checkbox" className="form-check-input" id="temporary" 
                  value="temporary" onChange={handelTemporary} checked={searchSidebar.temporary}
                />
                <label className="form-check-label" htmlFor="temporary">
                  Temporary
                </label>
              </div>




            </div>
          </div>
        </div>
        <hr />
        <div className="widget">
          <div className="widget-title widget-collapse">
            <h6>Experience</h6>
            <a
              className="ms-auto"
              data-bs-toggle="collapse"
              href="#experience"
              role="button"
              aria-expanded="false"
              aria-controls="experience"
            >
              <i className="fas fa-chevron-down" />
            </a>
          </div>
          <div className="collapse show" id="experience">
            <div className="widget-content">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="experience1"
                  value="oneLessExperience"
                  onChange={handelExperience1}
                  checked={searchSidebar.oneLessExperience}
                />
                <label className="form-check-label" htmlFor="experience1">
                  Less than 1 year
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="experience2"
                  value="twoExperience" 
                  onChange={handelExperience2} 
                  checked={searchSidebar.twoExperience}

                />
                <label className="form-check-label" htmlFor="experience2">
                  More 2 Years Less 3 Years 
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="experience3"
                  value="threeExperience"
                  onChange={handelExperience3}
                  checked={searchSidebar.threeExperience}
                />
                <label className="form-check-label" htmlFor="experience3">
                  More 3 Years Less 4 Years
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="experience4"
                  value="fourExperience"
                  onChange={handelExperience4}
                  checked={searchSidebar.fourExperience}
                />
                <label className="form-check-label" htmlFor="experience4">
                  More 4 Years Less 5 Years
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="experience5"
                  value="fiveExperience"
                  onChange={handelExperience5}
                  checked={searchSidebar.fiveExperience}
                />
                <label className="form-check-label" htmlFor="experience5">
                  More 5 Years
                </label>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div className="widget">
          <div className="widget-add">
            {" "}
            <img className="img-fluid" src="images/add-banner.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
export { SidebarSearch };
