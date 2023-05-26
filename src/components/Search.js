import { useState } from "react";

const Search = (props) => {

  const [Searchdatawhat, setDataWhat] = useState("");
  const [SearchdataWhere, setDataWhere] = useState("");

  const handleChangeWhat = (e) => {
    const { value, name } = e.target;
    setDataWhat(value);

    props.onSearchTop({
      valST : value,
      nomST : name
     });
  };
   
  const handleChangeWhere = (e) =>{
    const { value, name } = e.target;
    setDataWhere(value);
    props.onSearchTop({
      valST : value,
      nomST : name
     });
  }




  return (
    <>
      <section
        className="header-inner header-inner-big bg-holder text-white"
        style={{ backgroundImage: "url(/images/bg/banner-01.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="job-search-field">
                <div className="job-search-item">
                  <form className="form row">
                    <div className="col-lg-5 col-md-4">
                      <div className="form-group left-icon mb-md-0">
                        <input
                          type="text"
                          className="form-control"
                          name="dataFromChildWhat"
                          //onChange={(e) => setSearch(e.target.value)}
                          value={Searchdatawhat} onChange={handleChangeWhat}
                          //onChange={(e) => setInputValue(e.target.value)}
                          placeholder="What?"
                        />
                        <i className="fas fa-search" />{" "}
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                      <div className="form-group left-icon mb-md-0">
                        <input
                          type="text"
                          className="form-control"
                          name="dataFromChildWhere"
                          placeholder="Where?"
                          value={SearchdataWhere} onChange={handleChangeWhere}
                        />
                        <i className="fas fa-search" />{" "}
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-12">
                      <div className="form-group form-action mb-0">
                        <button className="btn btn-primary mt-0">
                          <i className="fas fa-search-location" /> Find
                          Candidate
                        </button>
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
  );
};


export { Search };
