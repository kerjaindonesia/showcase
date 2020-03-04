import React from 'react';
import { Link } from 'react-router-dom';

class MeetUsPart extends React.Component {

  render() { 
    return ( 
      <div className="meet-us-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="meet-us-item bg_cover d-flex align-items-center justify-content-between"
                style={{ backgroundImage: "url(/assets/images/meet-us-bg.jpg)" }}
              >
                <h2 className="title">
                  Persiapkan untuk <br /> Kesuksesan Anda
                </h2>
                <Link className="main-btn" to={"contact"}>
                  Temui Kami <i className="fal fa-long-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 
export default MeetUsPart;