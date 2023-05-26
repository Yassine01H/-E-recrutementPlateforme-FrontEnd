import { useNavigate } from "react-router-dom";
import ReactTimeAgo from 'react-time-ago';
const Employer = (props) => {
  const navigate = useNavigate();
  const EmployerDetails=(user)=>{
    //const user = props.Employer.user;
 //  alert(user);
    navigate("/employerDetails/"+ user);
  }
  return (
    <>
      <div className="col-12">
      <div className="employers-list" key={props.Employer.id}>
        <div className="col-10">
        <div className="employers-list-logo">
          <img className="img-fluid" src={
                "http://127.0.0.1:8000/images/recruiters/" +
                props.Employer.logo
              } alt="" />
        </div>
        <div className="employers-list-details">
          <div className="employers-list-info">
            <div className="employers-list-title">
              <h5 className="mb-0" onClick={()=>EmployerDetails(props.Employer.user)}>
                <a >{props.Employer.company_name}</a>
              </h5>
            </div>
            <div className="employers-list-option">
              <ul className="list-unstyled">
                <li>
                  <i className="fas fa-filter pe-1" />
                  {props.Employer.activity_area}
                </li>
                <li>
                  <i className="fas fa-map-marker-alt pe-1" />
                  {props.Employer.company_adress}
                </li>
              </ul>
            </div>
            
          </div>
        </div>

        </div>
        <div className="col-2">
        <div className="job-list-favourite-time">
            {" "}
            <a className="job-list-favourite order-2" href="#">
              <i className="far fa-heart" />
            </a>{" "}
            <span className="job-list-time order-1">
              <i className="far fa-clock pe-1" />
              <ReactTimeAgo date={Date.parse(props.Employer.created_at.date)}  timeStyle="round-minute" />
            </span>{" "}
          </div>
          </div>

        </div>
      </div>
    </>
  );
};
export { Employer };
