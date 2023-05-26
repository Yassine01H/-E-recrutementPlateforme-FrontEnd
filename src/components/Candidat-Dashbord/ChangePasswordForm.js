import axios from "axios";
import jwtDecode from "jwt-decode";
import { useState } from "react";
import { toast } from "react-hot-toast";

const ChangePasswordForm =()=>{
    const [NewPassword, SetNewPassword] = useState("");
    const [ConfirmPassword, SetConfirmPassword] = useState("");
  
    const [Statut, setStatut] = useState("");
    const token = localStorage.getItem("token");
    const ChangePasswod = () => {
      const decode = jwtDecode(token);
     // console.log(decode.username);
      if (NewPassword == "") {
        toast.error("New Password required!");
      } else if (ConfirmPassword == "") {
        toast.error("Confirm Password required!");
      } else if (NewPassword != ConfirmPassword) {
        toast.error("New Password not matched");
      } else {
        const newPassword = new FormData();
  
        newPassword.append("password", NewPassword);
        
        axios
          .post("http://127.0.0.1:8000/api/user/change-password/"+decode.username, newPassword)
          .then((res) => {
            if (res.status == 200) {
            toast.success("Success Update");
          }
        });
      }
    };
    return (
    <>
                  <div className="col-md-12">
                <div className="user-dashboard-info-box">
                  <div className="section-title-02 mb-4">
                    <h4>Change Password</h4>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <form className="row">

                        <div className="form-group col-md-12 mb-3">
                          <label className="form-label">New Password</label>
                          <input
                            type="password"
                            className="form-control shadow p-3 mb-5 bg-body-tertiary rounded"
                            onChange={(e) => SetNewPassword(e.target.value)}
                          />
                        </div>
                        <div className="form-group col-md-12 mb-0">
                          <label className="form-label">Confirm Password</label>
                          <input
                            type="password"
                            className="form-control shadow p-3 mb-5 bg-body-tertiary rounded"
                            onChange={(e) => SetConfirmPassword(e.target.value)}
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <a
                  className="btn btn-lg btn-primary"
                  href="#"
                  onClick={() => ChangePasswod()}
                >
                  Change Password
                </a>
              </div>
    </>
    )
}
export {ChangePasswordForm}