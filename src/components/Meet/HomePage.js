import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { Header } from "../Header";
import { HeaderProfile } from "../Employer-Dashbord/HeaderProfile";
import { Footer } from "../Footer";
const MeetHomePage =()=>{
    const [RoomCode, setRoomCode] = useState([]);
    const navigate = useNavigate();
    const [Employer, setIdEmployer] = useState([]);

    const IdEmployer = (data) => {
      setIdEmployer(data);
    };
    const submitCode = () => {
            navigate('/room/'+RoomCode);
    }
    
    return (
    <div>
        <Header/>
        <HeaderProfile IdEmployer={IdEmployer}/>
             {/*=================================
Change Password */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="user-dashboard-info-box" style={{width:"50%",margin:"auto",padding:"50px"}}>

                <div className="row">
                  <div className="col-12">
                    <form className="row">
                    <div>
                    <label>Donner le code de votre room</label>
                    <input className="form-control" type="text" name="roomcode" onChange={(e) => setRoomCode(e.target.value)}/>
                    </div>
                    <div className="form-button">
                        
                    <button id="submit" type="submit" style={{marginTop:"10px"}} onClick={()=>submitCode()} className="btn btn-outline-dark">Go</button>
                    </div>

                    </form>
                  </div>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </section>
      {/*=================================
Change Password */}

        <Footer/>
    </div>)
}
export {MeetHomePage}