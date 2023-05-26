import { Footer } from "./Footer"
import { Header } from "./Header"

const Contactus=()=>{
   return(
    <>
    <Header/>
    <div>
        {/*=================================
inner banner */}
        <div className="header-inner bg-light text-center">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 className="text-primary">Contact Us</h2>
                <ol className="breadcrumb mb-0 p-0">
                  <li className="breadcrumb-item"><a href="index.html"> Home </a></li>
                  <li className="breadcrumb-item active"> <i className="fas fa-chevron-right" /> <span> Contact us </span></li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        {/*=================================
inner banner */}
        {/*=================================
feature-info */}
        <section className="space-ptb">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <div className="feature-info feature-info-border p-4 text-center">
                  <div className="feature-info-icon mb-3">
                    <i className="flaticon-placeholder" />
                  </div>
                  <div className="feature-info-content">
                    <h5 className="text-black">Address</h5>
                    <span className="d-block">214 West Arnold St. </span>
                    <span>New York, NY 10002</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <div className="feature-info feature-info-border p-4 text-center">
                  <div className="feature-info-icon mb-3">
                    <i className="flaticon-contact fa-flip-horizontal" />
                  </div>
                  <div className="feature-info-content">
                    <h5 className="text-black">Phone Number</h5>
                    <span className="d-block">(123) 345-6789</span>
                    <span>(456) 478-2589</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <div className="feature-info feature-info-border p-4 text-center">
                  <div className="feature-info-icon mb-3">
                    <i className="flaticon-approval" />
                  </div>
                  <div className="feature-info-content">
                    <h5 className="text-black">Email</h5>
                    <span className="d-block">support@jobber.demo</span>
                    <span>gethelp@jobber.demo</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="feature-info feature-info-border p-4 text-center">
                  <div className="feature-info-icon mb-3">
                    <i className="flaticon-curriculum" />
                  </div>
                  <div className="feature-info-content">
                    <h5 className="text-black">Fax</h5>
                    <span className="d-block">(123) 345-6789</span>
                    <span>(456) 478-2589</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*=================================
feature-info */}
        {/*=================================
Let’s Get In Touch */}
        <section className="space-ptb pt-0">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title-02 text-center">
                  <h2>Let’s Get In Touch!</h2>
                  <p>We have completed over a 1000+ projects for five hundred clients. Give us your next project.</p>
                </div>
              </div>
            </div>
            <form>
              <div className="row">
                <div className="form-group col-md-6 mb-3">
                  <input type="text" className="form-control" id="Username" placeholder="Enter Your Name" />
                </div>
                <div className="form-group col-md-6 mb-3">
                  <input type="text" className="form-control" id="email" placeholder="Subject" />
                </div>
                <div className="form-group col-md-6 mb-3">
                  <input type="text" className="form-control" id="Password" placeholder="Enter Your Email Address" />
                </div>
                <div className="form-group col-md-6 mb-3">
                  <input type="text" className="form-control" id="phone" placeholder="Enter Your Phone Number" />
                </div>
                <div className="form-group col-12 mb-0">
                  <textarea rows={5} className="form-control" id="sector" placeholder="Subject" defaultValue={""} />
                </div>
                <div className="col-12 text-center mt-4">
                  <a className="btn btn-primary" href="#">Send your message</a>
                </div>
              </div>
            </form>
          </div>
        </section>
        <section className="space-ptb pt-0">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="d-flex mb-md-0 mb-4">
                  <i className="font-xlll text-primary flaticon-hand-shake" />
                  <div className="feature-info-content ps-4">
                    <h5>Chat To Us Online</h5>
                    <p className="mb-0">Chat to us online if you have any question.</p>
                    <a className="mt-2 mb-0 d-block" href="#">Click here to open chat</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="d-flex mb-md-0 mb-4">
                  <i className="font-xlll text-primary flaticon-profiles" />
                  <div className="feature-info-content ps-4">
                    <h5>Call Us</h5>
                    <p className="mb-0">Our support agent will work with you to meet your lending needs.</p>
                    <h5 className="mt-2 mb-0">(123) 345-6789</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="d-flex">
                  <i className="font-xlll text-primary flaticon-conversation-1" />
                  <div className="feature-info-content ps-4">
                    <h5>Read our latest news</h5>
                    <p className="mb-0">Visit our Blog page and know more about news and career tips</p>
                    <a className="mt-2 mb-0 d-block" href="#">Read Blog post </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*=================================
Let’s Get In Touch */}
        {/*=================================
feature info section */}
        <section className="feature-info-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mb-lg-0 mb-4">
                <div className="feature-info feature-info-02 p-4 p-lg-5 bg-primary">
                  <div className="feature-info-icon mb-3 mb-sm-0 text-dark">
                    <i className="flaticon-team" />
                  </div>
                  <div className="feature-info-content text-white ps-sm-4 ps-0">
                    <p>Jobseeker</p>
                    <h5 className="text-white">Looking For Job?</h5>
                  </div>
                  <a className="ms-auto align-self-center" href="#">Apply now<i className="fas fa-long-arrow-alt-right" /> </a>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="feature-info feature-info-02 p-4 p-lg-5 bg-dark">
                  <div className="feature-info-icon mb-3 mb-sm-0 text-primary">
                    <i className="flaticon-job-3" />
                  </div>
                  <div className="feature-info-content text-white ps-sm-4 ps-0">
                    <p>Recruiter</p>
                    <h5 className="text-white">Are You Recruiting?</h5>
                  </div>
                  <a className="ms-auto align-self-center" href="#">Post a job<i className="fas fa-long-arrow-alt-right" /> </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*=================================
