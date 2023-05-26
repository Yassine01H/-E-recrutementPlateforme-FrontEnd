
import { useNavigate } from "react-router-dom";
import { Header } from "../Header";
import {useState} from 'react'
import axios from "axios";
import Swal from "sweetalert2";
const Addprofile = () => {

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
  const [ProfileTitle, setProfileTitle] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Dateofbirth, setDateofbirth] = useState("");
  const [Phone, setPhone] = useState("");
  const [Adress, setAdress] = useState("");
  const [job, setjob] = useState("");
 

  const SaveProfile = () => {

    const bodyFormData = new FormData();

    bodyFormData.append("first_name", FirstName);
    bodyFormData.append("last_name", LastName);
    bodyFormData.append("date_of_birth", Dateofbirth);
    bodyFormData.append("phone", Phone);
    bodyFormData.append("address", Adress);
    bodyFormData.append("job", job);
    bodyFormData.append("profileTitle", ProfileTitle);
    bodyFormData.append("user", localStorage.getItem("iduser"));
    bodyFormData.append("imgProfile", selectedImage);
    //bodyFormData.append('imgProfilePath', 'ddddd');

    axios.post("http://127.0.0.1:8000/api/candidats", bodyFormData).then((res) => {
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


                <div style={{marginBottom:"40px"}}>
                <div className="row justify-content-center">
                {selectedImage && (
                        <img src={URL.createObjectURL(selectedImage)}
                        className="rounded-circle pb-50"
                         style={{width:"20%"}} alt="Thumb"
                         />
                        )
                        
                        }     
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
                            Profile Image
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
                            Profile Title
                          </label>
                          <input
                            type="text"
                            value={ProfileTitle}
                            onChange={(e) => setProfileTitle(e.target.value)}
                            className="form-control shadow p-3 mb-5 bg-body-tertiary rounded"
                            placeholder="Profile Title ..."
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
                            value={FirstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder="First Name ..."
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
                        <div className="form-group col-md-6 datetimepickers">
                          <label
                            className="form-label"
                            style={{ color: "black" }}
                          >
                            Date of birth
                          </label>
                          <div
                            className="input-group date"
                            id="datetimepicker-01"
                            data-target-input="nearest"
                          >
                            <input
                              type="date"
                              className="form-control datetimepicker-input "
                              defaultValue="08/11/1999"
                              data-target="#datetimepicker-01"
                              value={Dateofbirth}
                              onChange={(e) => setDateofbirth(e.target.value)}
                            />
                            <div
                              className="input-group-append d-flex"
                              data-target="#datetimepicker-01"
                              data-toggle="datetimepicker"
                            >
                              <div className="input-group-text">
                                <i className="far fa-calendar-alt" />
                              </div>
                            </div>
                          </div>
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
                            defaultValue="+(123) 345-6789"
                            value={Phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Phone ..."
                          />
                        </div>

                        <div className="form-group col-md-6">
                          <label
                            className="form-label"
                            style={{ color: "black" }}
                          >
                            Adress
                          </label>
                          <input
                            type="text"
                            className="form-control shadow p-3 mb-5 bg-body-tertiary rounded"
                            defaultValue="Web dev"
                            value={Adress}
                            onChange={(e) => setAdress(e.target.value)}
                            placeholder="Adress ..."
                          />
                        </div>

                        <div className="form-group col-md-6">
                          <label
                            className="form-label"
                            style={{ color: "black" }}
                          >
                            job
                          </label>
                          <input
                            type="text"
                            className="form-control shadow p-3 bg-body-tertiary rounded"
                            defaultValue="General Insurance"
                            value={job}
                            onChange={(e) => setjob(e.target.value)}
                            placeholder="Job ..."
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

export { Addprofile };
