import React from 'react';
import Slider from "react-slick";


import CorpuLogo from '../../../assets/images/Corpu.png'
import Imi from '../../../assets/images/Imi.png'
import Lsppm from '../../../assets/images/Lsppm.png'
import Lsptii from '../../../assets/images/Lsptii.png'
import Mastel from '../../../assets/images/Mastel.png'
import Metranet from '../../../assets/images/Metranet.png'
import Tbi from '../../../assets/images/Tbi.png'
import TelkomIndonesia from '../../../assets/images/TelkomIndonesia.png'


class Brand2Part extends React.Component {

    render() { 
      var settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 5,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        arrows: false
      };
        return ( 
          <div className="brand-2-area pb-120">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <Slider className="brand-active" {...settings}>
                    <div className="brand-item">
                      <img src={CorpuLogo} alt="brand name" />
                    </div>
                    <div className="brand-item">
                      <img src={Imi} alt="brand name" />
                    </div>
                    <div className="brand-item">
                      <img src={Lsppm} alt="brand name" />
                    </div>
                    <div className="brand-item">
                      <img src={Lsptii} alt="brand name" />
                    </div>
                    <div className="brand-item">
                      <img src={Mastel} alt="brand name" />
                    </div>
                    <div className="brand-item">
                      <img src={Metranet} alt="brand name" />
                    </div>
                    <div className="brand-item">
                      <img src={Tbi} alt="brand name" />
                    </div>
                    <div className="brand-item">
                      <img src={TelkomIndonesia} alt="brand name" />
                    </div>
                    </Slider>
                  {/* brand item */}
                </div>
              </div>
              {/* row */}
            </div>
            {/* container */}
          </div>
      );
    }
}
 
export default Brand2Part;