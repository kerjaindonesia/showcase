import React from 'react';
import ModalVideo from 'react-modal-video'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlay} from "@fortawesome/free-solid-svg-icons";
import backgroundVideo from '../../../assets/images/video-bg.jpg'

class PortfolioPart extends React.Component {
      
  constructor () {
    super()
    this.state = {
      isOpen: false
    }
    this.openModal = this.openModal.bind(this)
  }

  openModal = event  => {
    this.setState({isOpen: true});
    event.preventDefault();
  }

    render() { 
      
        return ( 
          <>
            <div
            className="video-area bg_cover"
            style={{ backgroundImage: `url(${backgroundVideo})` }}
          >
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="video-item">
                  <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='TdSA7gkVYU0' onClose={() => this.setState({isOpen: false})} />
                    <Link  className="video-popup" to={"http://bit.ly/2VuPnrx"} onClick={this.openModal}>
                      <FontAwesomeIcon icon={faPlay} />

                    </Link>
                    <br />
                    <span>Portfolio</span>
                    <h3 className="title">We Have Done So Much Stuffs</h3>
                  </div>
                  {/* video item */}
                </div>
              </div>
              {/* row */}
            </div>
            {/* container */}
            <div className="video-thumb-1">
              <img src="/assets/images/video-item-1.png" alt="1" />
            </div>
            <div className="video-thumb-2">
              <img src="/assets/images/video-item-2.png" alt="2" />
            </div>
          </div>
         
          <div className="portfolio-area">
            <div className="container">
              <div className="row portfolio-active">
                
                <div className="col-lg-4">
                  <div className="single-portfolio mb-30">
                    <div className="portfolio-thumb">
                      <img src="/assets/images/portfolio-1.jpg" alt="sad" />
                    </div>
                    <div className="portfolio-content">
                      <span>LMS Platform</span>
                      <h5 className="title">
                        Integrated Learning Management System
                      </h5>
                      <p>
                        Today, the term Information Technology (IT) has ballooned to
                        encompass many aspects of Learning experience
                      </p>
                    </div>
                  </div>
                  {/* single portfolio */}
                </div>
                <div className="col-lg-4">
                  <div className="single-portfolio mb-30">
                    <div className="portfolio-thumb">
                      <img src="/assets/images/portfolio-2.jpg" alt="ss" />
                    </div>
                    <div className="portfolio-content">
                      <span>Marketplace</span>
                      <h5 className="title">
                        Where source of education meet
                      </h5>
                      <p>
                        selected third parties and multichannel content coreator provide succesfull materials
                      </p>
                    </div>
                  </div>
                  {/* single portfolio */}
                </div>
                <div className="col-lg-4">
                  <div className="single-portfolio mb-30">
                    <div className="portfolio-thumb">
                      <img src="/assets/images/portfolio-3.jpg" alt="" />
                    </div>
                    <div className="portfolio-content">
                      <span>Content Digitalization</span>
                      <h5 className="title">Has ballooned to encomp ass many aspects</h5>
                      <p>
                        Today, the term Information Technology (IT) has ballooned to
                        encompass many aspects of digitalization
                      </p>
                    </div>
                  </div>
                  {/* single portfolio */}
                </div>
              </div>
              {/* row */}
            </div>
            {/* container */}
          </div>
          </>
         );
    }
}
 
export default PortfolioPart;