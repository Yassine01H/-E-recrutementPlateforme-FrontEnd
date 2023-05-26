import { Outlet, Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
<footer className="footer mt-2 mt-md-5 pt-0">
          <div className="footer-bottom bg-light">
            <div className="container">
              <div className="row">
                <div className="col-md-6 ">
                  <div className="d-flex justify-content-md-start justify-content-center">
                    <ul className="list-unstyled d-flex mb-0">
                      <li><a href="#">Privacy Policy</a></li>
                      <li><a href="about.html">About</a></li>
                      <li><a href="#">Team</a></li>
                      <li><a href="contact-us.html">Contact</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6 text-center text-md-end mt-4 mt-md-0">
                  <p className="mb-0"> ©Copyright <span id="copyright"> </span> <a href="#"> Cyberstone </a> All Rights Reserved </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
    </>
  );
};

export { Footer };
