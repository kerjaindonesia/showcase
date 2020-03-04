import React from 'react';
import { Link } from 'react-router-dom';

class ServicesTitlePart extends React.Component {

    render() { 
        return ( 
        <> 
          {/*====== SOLUTION PART START ======*/}
          <div
            className="solution-area bg_cover"
            style={{ backgroundImage: "url(assets/images/solution-bg.jpg)" }}
          >
            <div className="solution-overlay pt-120">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-8">
                    <div className="solution-box">
                      <div className="solution-content">
                        <h3 className="title">Get Better Solution For Your Skill Development</h3>
                        <p>
                          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                          accusantium doloremque laudantium totam rem aperiam eaque ipsa
                        </p>
                        <div className="solution-play text-right mr-30 d-block d-lg-none">
                          <Link  className="video-popup" to={"http://bit.ly/2VuPnrx"}>
                            <i className="fas fa-play" />
                          </Link>
                        </div>
                        {/* solution play */}
                      </div>
                    </div>
                    {/* solution box */}
                  </div>
                  <div className="col-lg-4">
                    <div className="solution-play text-right mr-30 d-none d-lg-block">
                      <Link  className="video-popup" to={"http://bit.ly/2VuPnrx"}>
                        <i className="fas fa-play" />
                      </Link>
                    </div>
                    {/* solution play */}
                  </div>
                </div>
                {/* row */}
              </div>
              {/* container */}
            </div>
          </div>
          {/*====== SOLUTION PART ENDS ======*/}
          {/*====== SERVICES TITLE PART START ======*/}
          <div className="services-title-area">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-12">
                  <div className="services-title-item text-center">
                    <div className="ring-shape" />
                    <span>Our latest services</span>
                    <h3 className="title">
                      We Offer Better Soluation For Your IT Business
                    </h3>
                  </div>
                  {/* services title item */}
                </div>
              </div>
              {/* row */}
            </div>
            {/* container */}
          </div>
          {/*====== SERVICES TITLE PART ENDS ======*/}
        </>
        );
    }
}
 
export default ServicesTitlePart;