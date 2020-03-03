import React from 'react';
import { Link } from 'react-router-dom';

class FaqPart extends React.Component {

    render() { 
        return ( 
          <div className="faq-area">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="section-title text-left">
                    <span>faq</span>
                    <h2 className="title">Get Every Single Answers Here.</h2>
                  </div>
                

                  {/* section title */}
                  <div className="faq-accordion">
                    <div className="accordion" id="accordionExample">
                      <div className="card">
                        <div className="card-header" id="headingOne">
                          <Link 
                            
                            to={"/"}
                            data-toggle="collapse"
                            data-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            Today, the term Information Technology
                          </Link>
                        </div>
                        <div
                          id="collapseOne"
                          className="collapse show"
                          aria-labelledby="headingOne"
                          data-parent="#accordionExample"
                        >
                          <div className="card-body">
                            <p>
                              Today, the term Information Technology (IT) has ballooned to
                              encompass is real. Today, the term Information Technology
                              (IT) has ballooned to encompass is real.Today, the term
                              Information Technology (IT) has ballooned to encompass is
                              real.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="headingTwo">
                          <Link 
                            className="collapsed"
                            to={"/"}
                            data-toggle="collapse"
                            data-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            Over the years, a wide range of developments
                          </Link>
                        </div>
                        <div
                          id="collapseTwo"
                          className="collapse"
                          aria-labelledby="headingTwo"
                          data-parent="#accordionExample"
                        >
                          <div className="card-body">
                            <p>
                              Today, the term Information Technology (IT) has ballooned to
                              encompass is real. Today, the term Information Technology
                              (IT) has ballooned to encompass is real.Today, the term
                              Information Technology (IT) has ballooned to encompass is
                              real.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="headingThree">
                          <Link 
                            className="collapsed"
                            to={"/"}
                            data-toggle="collapse"
                            data-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            As a result, most of us need to know
                          </Link>
                        </div>
                        <div
                          id="collapseThree"
                          className="collapse"
                          aria-labelledby="headingThree"
                          data-parent="#accordionExample"
                        >
                          <div className="card-body">
                            <p>
                              Today, the term Information Technology (IT) has ballooned to
                              encompass is real. Today, the term Information Technology
                              (IT) has ballooned to encompass is real.Today, the term
                              Information Technology (IT) has ballooned to encompass is
                              real.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="headingFour">
                          <Link 
                            className="collapsed"
                            to={"/"}
                            data-toggle="collapse"
                            data-target="#collapseFour"
                            aria-expanded="false"
                            aria-controls="collapseFour"
                          >
                            Our knowledge of computers will help us
                          </Link>
                        </div>
                        <div
                          id="collapseFour"
                          className="collapse"
                          aria-labelledby="headingFour"
                          data-parent="#accordionExample"
                        >
                          <div className="card-body">
                            <p>
                              Today, the term Information Technology (IT) has ballooned to
                              encompass is real. Today, the term Information Technology
                              (IT) has ballooned to encompass is real.Today, the term
                              Information Technology (IT) has ballooned to encompass is
                              real.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* faq accordion */}
                </div>
                <div className="col-lg-6 mt-5">
                  <div className="row">
                    <div
                      className="col-lg-6 col-md-6 wow fadeInUp"
                      data-wow-duration=".5s"
                      data-wow-delay=".2s"
                    >
                      <div className="single-faq">
                        <h3 className="title">
                          <span className="counter">869 </span>+
                        </h3>
                        <span>Project We Have Done</span>
                        <p>
                          Today, the term Information Technology (IT) has ballooned to
                          encompass is real.
                        </p>
                        <i className="fal fa-archive" />
                      </div>
                      {/* single faq */}
                    </div>
                    <div
                      className="col-lg-6 col-md-6 wow fadeInUp"
                      data-wow-duration="1s"
                      data-wow-delay=".3s"
                    >
                      <div className="single-faq mt-20">
                        <h3 className="title">
                          <span className="counter">100 </span>+
                        </h3>
                        <span>Project We Have Done</span>
                        <p>
                          Today, the term Information Technology (IT) has ballooned to
                          encompass is real.
                        </p>
                        <i className="fal fa-user" />
                      </div>
                      {/* single faq */}
                    </div>
                    <div
                      className="col-lg-6 col-md-6 wow fadeInUp"
                      data-wow-duration="1.5s"
                      data-wow-delay=".4s"
                    >
                      <div className="single-faq mt-10">
                        <h3 className="title">
                          <span className="counter">50 </span>+
                        </h3>
                        <span>Project We Have Done</span>
                        <p>
                          Today, the term Information Technology (IT) has ballooned to
                          encompass is real.
                        </p>
                        <i className="fal fa-globe" />
                      </div>
                      {/* single faq */}
                    </div>
                    <div
                      className="col-lg-6 col-md-6 wow fadeInUp"
                      data-wow-duration="2s"
                      data-wow-delay=".5s"
                    >
                      <div className="single-faq mt-30">
                        <h3 className="title">
                          <span className="counter">10 </span>+
                        </h3>
                        <span>Project We Have Done</span>
                        <p>
                          Today, the term Information Technology (IT) has ballooned to
                          encompass is real.
                        </p>
                        <i className="fal fa-award" />
                      </div>
                      {/* single faq */}
                    </div>
                  </div>
                </div>
              </div>
              {/* row */}
            </div>
            {/* container */}
          </div>
         );
    }
}
 
export default FaqPart;