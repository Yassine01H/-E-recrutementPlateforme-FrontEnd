import { useEffect, useState } from "react";
import { Header } from "../Header"
import { HeaderProfile } from "./HeaderProfile"
import axios from "axios";
import { toast } from "react-hot-toast";
import { Footer } from "../Footer";
import { useNavigate } from "react-router-dom";



const EditProfile = ()=>{
   const hasToken = localStorage.getItem("token");
   const navigate = useNavigate();

    const [selectedImage, setSelectedImage] = useState("");
     const imageChange = (e) => {
       if (e.target.files && e.target.files.length > 0) {
         setSelectedImage(e.target.files[0]);
       }
       
     };
    const [Employer, setIdEmployer] = useState([]);

    const IdEmployer = (data) => {
      setIdEmployer(data);
    };
    const [firstname,setfirstname] = useState("");
    const [last_name,setlast_name] = useState("");
    const [web_site,setweb_site] = useState("");
    const [company_name,setcompany_name] = useState("");
    const [company_adress,setcompany_adress] = useState("");
    const [phone,setphone] = useState("");
    const [ActivityArea,setActivityArea] = useState("");
    //const [logo,setlogo] = useState("");
    const [company_description,setcompany_description] = useState("");
    const getEmployer =()=>{
        if (Employer != ""){
            axios.get("http://127.0.0.1:8000/api/recruiters/"+Employer).then((res)=>{
          
            setfirstname(res.data.first_name);
            setlast_name(res.data.last_name);
            setweb_site(res.data.web_site);
            setcompany_name(res.data.company_name);
            setcompany_adress(res.data.company_adress);
            setphone(res.data.phone);
            setActivityArea(res.data.activity_area);
        //    setlogo("http://127.0.0.1:8000/images/recruiters/"+res.data.logo);
            setcompany_description(res.data.company_description);       
          })
        }

    }
    const UpdateProfile =()=> {

        const bodyFormData = new FormData();        
        bodyFormData.append("first_name",firstname );
        bodyFormData.append("last_name",last_name );
        bodyFormData.append("web_site",web_site );
        bodyFormData.append("company_name", company_name);
        bodyFormData.append("company_adress",company_adress );
        bodyFormData.append("phone", phone);
        bodyFormData.append("company_description",company_description );
        bodyFormData.append("activity_area", ActivityArea);
        //bodyFormData.append("imgLogo", selectedImage);
       
            axios.post("http://127.0.0.1:8000/edit-recruiter/"+Employer,bodyFormData).then((res)=>{
                if (res.status == 200) {
                   toast.success("success update");
                   window.location.reload(false);
                  }

            }).catch((error) => {
                toast.error("8alet");
              })
     

    }
    useEffect(() => {
        getEmployer();
      }, [Employer]);
return (
    <>
    
    <Header/>
    <HeaderProfile IdEmployer={IdEmployer}/>
   
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
                            className="form-control"
                            onChange={imageChange}
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
                            defaultValue={company_name}
                            placeholder="Company Name ..."
                            onChange={(e)=>setcompany_name(e.target.value)}
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
                            defaultValue={firstname}
                            onChange={(e)=>setfirstname(e.target.value)}
                         
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
                            defaultValue={last_name}
                            placeholder="Last Name..."
                            onChange={(e)=>setlast_name(e.target.value)}
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
                            defaultValue={web_site}
                            onChange={(e)=>setweb_site(e.target.value)}
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
                            defaultValue={company_adress}
                            onChange={(e)=>setcompany_adress(e.target.value)}
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
                            type="number"
                            className="form-control shadow p-3 mb-5 bg-body-tertiary rounded"
                            placeholder="Phone ..."
                            defaultValue={phone}
                            onChange={(e)=>setphone(e.target.value)}
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
                            defaultValue={ActivityArea}
                            onChange={(e)=>setActivityArea(e.target.value)}
                          />
                        </div>

                        <div className="form-group mb-3 col-md-12">
                          <label className="text-dark">Company Description</label>
                          <textarea
                            className="form-control shadow p-3 mb-5 bg-body-tertiary rounded"
                            rows={4}
                            placeholder="Company Description"
                            defaultValue={company_description}
                            onChange={(e)=>setcompany_description(e.target.value)}
                          />
                        </div>

                        <button
                          type="button"
                          className="btn btn-md btn-primary "
                          style={{ width: "30%" }}
                          onClick={()=>UpdateProfile()}
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
        </section>
        <Footer/>
    </>
)
}

export {EditProfile}