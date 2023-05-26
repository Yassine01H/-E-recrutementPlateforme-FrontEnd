import { useNavigate } from "react-router-dom";
import ReactTimeAgo from 'react-time-ago';
const Candidats = (props) => {
  // console.log(props.Candidat);
  //console.log(props.Candidat.user.split('users/')[1]);
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate("/candidat-Detail/" + id);
  };

  return (
    <>
      <div className="col-12" key={props.id}>
        <div className="candidate-list">
          <div className="candidate-list-image">
            <img
              className="img-fluid"
              src={
                "http://127.0.0.1:8000/images/candidats/" +
                props.Candidat.imgProfilePath
              }
              alt=""
            />
          </div>
          <div className="candidate-list-details">
            <div className="candidate-list-info">
              <div className="candidate-list-title">
                <h5 className="mb-0">
                  <a  onClick={() => handleClick(props.Candidat.user)}>
                    {props.Candidat.first_name + " " + props.Candidat.last_name}
                  </a>
                </h5>
              </div>
              <div className="candidate-list-option">
                <ul className="list-unstyled">
                  <li>
                    <i className="fas fa-filter pe-1" />
                    {props.Candidat.job}
                  </li>
                  <li>
                    <i className="fas fa-map-marker-alt pe-1" />
                    {props.Candidat.address}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="candidate-list-favourite-time">
            <a className="candidate-list-favourite order-2" href="#">
              <i className="far fa-heart" />
            </a>
            <span className="candidate-list-time order-1">
              <i className="far fa-clock pe-1" />
        
           <ReactTimeAgo date={Date.parse(props.Candidat.created_at.date)}  timeStyle="round-minute" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export { Candidats };