feature info section */}
        {/*=================================
footer */}
        <footer className="footer bg-light">
          <div className="position-relative">
            <svg className="footer-shape" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" height="85px">
              <path fillRule="evenodd" fill="rgb(255, 255, 255)" d="M-0.000,-0.001 L1923.000,-0.001 L1923.000,84.999 C1608.914,41.669 1279.532,19.653 962.500,19.000 C635.773,18.326 323.692,40.344 -0.000,84.999 C-0.000,-83.334 -0.000,168.332 -0.000,-0.001 Z" />
            </svg>
          </div>
          <div className="container pt-5">
            <div className="row mt-5">
              <div className="col-lg-3 col-md-6">
                <div className="footer-link">
                  <h5 className="text-dark mb-4">Trending Job</h5>
                  <ul className="list-unstyled">
                    <li><a href="#">Browse Jobs</a></li>
                    <li><a href="#">Browse Categories</a></li>
                    <li><a href="#">Submit Resume</a></li>
                    <li><a href="#">Candidate Dashboard</a></li>
                    <li><a href="#">Job Alerts</a></li>
                    <li><a href="#">My Bookmarks</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mt-4 mt-md-0">
                <div className="footer-link">
                  <h5 className="text-dark mb-4">Trending Companies</h5>
                  <ul className="list-unstyled">
                    <li><a href="#">Shortcodes</a></li>
                    <li><a href="#">Job Page</a></li>
                    <li><a href="#">Job Page Alternative</a></li>
                    <li><a href="#">Resume Page</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contact</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
                <h5 className="text-dark mb-4">Subscribe Us</h5>
                <div className="footer-subscribe">
                  <p>Sign Up to our Newsletter to get the latest news and offers.</p>
                  <form>
                    <div className="form-group mb-3">
                      <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
                    </div>
                    <button type="submit" className="btn btn-primary btn-md">Get Notified</button>
                  </form>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
                <h5 className="text-dark mb-4">Download App</h5>
                <div className="footer-subscribe">
                  <p>Download the latest Slick new job apps now</p>
                  <div className="d-inline-block">
                    <a className="btn btn-white btn-sm btn-app " href="#">
                      <i className="fab fa-apple" />
                      <div className="btn-text text-start">
                        <small className="fw-normal">Download on the </small>
                        <span className="mb-0 d-block">App Store</span>
                      </div>
                    </a>
                    <a className="btn btn-white btn-sm btn-app mt-3" href="#">
                      <i className="fab fa-google-play" />
                      <div className="btn-text text-start">
                        <small className="fw-normal">Get it on</small>
                        <span className="mb-0 d-block">Google Play</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom bg-dark mt-5">
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
                  <p className="mb-0"> ©Copyright <span id="copyright"> </span> <a href="#"> Jobber </a> All Rights Reserved </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/*=================================
footer */}
        {/*=================================
Back To Top*/}
        <div id="back-to-top" className="back-to-top">
          <i className="fas fa-angle-up" />
        </div>
        {/*=================================
Back To Top*/}
        {/*=================================
Signin Modal Popup */}
        <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header p-4">
                <h4 className="mb-0 text-center">Login to Your Account</h4>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
                <div className="login-register">
                  <fieldset>
                    <legend className="px-2">Choose your Account Type</legend>
                    <ul className="nav nav-tabs nav-tabs-border d-flex" role="tablist">
                      <li className="nav-item me-4">
                        <a className="nav-link active" data-bs-toggle="tab" href="#candidate" role="tab" aria-selected="false">
                          <div className="d-flex">
                            <div className="tab-icon">
                              <i className="flaticon-users" />
                            </div>
                            <div className="ms-3">
                              <h6 className="mb-0">Candidate</h6>
                              <p className="mb-0">Log in as Candidate</p>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="tab" href="#employer" role="tab" aria-selected="false">
                          <div className="d-flex">
                            <div className="tab-icon">
                              <i className="flaticon-suitcase" />
                            </div>
                            <div className="ms-3">
                              <h6 className="mb-0">Employer</h6>
                              <p className="mb-0">Log in as Employer</p>
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </fieldset>
                  <div className="tab-content">
                    <div className="tab-pane active" id="candidate" role="tabpanel">
                      <form className="mt-4">
                        <div className="row">
                          <div className="form-group col-12 mb-3">
                            <label className="form-label" htmlFor="Email2">Username / Email Address:</label>
                            <input type="text" className="form-control" id="Email22" />
                          </div>
                          <div className="form-group col-12 mb-3">
                            <label className="form-label" htmlFor="password2">Password*</label>
                            <input type="password" className="form-control" id="password32" />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <a className="btn btn-primary d-grid" href="#">Sign In</a>
                          </div>
                          <div className="col-md-6">
                            <div className="ms-md-3 mt-3 mt-md-0 forgot-pass">
                              <a href="#">Forgot Password?</a>
                              <p className="mt-1">Don't have account? <a href="register.html">Sign Up here</a></p>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="tab-pane fade" id="employer" role="tabpanel">
                      <form className="mt-4">
                        <div className="row">
                          <div className="form-group col-12 mb-3">
                            <label className="form-label" htmlFor="Email2">Username / Email Address:</label>
                            <input type="text" className="form-control" id="Email2" />
                          </div>
                          <div className="form-group col-12 mb-3">
                            <label className="form-label" htmlFor="password2">Password*</label>
                            <input type="password" className="form-control" id="password2" />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <a className="btn btn-primary d-grid" href="#">Sign In</a>
                          </div>
                          <div className="col-md-6">
                            <div className="ms-md-3 mt-3 mt-md-0">
                              <a href="#">Forgot Password?</a>
                              <div className="form-check mt-2">
                                <input className="form-check-input" type="checkbox" defaultValue id="Remember-02" />
                                <label className="form-check-label" htmlFor="Remember-02">Remember Password</label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="mt-4">
                    <fieldset>
                      <legend className="px-2">Login or Sign up with</legend>
                      <div className="social-login">
                        <ul className="list-unstyled d-flex mb-0">
                          <li className="facebook text-center">
                            <a href="#"> <i className="fab fa-facebook-f me-3 me-md-4" />Login with Facebook</a>
                          </li>
                          <li className="twitter text-center">
                            <a href="#"> <i className="fab fa-twitter me-3 me-md-4" />Login with Twitter</a>
                          </li>
                          <li className="google text-center">
                            <a href="#"> <i className="fab fa-google me-3 me-md-4" />Login with Google</a>
                          </li>
                          <li className="linkedin text-center">
                            <a href="#"> <i className="fab fa-linkedin-in me-3 me-md-4" />Login with Linkedin</a>
                          </li>
                        </ul>
                      </div>
                    </fieldset>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*=================================
Signin Modal Popup */}
      </div>
      <Footer/>
    </>
   ) 
}
export {Contactus}