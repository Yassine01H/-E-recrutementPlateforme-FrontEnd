import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const Cv = (props) => {
  const [cvs, setcvs] = useState([]);
  const [visibleItems, setVisibleItems] = useState(1);
  const [selectedImage, setSelectedImage] = useState("");
  //alert(selectedImage);
 // This function will be triggered when the file field change
 const imageChange = (e) => {
   if (e.target.files && e.target.files.length > 0) {
     setSelectedImage(e.target.files[0]);
   
   }
   
 };

  const [titlecv, settitlecv] = useState("");
  const loadMore = () => {
    setVisibleItems(visibleItems + 5);
  };

  const getCV = () => {
    if (props.idCandidat != ""){
    axios.get(`http://127.0.0.1:8000/cv/${props.idCandidat}`).then((res) => {
      setcvs(res.data);
    });
  }
  };
  const AddCv = () => {
  //  alert("ddd");
    if (props.idCandidat != ""){
   const bodyFormData = new FormData();
    bodyFormData.append("candidat",props.idCandidat );
    bodyFormData.append("TitleCV", titlecv);
    bodyFormData.append("cv", selectedImage);
//    console.log("test");
    //console.log(bodyFormData);
    axios.post("http://127.0.0.1:8000/api/cvs", bodyFormData).then((res) => {
      if (res.status == 201) {
        toast.success("success !");
  //      navigate("/Login");
  window.location.reload(true);
      }
    })}
  };

  useEffect(() => {
    getCV();
  }, [props.idCandidat]);

  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="user-dashboard-info-box">
                <div className="dashboard-resume-title d-flex align-items-center">
                  <div className="section-title-02 mb-sm-0">
                    <h4 className="mb-0">Media</h4>
                  </div>
                  <a
                    href="login.html"
                    data-bs-toggle="modal"
                    className="btn btn-md ms-sm-auto btn-primary"
                    data-bs-target="#modalcv"
                  >
                    Add CV
                  </a>
                </div>
                <div className="collapse show" id="dateposted">
                  {cvs.slice(0, visibleItems).map((cv) => (
                    <div key={cv.id} className="form-group mb-3">
                      <label className="form-label">Enter Your Location</label>
                      <input className="form-control" defaultValue={cv.title_cv} />

                      <div>
                        <img
                          className="img-fluid"
                          src={"http://127.0.0.1:8000/images/cv/" + cv.imgcv}
                          alt=""
                          style={{
                            maxHeight: "300px",
                            marginLeft: "100px",
                            maxWidth: "45%",
                          }}
                        />
                      </div>
                    </div>
                  ))}

                  <center>
                    {visibleItems < cvs.length && (
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

      <div
        className="modal fade"
        id="modalcv"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header p-4">
              <h4 className="mb-0 text-center">Login to Your Account</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
            <div className="row justify-content-center">
                {selectedImage && (
                        <img src={URL.createObjectURL(selectedImage)}
                       
                         style={{width:"20%"}} alt="Thumb"
                         />
                        )
                        }     
                </div>
              <form className="row collapse show" id="dateposted-04">
                <div className="form-group mb-3 col-md-6">
                  <label className="form-label" style={{ color: "black" }}>
                    Profile Image
                  </label>
                  <input
                    accept="image/*"
                    type="file"
                    onChange={imageChange}
                    className="form-control"
                  />
                </div>
                <div className="form-group mb-3 col-md-6">
                  <label className="text-dark">Title CV</label>
                  <input
                    type="text"
                    className="form-control shadow p-3 mb-5 bg-body-tertiary rounded"
                    onChange={(e) => settitlecv(e.target.value)}
                  />
                </div>

                <div className="form-group col-md-12 mb-0">
                  <a className="btn btn-md btn-primary" onClick={() => AddCv()}>
                    ADD
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Cv };
