import { Footer } from "./Footer"
import { Header } from "./Header"

const Services=()=>{

    return(
        <>
        <Header/>
        <div>
        {/*=================================
inner banner */}
        <div className="header-inner text-center" style={{ background: "#eeeeee" }}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 className="text-primary">Services</h2>
                <ol className="breadcrumb mb-0 p-0">
                  <li className="breadcrumb-item"><a href="index.html"> Home </a></li>
                  <li className="breadcrumb-item active"> <i className="fas fa-chevron-right" /> <span> Services</span></li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        {/*=================================
inner banner */}
        {/*=================================
Services we offer */}
        <section className="space-ptb">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="section-title mb-3">
                  <h2>Services we offer</h2>
                  <span className="lead">We truly care about our users and our product. We are dedicated to providing you with the best experience possible.</span>
                </div>
                <p>Focus is having the unwavering attention to complete what you set out to do. There are a million distractions in every facet of our lives. </p>
                <div className="row">
                  <div className="col-sm-6">
                    <ul className="ps-3 mb-0 list-style-2">
                      <li>Making the decision</li>
                      <li>Clarity – developing the Vision</li>
                      <li>Focus – having a plan</li>
                      <li>Commitment</li>
                      <li>Taking action</li>
                      <li>practice Ready</li>
                    </ul>
                  </div>
                  <div className="col-sm-6">
                    <ul className="ps-3 mb-0 list-style-2">
                      <li>Introspection</li>
                      <li>Power of Responsibility</li>
                      <li>Reflect and experiment</li>
                      <li>Combination of Motivators</li>
                      <li>Having clarity of purpose</li>
                      <li>Simply by asking ourselves</li>
                    </ul>
                  </div>
                </div>
                <div className="p-4 bg-dark mt-4">
                  <div className="row">
                    <div className="col-sm-4 mb-3 mb-sm-0">
                      <div className="counter mb-3 mb-sm-0 justify-content-center">
                        <div className="counter-content">
                          <span className="timer mb-1 text-white" data-to={1227} data-speed={10000}>1227</span>
                          <label className="mb-0 text-white">Jobs Posted</label>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4 mb-3 mb-sm-0">
                      <div className="counter mb-3 mb-sm-0 justify-content-center">
                        <div className="counter-content">
                          <span className="timer mb-1 text-white" data-to={123} data-speed={10000}>123</span>
                          <label className="mb-0 text-white">Jobs Filled</label>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="counter mb-0 justify-content-center">
                        <div className="counter-content">
                          <span className="timer mb-1 text-white" data-to={170} data-speed={10000}>170</span>
                          <label className="mb-0 text-white">Companies</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mt-4 mt-lg-0">
                <img className="img-fluid w-100" src="images/about/about-03.jpg" alt="" />
              </div>
            </div>
          </div>
        </section>
        {/*=================================
Services we offer */}
        {/*=================================
Service */}
        <section className="space-pb">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="feature-info feature-info-border text-center">
                  <div className="feature-info-icon mb-3">
                    <i className="flaticon-contract" />
                  </div>
                  <div className="feature-info-content">
                    <h5 className="text-black">Advertise A Job</h5>
                    <p className="mb-0">Focus is having the unwavering attention to complete what you set out to do. There are a million distractions in every facet of our lives.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="feature-info feature-info-border text-center">
                  <div className="feature-info-icon mb-3">
                    <i className="flaticon-profiles" />
                  </div>
                  <div className="feature-info-content">
                    <h5 className="text-black">Recruiter Profiles</h5>
                    <p className="mb-0">So, how can we stay on course with all the distractions in our lives? Willpower is a good start, but it’s very difficult to stay on track.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="feature-info feature-info-border text-center">
                  <div className="feature-info-icon mb-3">
                    <i className="flaticon-job-3" />
                  </div>
                  <div className="feature-info-content">
                    <h5 className="text-black">Find Your dream job</h5>
                    <p className="mb-0">The price is something not necessarily defined as financial. It could be time, effort, sacrifice, money or perhaps, something else.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <div className="feature-info feature-info-border text-center">
                  <div className="feature-info-icon mb-3">
                    <i className="flaticon-personal-profile" />
                  </div>
                  <div className="feature-info-content">
                    <h5 className="text-black">Advertise A Job</h5>
                    <p className="mb-0">Along with your plans, you should consider developing an action orientation that will keep you motivated to move forward at all times.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <div className="feature-info feature-info-border text-center">
                  <div className="feature-info-icon mb-3">
                    <i className="flaticon-resume" />
                  </div>
                  <div className="feature-info-content">
                    <h5 className="text-black">Recruiter Profiles</h5>
                    <p className="mb-0">I coach my clients to practice the 3 D’s – Defer, Delegate or Delete. Can the particular activity be done later? Defer it! Can it be</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="feature-info feature-info-border text-center">
                  <div className="feature-info-icon mb-3">
                    <i className="flaticon-video-conference" />
                  </div>
                  <div className="feature-info-content">
                    <h5 className="text-black">Find Your dream job</h5>
                    <p className="mb-0">Telephones and e-mail, clients and managers, spouses and kids, TV, newspapers and radio – the distractions are everywhere and endless.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*=================================
Service */}
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
      </div>
      <Footer/>
        </>
    )
}
export {Services}