import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagic,
} from '@fortawesome/free-solid-svg-icons';


class AbotFaqPart extends React.Component {

    render() { 
        return ( 
          <div
            className="about-faq-area pb-100 bg_cover"
            style={{ backgroundImage: "url(assets/images/faq-bg.jpg)" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="about-faq-content">
                    <span>FAQ</span>
                    <h2 className="title">Get Every answer from here.</h2>
                  </div>
                  <div className="faq-accordion-3 mt-30">
                    <div className="accordion" id="accordionExample">
                      <div
                        className="card wow fadeInLeft"
                        data-wow-duration=".1.2s"
                        data-wow-delay=".2s"
                      >
                        <div className="card-header" id="headingOne">
                          <Link
                            to={'about'}
                            data-toggle="collapse"
                            data-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >

                            <FontAwesomeIcon icon={faMagic}/>
                            Technical content may have persuasive objectives
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
                      {/* card */}
                      <div
                        className="card wow fadeInLeft"
                        data-wow-duration=".1.2s"
                        data-wow-delay=".3s"
                      >
                        <div className="card-header" id="headingTwo">
                          <Link
                            className="collapsed"
                            to={'about'}
                            data-toggle="collapse"
                            data-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            <i className="fal fa-magic" />
                            Technical content may have persuasive objectives
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
                      {/* card */}
                      <div
                        className="card wow fadeInLeft"
                        data-wow-duration=".1.2s"
                        data-wow-delay=".4s"
                      >
                        <div className="card-header" id="headingThree">
                          <Link
                            className="collapsed"
                            to={'about'}
                            data-toggle="collapse"
                            data-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            <i className="fal fa-magic" />
                            Technical content may have persuasive objectives
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
                      {/* card */}
                      <div
                        className="card wow fadeInLeft"
                        data-wow-duration=".1.2s"
                        data-wow-delay=".5s"
                      >
                        <div className="card-header" id="headingFour">
                          <Link
                            className="collapsed"
                            to={'about'}
                            data-toggle="collapse"
                            data-target="#collapseFour"
                            aria-expanded="false"
                            aria-controls="collapseFour"
                          >
                            <i className="fal fa-magic" />
                            Technical content may have persuasive objectives
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
                      {/* card */}
                      <div
                        className="card wow fadeInLeft"
                        data-wow-duration=".1.2s"
                        data-wow-delay=".6s"
                      >
                        <div className="card-header" id="headingFive">
                          <Link
                            className="collapsed"
                            to={'about'}
                            data-toggle="collapse"
                            data-target="#collapseFive"
                            aria-expanded="false"
                            aria-controls="collapseFive"
                          >
                            <i className="fal fa-magic" />
                            Technical content may have persuasive objectives
                          </Link>
                        </div>
                        <div
                          id="collapseFive"
                          className="collapse"
                          aria-labelledby="headingFive"
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
                      {/* card */}
                    </div>
                  </div>
                  {/* faq accordion */}
                </div>
              </div>
              {/* row */}
            </div>
            {/* container */}
          </div>
         );
    }
}
 
export default AbotFaqPart;