
import { Header } from "../Header";
import { Footer } from "../Footer";
import { HeaderProfile } from "./HeaderProfile";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import jwt_decode from "jwt-decode";
import Swal from "sweetalert2";
import { useLocation } from 'react-router-dom';
const MyProfile = () => {
  const [IDCandidat,setIDCandidat] = useState("");
  const IdCandidat =(data)=>{
    setIDCandidat(data);
  }
  const [selectedImage, setSelectedImage] = useState("");
 // console.log(selectedImage);
   //alert(selectedImage);
  // This function will be triggered when the file field change
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
    
  };
  const [ProfileTitle, setProfileTitle] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Dateofbirth, setDateofbirth] = useState("");
  const [Phone, setPhone] = useState("");
  const [Adress, setAdress] = useState("");
  const [job, setjob] = useState("");
  const getCandidat = ()=>{
    if (IDCandidat !=""){
      axios.get("http://127.0.0.1:8000/api/candidats/" + IDCandidat).then((res) => {
    //  setid(res.data.id);
      setFirstName(res.data.first_name);
      setLastName(res.data.last_name);
      setProfileTitle(res.data.profileTitle);
      setAdress(res.data.address);
      setPhone(res.data.phone);
      setDateofbirth(res.data.date_of_birth.date);
      setjob(res.data.job);
  //    setimgProfilePath("http://127.0.0.1:8000/images/candidats/"+res.data.imgProfilePath);

    });
    }
  }

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

//  console.log(data);


  const SaveProfile = () => {

    var bodyFormData = new FormData();
    
    bodyFormData.append('first_name', FirstName);
    bodyFormData.append('last_name', LastName);
   // bodyFormData.append('date_of_birth', Dateofbirth);
    bodyFormData.append('phone', Phone);
    bodyFormData.append('address', Adress);
    bodyFormData.append('job', job);
    bodyFormData.append('profileTitle', ProfileTitle);
    bodyFormData.append('imgProfile', selectedImage);
    if (IDCandidat != ""){
      axios.post('http://127.0.0.1:8000/edit-candidat/'+IDCandidat, bodyFormData).then((res) => {
        toast.success("success");
        window.location.reload()
      }
      ).catch((error) => {
        toast.error("8alet");
      })
    }



  };

  useEffect(() => {
    getCandidat();
  }, [IDCandidat]);
  return (
    
    <>
      <Header />
      <div>
        <HeaderProfile IdCandidat={IdCandidat}/>

        <section>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="user-dashboard-info-box">
                  <div className="section-title-02 mb-2 d-grid">
                    <h4>Basic Information</h4>
                  </div>
                  <div style={{marginBottom:"40px"}}>
                <div className="row justify-content-center">
             
                {selectedImage && (
                        <img src={URL.createObjectURL(selectedImage)}
                        className="rounded-circle pb-50"
                         style={{width:"15%"}} alt="Thumb"
                         />
                        )
                        
                        }  
                    
                </div>

                </div>
                  <form>
                    <div className="cover-photo-contact">
                      
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

                    <div className="row">
                      <div className="form-group mb-3 col-md-12">
                        <label
                          className="form-label"
                          style={{ color: "black" }}
                        >
                          Profile Title
                        </label>
                        <input
                          type="text"
                          className="form-control shadow p-3 mb-5 bg-body-tertiary rounded"
                          defaultValue={ProfileTitle}
                          onChange={(e) => setProfileTitle(e.target.value)}
                        />
                      </div>

                      <div className="form-group mb-3 col-md-6">
                        <label
                          className="form-label"
                          style={{ color: "black" }}
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          className="form-control shadow p-3 mb-5 bg-body-tertiary rounded"
                          defaultValue={FirstName}
                          onChange={(e) => setFirstName(e.target.value)}
                        />
                      </div>

                      <div className="form-group mb-3 col-md-6">
                        <label
                          className="form-label"
                          style={{ color: "black" }}
                        >
                          Last Name
                        </label>
                        <input
                          type="text "
                          className="form-control shadow p-3 mb-5 bg-body-tertiary rounded"
                          defaultValue={LastName}
                          onChange={(e) => setLastName(e.target.value)}
                        />
                      </div>
                      <div className="form-group mb-3 col-md-6 datetimepickers">
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
                            data-target="#datetimepicker-01"
                            onChange={(e) => setDateofbirth(e.target.value)}
                            value={Dateofbirth}
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

                      <div className="form-group mb-3 col-md-6">
                        <label
                          className="form-label"
                          style={{ color: "black" }}
                        >
                          Phone
                        </label>
                        <input
                          type="text"
                          className="form-control shadow p-3 mb-5 bg-body-tertiary rounded"
                          defaultValue={Phone}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </div>

                      <div className="form-group mb-3 col-md-6">
                        <label
                          className="form-label"
                          style={{ color: "black" }}
                        >
                          Adress
                        </label>
                        <input
                          type="text"
                          className="form-control shadow p-3 mb-5 bg-body-tertiary rounded"
                          defaultValue={Adress}
                          onChange={(e) => setAdress(e.target.value)}
                        />
                      </div>

                      <div className="form-group mb-3 col-md-6">
                        <label
                          className="form-label"
                          style={{ color: "black" }}
                        >
                          job
                        </label>
                        <input
                          type="text"
                          className="form-control shadow p-3 mb-5 bg-body-tertiary rounded"
                          defaultValue={job}
                          onChange={(e) => setjob(e.target.value)}
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
        </section>
      </div>

      <div>
        {/*=================================
footer */}
        <footer className="footer mt-2 mt-md-5 pt-0">
          <div className="footer-bottom bg-light">
            <div className="container">
              <div className="row">
                <div className="col-md-6 ">
                  <div className="d-flex justify-content-md-start justify-content-center">
                    <ul className="list-unstyled d-flex mb-0">
                      <li>
                        <a href="#">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="about.html">About</a>
                      </li>
                      <li>
                        <a href="#">Team</a>
                      </li>
                      <li>
                        <a href="contact-us.html">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6 text-center text-md-end mt-4 mt-md-0">
                  <p className="mb-0">
                    {" "}
                    ©Copyright <span id="copyright"> </span>{" "}
                    <a href="#"> Jobber </a> All Rights Reserved{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/*=================================
footer */}

      </div>
    </>
  );
};

export { MyProfile };
