import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope, faPhone,

} from '@fortawesome/free-solid-svg-icons';


class Action2Part extends React.Component {

  render() { 
        return ( 
            <>
              {
                /*====== ACTION 2 PART START ======*/
              }
              <div
                className="action-2-area bg_cover"
                style={{ backgroundImage: "url(assets/images/action-bg.jpg)" }}
              >
                <div className="action-overlay">
                  <div className="container">
                    <div className="row align-items-center">
                      <div className="col-lg-5">
                        <div className="action-item mt-30">
                          <span>Get Action</span>
                          <h2 className="title">
                            Get A Quote <br />
                            right now.
                          </h2>
                        </div>
                        {/* action item */}
                      </div>
                      <div className="col-lg-7">
                        <div className="action-support d-flex mt-30">
                          <div
                            className="action-support-item wow bounceInUp"
                            data-wow-duration=".5s"
                            data-wow-delay=".3s"
                          >
                            <p>Mail Us</p>
                            <span>info@webmail.com</span>
                            <i className="fal fa-envelope" />
                            <FontAwesomeIcon icon={faEnvelope} />
                          </div>
                          <div
                            className="action-support-item action-support-item-2 wow bounceInUp"
                            data-wow-duration=".7s"
                            data-wow-delay=".7s"
                          >
                            <p>Make A Call</p>
                            <span>897 876 76 56 4</span>
                            <FontAwesomeIcon icon={faPhone} />
                          </div>
                        </div>
                        {/* action support */}
                      </div>
                    </div>
                    {/* row */}
                  </div>
                  {/* container */}
                </div>
              </div>;
              {
                /*====== ACTION 2 PART ENDS ======*/
              }
            </>
         );
    }
}
 
export default Action2Part;