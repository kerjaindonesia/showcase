import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChalkboard, faDatabase,
   faFingerprint, faLaptopCode, faLongArrowAltRight,
} from '@fortawesome/free-solid-svg-icons';

class WhoWeAreArea extends React.Component {

    render() { 
        return ( 
          <div className="who-we-are-area pt-110 pb-120">
            <div className="container">
              <div className="row">
                <div
                  className="col-lg-5 wow fadeInLeft"
                  data-wow-duration="1s"
                  data-wow-delay="0s"
                >
                  <div className="section-title">
                    <span>siapa kami</span>
                    <h2 className="title">
                      Kami adalah Solusi pengembangan skill
                    </h2>
                  </div>
                  {/* section title */}
                </div>
                <div
                  className="col-lg-6 offset-lg-1 wow fadeInRight"
                  data-wow-duration="1.5s"
                  data-wow-delay="0s"
                >
                  <div className="section-title">
                    <p>
                      Kerjaindonesia menggabungkan berbagai materi dan sertifikasi berkualitas untuk memberikan anda 
                      pengalaman digital learning yang sesuai dengan kebutuhan anda dan organisasi anda. Materi dan sertifikat yang ada di Kerjaindonesia
                      bersumber dari penyedia materi dan sertifikas terpercaya. platform digital learning yang memungkinkan 
                      individu dan organisasi untuk melakukan pembelajaran secara online dan mendapatkan sertifikat dimanapun dan kapanpun
                    </p>
                  </div>
                  {/* section title */}
                </div>
              </div>
              <div className="row">
                <div
                  className="col-lg-3 col-md-6 col-sm-6 wow slideInUp"
                  data-wow-duration=".5s"
                  data-wow-delay="0s"
                >
                  <div className="what-we-do-item text-center mt-30">
                    <FontAwesomeIcon  icon={faLaptopCode} />
                    <h5 className="title">Learning Platform</h5>
                    <p>Platform pembelajaran digital yang terintegrasi</p>
                    <Link to={"case-details"}>
                      <FontAwesomeIcon icon={faLongArrowAltRight}/>
                    </Link>
                  </div>
                  {/* what we do item */}
                </div>
                <div
                  className="col-lg-3 col-md-6 col-sm-6 wow slideInUp"
                  data-wow-duration="1s"
                  data-wow-delay="0s"
                >
                  <div className="what-we-do-item text-center mt-30">
                    <FontAwesomeIcon icon={faFingerprint}  />
                    <h5 className="title">Marketplace</h5>
                    <p>100.000 Materi bertambah setiap bulannya</p>
                    <Link to={"case-details"}>
                      <FontAwesomeIcon icon={faLongArrowAltRight}/>
                    </Link>
                  </div>
                  {/* what we do item */}
                </div>
                <div
                  className="col-lg-3 col-md-6 col-sm-6 wow slideInUp"
                  data-wow-duration="1.5s"
                  data-wow-delay="0s"
                >
                  <div className="what-we-do-item text-center mt-30">
                    <FontAwesomeIcon icon={faChalkboard} />
                    <h5 className="title">Digitalization</h5>
                    <p>Sesuaikan konten anda dengan tren industri 4.0</p>
                    <Link to={"case-details"}>
                      <FontAwesomeIcon icon={faLongArrowAltRight}/>
                    </Link>
                  </div>
                  {/* what we do item */}
                </div>
                <div
                  className="col-lg-3 col-md-6 col-sm-6 wow slideInUp"
                  data-wow-duration="2s"
                  data-wow-delay="0s"
                >
                  <div className="what-we-do-item text-center mt-30">
                    <FontAwesomeIcon icon={faDatabase} />
                    <h5 className="title">Use Case Solution</h5>
                    <p>Solusi pengembangan skill organisasi anda</p>
                    <Link to={"case-details"}>
                      <FontAwesomeIcon icon={faLongArrowAltRight}/>
                    </Link>
                  </div>
                  {/* what we do item */}
                </div>
              </div>
              {/* row */}
            </div>
            {/* container */}
            <div className="what-we-are-shape-1">
              <img src="/assets/images/what-we-are-shape-1.png" alt="shape" />
            </div>
            <div className="what-we-are-shape-2">
              <img src="/assets/images/what-we-are-shape-2.png" alt="shape" />
            </div>
          </div>
         );
    }
}
 
export default WhoWeAreArea;