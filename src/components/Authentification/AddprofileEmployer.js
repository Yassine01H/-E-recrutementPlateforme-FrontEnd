import { useNavigate } from "react-router-dom";
import { Header } from "../Header";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
const AddprofileEmployer = () => {

  const navigate = useNavigate();
  ///////////////////////Image Preview/////////////
  const [selectedImage, setSelectedImage] = useState("");
  //alert(selectedImage);
  // This function will be triggered when the file field change
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };
  // This function will be triggered when the "Remove This Image" button is clicked

  ///////////////////////TOAST/////////////////////////////
  const Toast = Swal.mixin({
    toast: true,
    position: "top",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  //////////////////////////////////////////////////////
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [WebSite, setWebSite] = useState("");
  const [Company_Name, setCompanyName] = useState("");
  const [Company_adress, setCompanyadress] = useState("");
  const [Phone, setPhone] = useState("");
  const [Company_Description, setCompanyDescription] = useState("");
  const [Activity_Area, setActivityArea] = useState("");

  const SaveProfile = () => {

    const bodyFormData = new FormData();
    
    bodyFormData.append("first_name",FirstName );
    bodyFormData.append("last_name",LastName );
    bodyFormData.append("web_site",WebSite );
    bodyFormData.append("company_name", Company_Name);
    bodyFormData.append("company_adress",Company_adress );
    bodyFormData.append("phone", Phone);
    bodyFormData.append("company_description",Company_Description );
    bodyFormData.append("activity_area", Activity_Area);
    bodyFormData.append("imgLogo", selectedImage);
    //bodyFormData.append('imgProfilePath', 'ddddd');
    bodyFormData.append("user", localStorage.getItem("iduser"));
    axios
      .post("http://127.0.0.1:8000/api/recruiters", bodyFormData)
      .then((res) => {
        if (res.status == 201) {
          Toast.fire({
            icon: "success",
            title: "You are successfully login",
          });
          navigate("/Login");
        }
      })
      .catch((err) => alert("8alet !"));
  };

  return (
    <>
      <Header />
      <section className="space-ptb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10 col-md-12">
              <div className="login-register">
                <div className="section-title">
                  <h4 className="text-center">
                    Create a Profile for your Account
                  </h4>
                </div>

                <div style={{ marginBottom: "40px" }}>
                  <div className="row justify-content-center">
                    {selectedImage && (
                      <img
                        src={URL.createObjectURL(selectedImage)}
                        className="rounded-circle pb-50"
                        style={{ width: "20%" }}
                        alt="Thumb"
                      />
                    )}
                  </div>
                </div>

                <div className="tab-content">
                  <div
                    className="tab-pane active"
                    id="candidate"
                    role="tabpanel"
                  >
                    <form>
                      <div className="row">
                        <div className="form-group col-md-6">
                          <label
                            className="form-label"
                            style={{ color: "black" }}
                          >
                            Company Logo
                          </label>
                          <input
                            accept="image/*"
                            type="file"
                            onChange={imageChange}
                            className="form-control"
                          />
                        </div>

                        <div className="form-group col-md-6">
                          <label
                            className="form-label"
                            style={{ color: "black" }}
                          >
                            Company Name
                          </label>
                          <input
                            type="text"
                            className="form-control shadow p-3 mb-5 bg-body-tertiary rounded"
                            value={Company_Name}
                            onChange={(e)=>setCompanyName(e.target.value)}
                            placeholder="Company Name ..."
                          />
                        </div>

                        <div className="form-group col-md-6">
                          <label
                            className="form-label"
                            style={{ color: "black" }}
                          >
                            First Name
                          </label>
                          <input
                            type="text"
                            className="form-control shadow p-3 mb-5 bg-body-tertiary rounded"
                            placeholder="First Name ..."
                            value={FirstName}
                            onChange={(e)=>setFirstName(e.target.value)}
                          />
                        </div>

                        <div className="form-group col-md-6">
                          <label
                            className="form-label"
                            style={{ color: "black" }}
                          >
                            Last Name
                          </label>
                          <input
                            type="text "
                            className="form-control shadow p-3 mb-5 bg-body-tertiary rounded"
                            value={LastName}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder="Last Name..."
                          />
                        </div>


                        <div className="form-group col-md-6">
                          <label
                            className="form-label"
                            style={{ color: "black" }}
                          >
                            web_site Url
                          </label>
                          <input
                            type="text"
                            className="form-control shadow p-3 mb-5 bg-body-tertiary rounded"
                            placeholder="web_site Url ..."
                            value={WebSite}
                            onChange={(e)=>setWebSite(e.target.value)}
                          />
                        </div>


                        <div className="form-group col-md-6">
                          <label
                            className="form-label"
                            style={{ color: "black" }}
                          >
                            Company adress
                          </label>
                          <input
                            type="text"
                            className="form-control shadow p-3 mb-5 bg-body-tertiary rounded"
                            placeholder="Company adress ..."
                            value={Company_adress}
                            onChange={(e)=>setCompanyadress(e.target.value)}
                          />
                        </div>


                        <div className="form-group col-md-6">
                          <label
                            className="form-label"
                            style={{ color: "black" }}
                          >
                            Phone
                          </label>
                          <input
                            type="text"
                            className="form-control shadow p-3 mb-5 bg-body-tertiary rounded"
                            placeholder="Phone ..."
                            value={Phone}
                            onChange={(e)=>setPhone(e.target.value)}
                          />
                        </div>

                        <div className="form-group col-md-6">
                          <label
                            className="form-label"
                            style={{ color: "black" }}
                          >
                            Activity Area
                          </label>
                          <input
                            type="text"
                            className="form-control shadow p-3 mb-5 bg-body-tertiary rounded"
                            placeholder="Activity Area ..."
                            value={Activity_Area}
                            onChange={(e)=>setActivityArea(e.target.value)}
                          />
                        </div>

                        <div className="form-group mb-3 col-md-12">
                          <label className="text-dark">Company Description</label>
                          <textarea
                            className="form-control shadow p-3 mb-5 bg-body-tertiary rounded"
                            rows={4}
                            placeholder="Company Description"
                            value={Company_Description}
                            onChange={(e)=>setCompanyDescription(e.target.value)}
                          />
                        </div>

                        <button
                          type="button"
                          className="btn btn-md btn-primary "
                          style={{ width: "30%" }}
                          onClick={() => SaveProfile()}
                        >
                          Save Settings
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export { AddprofileEmployer };
