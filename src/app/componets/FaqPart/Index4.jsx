import React from 'react';

class FaqPart extends React.Component {

    render() { 
        return ( 
          <div className="faq-area faq-area-3 pt-115">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 order-2 order-lg-1 d-none d-sm-block">
                  <div className="faq-thumb">
                    <div className="faq-thumb-1 text-right">
                      <img src="/assets/images/faq-thumb-1.jpg" alt="" />
                    </div>
                    <div className="faq-thumb-2">
                      <img src="assets/images/faq-thumb-2.jpg" alt="" />
                    </div>
                  </div> 
                </div>
                <div className="col-lg-6 order-1 order-lg-2">
                  <div className="section-title text-left">
                    <span>faq</span>
                    <h2 className="title">Get Every Single Answers Here.</h2>
                  </div> 
                  <div className="faq-accordion">
                    <div className="accordion" id="accordionExample">
                      <div className="card">
                        <div className="card-header" id="headingOne">
                          <a  href="#collapsedata" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Today, the term Information Technology
                          </a>
                        </div>
                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                          <div className="card-body">
                            <p>Today, the term Information Technology (IT) has ballooned to encompass is real. Today, the term Information Technology (IT) has ballooned to encompass is real.Today, the term Information Technology (IT) has ballooned to encompass is real. </p>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="headingTwo">
                          <a  className="collapsed" href="#collapsedata" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Over the years, a wide range of developments
                          </a>
                        </div>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                          <div className="card-body">
                            <p>Today, the term Information Technology (IT) has ballooned to encompass is real. Today, the term Information Technology (IT) has ballooned to encompass is real.Today, the term Information Technology (IT) has ballooned to encompass is real. </p>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="headingThree">
                          <a  className="collapsed" href="#collapsedata" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            As a result, most of us need to know
                          </a>
                        </div>
                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                          <div className="card-body">
                            <p>Today, the term Information Technology (IT) has ballooned to encompass is real. Today, the term Information Technology (IT) has ballooned to encompass is real.Today, the term Information Technology (IT) has ballooned to encompass is real. </p>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="headingFour">
                          <a  className="collapsed" href="#collapsedata" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            Our knowledge of computers will help us
                          </a>
                        </div>
                        <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                          <div className="card-body">
                            <p>Today, the term Information Technology (IT) has ballooned to encompass is real. Today, the term Information Technology (IT) has ballooned to encompass is real.Today, the term Information Technology (IT) has ballooned to encompass is real. </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> 
                </div>
              </div> 
            </div> 
          </div>

         );
    }
}
 
export default FaqPart;