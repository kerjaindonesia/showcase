import React from 'react';

class CounterPart extends React.Component {

    render() { 
      return ( 
        <div className="counter-area bg_cover pt-80 pb-115"
          style={{ backgroundImage: "url(assets/images/video-bg.jpg)" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="counter-item mt-30">
                  <h3 className="title">
                    <span className="counter">869</span>+
                  </h3>
                  <p>Project We Have Done</p>
                  <i className="fal fa-box" />
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="counter-item mt-30">
                  <h3 className="title">
                    <span className="counter">100</span>+
                  </h3>
                  <p>People Involved With Us</p>
                  <i className="fal fa-users" />
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="counter-item mt-30">
                  <h3 className="title">
                    <span className="counter">50</span>+
                  </h3>
                  <p>We Are Worldwide</p>
                  <i className="fal fa-globe" />
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="counter-item mt-30">
                  <h3 className="title">
                    <span className="counter">10</span>+
                  </h3>
                  <p>We Got Too Much Awards</p>
                  <i className="fal fa-award" />
                </div>
              </div>
            </div>
          </div>
        </div>
        );
    }
}
 
export default CounterPart;