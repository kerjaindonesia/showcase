import React from 'react';
import { Link } from 'react-router-dom';

class AnswersPart extends React.Component {

  render() { 
        return ( 
            <>
            {
              /*====== ANSWERS PART START ======*/
            }
            <div className="asnwers-area pt-105 pb-100 gray-bg">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="section-title-2">
                      <h2 className="title">Get Single Answers</h2>
                      <p>
                        Does any industry face a more complex audience journey and marketing
                        sales process than B2B technology.
                      </p>
                    </div>
                    {/* section title 2 */}
                    <div className="faq-accordion-2 mt-30">
                      <div className="accordion" id="accordionExample">
                        <div
                          className="card wow fadeInLeft"
                          data-wow-duration=".5s"
                          data-wow-delay=".3s"
                        >
                          <div className="card-header" id="headingOne">
                            <Link
                              to={"index"}
                              data-toggle="collapse"
                              data-target="#collapseOne"
                              aria-expanded="true"
                              aria-controls="collapseOne"
                            >
                              Does any industry a more audience journey?
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
                          data-wow-duration=".6s"
                          data-wow-delay=".4s"
                        >
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
                        {/* card */}
                        <div
                          className="card wow fadeInLeft"
                          data-wow-duration=".7s"
                          data-wow-delay=".5s"
                        >
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
                        {/* card */}
                        <div
                          className="card wow fadeInLeft"
                          data-wow-duration=".8s"
                          data-wow-delay=".6s"
                        >
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
                        {/* card */}
                        <div
                          className="card wow fadeInLeft"
                          data-wow-duration=".9s"
                          data-wow-delay=".7s"
                        >
                          <div className="card-header" id="headingFive">
                            <Link
                              className="collapsed"
                              to={"/"}
                              data-toggle="collapse"
                              data-target="#collapseFive"
                              aria-expanded="false"
                              aria-controls="collapseFive"
                            >
                              Our knowledge of computers will help us
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
                  <div className="col-lg-6">
                    <div className="answers-thumb">
                      <div className="answers-thumb-1 text-right">
                        <img src="assets/images/answers-thumb-1.jpg" alt="" />
                      </div>
                      <div className="answers-thumb-2">
                        <img src="assets/images/answers-thumb-2.jpg" alt="" />
                      </div>
                    </div>
                    {/* answers thumb */}
                  </div>
                </div>
                {/* row */}
              </div>
              {/* containter */}
            </div>;
            {
              /*====== ANSWERS PART ENDS ======*/
            }
            </>
         );
    }
}
 
export default AnswersPart;