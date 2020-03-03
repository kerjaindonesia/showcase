import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLaptopCode, faServer, faTools,
} from '@fortawesome/free-solid-svg-icons';


class WhyChoosePart extends React.Component {

    render() { 
        return (
          <div className="why-choose-area">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="section-title text-center">
                    <span>why choose us</span>
                    <h2 className="title">
                      We Are Very Different Form Others Learning Solutions
                    </h2>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div
                  className="col-lg-4 col-md-6 col-sm-9 wow slideInUp"
                  data-wow-duration=".5s"
                  data-wow-delay="0s"
                >
                  <div className="single-choose text-center mt-30">
                    <div className="icon-box">
                      <span />
                      <FontAwesomeIcon icon={faLaptopCode} size={`4x`} style={{ color: 'white'}}/>
                    </div>
                    <h4 className="title">Modify Whole System</h4>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error voluptatem
                      accusantium doloremque laudan-tium totam rem aperiam eaque ipsa
                    </p>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 col-sm-9 wow slideInUp"
                  data-wow-duration="1s"
                  data-wow-delay="0s"
                >
                  <div className="single-choose text-center mt-30">
                    <div className="icon-box">
                      <span />
                      <FontAwesomeIcon icon={faServer} size={`4x`} style={{ color: 'white'}}/>
                    </div>
                    <h4 className="title">Beneficial Strategies</h4>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error voluptatem
                      accusantium doloremque laudan-tium totam rem aperiam eaque ipsa
                    </p>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 col-sm-9 wow slideInUp"
                  data-wow-duration="1.5s"
                  data-wow-delay="0s"
                >
                  <div className="single-choose text-center mt-30">
                    <div className="icon-box">
                      <span />
                      <FontAwesomeIcon icon={faTools} size={`4x`} style={{ color: 'white'}}/>
                    </div>
                    <h4 className="title">Automated Software</h4>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error voluptatem
                      accusantium doloremque laudan-tium totam rem aperiam eaque ipsa
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="choose-dot">
              <img src="assets/images/choose-dot.png" alt="" />
            </div>
            <div className="choose-shape">
              <img src="assets/images/choose-shape.png" alt="" />
            </div>
          </div>
        );
    }
}
 
export default WhyChoosePart;