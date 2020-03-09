import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faCode } from '@fortawesome/free-solid-svg-icons';
// import LogoKjiAuth from '../../../assets/images/logokji.png'

class Banner2 extends React.Component {

    render() {
        return (
            <div className="banner-area">
                <div className="container position-relative">
                    <div className="row">
                        <div className="col-lg-10">
                            <div className="banner-content pt-100">
                                <span className="wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".1s" style={{ visibility: 'visible', animationDuration: '1s', animationDelay: '0.1s', animationName: 'fadeInLeft' }}>
                                    Dapatkan Semua Service disini.
                                </span>
                                <h1 className="title wow fadeInLeft" data-wow-duration="2s" data-wow-delay=".5s" style={{ visibility: 'visible', animationDuration: '2s', animationDelay: '0.5s', animationName: 'fadeInLeft' }}>
                                    Produk, Konten dan Solusi Digital Learning
                                </h1>
                                <ul>
                                    <li>
                                        <Link className="fadeInUp wow" data-wow-duration="1s" data-wow-delay="1s" to={"/cases/lms-platform"}
                                            style={{ visibility: 'visible', animationDuration: '1s', animationDelay: '1s', animationName: 'fadeInUp' }}>
                                            <span>
                                                <FontAwesomeIcon icon={faBookOpen} />
                                            </span>
                                            <p>Platform</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="btn-2 fadeInUp wow" data-wow-duration="1s" data-wow-delay="1.5s" to={"/cases/marketplace"}
                                            style={{ visibility: 'visible', animationDuration: '1s', animationDelay: '1.5s', animationName: 'fadeInUp' }}>
                                            <span>
                                                <FontAwesomeIcon icon={faCode} />
                                            </span>
                                            <p>Marketplace</p>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* <div className="banner-shape d-none d-lg-block">
                <img src={LogoKjiAuth} alt="" />
              </div> */}
                </div>
            </div>
        );
    }
}

export default Banner2;