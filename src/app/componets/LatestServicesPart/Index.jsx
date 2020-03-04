import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLongArrowAltRight,
} from '@fortawesome/free-solid-svg-icons';



class LatestServicesPart extends React.Component {

    render() { 
        return ( 
          <>
          <div className="services-title-area">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-12">
                  <div className="services-title-item text-center">
                    <div className="ring-shape" />
                    {/* <span>Layanan terbaru kami</span> */}
                    <h3 className="title">Layanan terbaru kami</h3>
                  </div> 
                </div>
              </div> 
            </div> 
          </div>
          <div className="latest-services-area">
            <div className="container">
              <div className="row justify-content-center">
                <div
                  className="col-lg-4 col-md-6 col-sm-9 wow fadeInUp"
                  data-wow-duration=".5s"
                  data-wow-delay="0s"
                >
                  <div className="single-services mt-30 mb-55">
                    <div className="services-thumb">
                      <img src="/assets/images/services-4.1.jpg" alt="" />
                    </div>
                    <div className="services-content">
                      <h4 className="title">LMS Platform</h4>
                      <p>
                        Digital Learning Platform untuk pengalaman pembelajaran digital organisasi anda yang lebih baik
                      </p>
                      <Link to={"services-details"}>
                        Read More
                        <FontAwesomeIcon icon={faLongArrowAltRight} className={`pl-1`}/>
                      </Link>
                    </div>
                  </div>
                  {/* single services */}
                </div>
                <div
                  className="col-lg-4 col-md-6 col-sm-9 wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay="0s"
                >
                  <div className="single-services mt-30 mb-55">
                    <div className="services-thumb">
                      <img src="assets/images/services-4.2.jpg" alt="" />
                    </div>
                    <div className="services-content">
                      <h4 className="title">Online Recruitment</h4>
                      <p>
                        Solusi rekrutmen online yang memudahkan proses pendaftaran, verifikasi maupun seleksi calon karyawan
                      </p>
                      <Link to={"services-details"}>
                        Read More <FontAwesomeIcon icon={faLongArrowAltRight} className={`pl-1`}/>
                      </Link>
                    </div>
                  </div>
                  {/* single services */}
                </div>
                <div
                  className="col-lg-4 col-md-6 col-sm-9 wow fadeInUp"
                  data-wow-duration="1.5s"
                  data-wow-delay="0s"
                >
                  <div className="single-services mt-30 mb-55">
                    <div className="services-thumb">
                      <img src="assets/images/services-4.3.jpg" alt="" />
                    </div>
                    <div className="services-content">
                      <h4 className="title">Big Data &amp; Analytics</h4>
                      <p>
                        Rekam jejak edukasi individu secara nasional untuk kebijakan yang tepat sasaran,
                        pencarian talent dan pemasaran global
                      </p>
                      <Link to={"services-details"}>
                        Read More <FontAwesomeIcon icon={faLongArrowAltRight} className={`pl-1`}/>
                      </Link>
                    </div>
                  </div>
                  {/* single services */}
                </div>
                <div
                  className="col-lg-4 col-md-6 col-sm-9 wow fadeInUp"
                  data-wow-duration="2s"
                  data-wow-delay="0s"
                >
                  <div className="single-services mt-30 mb-55">
                    <div className="services-thumb">
                      <img src="/assets/images/services-4.4.jpg" alt="" />
                    </div>
                    <div className="services-content">
                      <h4 className="title">Webinar</h4>
                      <p>
                        Alat flexible yang menyediakan berbagai fitur untuk kebutuhan video conference organisasi anda 
                      </p>
                      <Link to={"services-details"}>
                        Read More <FontAwesomeIcon icon={faLongArrowAltRight} className={`pl-1`}/>
                      </Link>
                    </div>
                  </div>
                  {/* single services */}
                </div>
                <div
                  className="col-lg-4 col-md-6 col-sm-9 wow fadeInUp"
                  data-wow-duration="2.5s"
                  data-wow-delay="0s"
                >
                  <div className="single-services mt-30 mb-55">
                    <div className="services-thumb">
                      <img src="/assets/images/services-4.5.jpg" alt="" />
                    </div>
                    <div className="services-content">
                      <h4 className="title">API Content</h4>
                      <p>
                        Allows apps to interact directly with the Content Agregator, vastly increasing the efficiency of managing large or complex accounts
                      </p>
                      <Link to={"services-details"}>
                        Read More <FontAwesomeIcon icon={faLongArrowAltRight} className={`pl-1`}/>
                      </Link>
                    </div>
                  </div>
                  {/* single services */}
                </div>
                <div
                  className="col-lg-4 col-md-6 col-sm-9 wow fadeInUp"
                  data-wow-duration="3s"
                  data-wow-delay="0s"
                >
                  <div className="single-services mt-30 mb-55">
                    <div className="services-thumb">
                      <img src="/assets/images/services-4.6.jpg" alt="" />
                    </div>
                    <div className="services-content">
                      <h4 className="title">Content Digitalization</h4>
                      <p>
                        Digitalisasi konten sehingga materi yang anda miliki mengikuti perkembangan teknologi di industri 4.0
                      </p>
                      <Link to={"services-details"}>
                        Read More <FontAwesomeIcon icon={faLongArrowAltRight} className={`pl-1`}/>
                      </Link>
                    </div>
                  </div>
                  {/* single services */}
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
 
export default LatestServicesPart;