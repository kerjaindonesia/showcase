import React from 'react';
import ModalVideo from 'react-modal-video'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
 faPlay,
} from '@fortawesome/free-solid-svg-icons';


class SolutionPart extends React.Component {

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
          <div className="solution-area bg_cover"
            style={{ backgroundImage: "url(/assets/images/solution-bg.jpg)" }}
          >
            <div className="solution-overlay pt-120">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-8">
                    <div className="solution-box">
                      <div className="solution-content">
                        <h3 className="title">Solusi yang lebih baik untuk pengembangan skill anda</h3>
                        <p>
                            Digital Learning Platform dan sertifikasi online yang memudahkan anda untuk memiliki keahlian yang diinginkan
                        </p>

                        {/* <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='TdSA7gkVYU0' onClose={() => this.setState({isOpen: false})} /> */}

                        {/* <div className="solution-play text-right mr-30 d-block d-lg-none">
                          <Link  to={"http://bit.ly/2VuPnrx"} className="video-popup" onClick={this.openModal}>
                            <FontAwesomeIcon icon={faPlay}/>
                          </Link>
                        </div> */}
                        {/* solution play */}
                      </div>
                    </div>
                    {/* solution box */}
                  </div>
                  <div className="col-lg-4">
                    <div className="solution-play text-right mr-30 d-none d-lg-block">
                    <ModalVideo 
                        channel='youtube' 
                        isOpen={this.state.isOpen} 
                        videoId='ZN2rs8ZQK5k' 
                        onClose={() => this.setState({isOpen: false})} 
                    />

                      <Link  className="video-popup"  onClick={this.openModal}>
                        <FontAwesomeIcon icon={faPlay}/>
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
         );
    }
}
 
export default SolutionPart;