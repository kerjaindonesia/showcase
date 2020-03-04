import React from 'react';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAngleLeft,
    faAngleRight,
    faLongArrowAltRight,
} from '@fortawesome/free-solid-svg-icons';




function NextArrow(props) {
    const { style, onClick } = props;
    return (
        <span onClick={onClick} className="next slick-arrow" style={style}>
            <FontAwesomeIcon icon={faAngleRight} />
        </span>
    );
}

function PrevArrow(props) {
    const { style, onClick } = props;
    return (
        <span onClick={onClick} className="prev slick-arrow" style={style}>
            <FontAwesomeIcon icon={faAngleLeft} />
        </span>
    );
}




const Banner = () => {
    var settings = {
        autoplay: true,
        autoplaySpeed: 10000,
        fade: true,
        arrows: true,
        initialSlide: 0,
        dots: false,
        draggable: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1330,
                settings: {
                    arrows: false
                }
            }
        ],
        //  className: 'slick-slider-fade',
    };

    const handleClick = (a) => {
        a.preventDefault()
        console.log('asem');
    }

    return (
        <>
            <Slider className="banner-active"  {...settings}>
                <div className="single-banner bg_cover bg_img_1 ">
                    <img src="" alt="" />
                    <div className="banner-overlay">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-9">
                                    <div className="banner-content">
                                        <span data-animation="fadeInLeft" data-delay="0.5s">
                                            Learning Management System
                                        </span>
                                        <h1
                                            data-animation="fadeInLeft"
                                            data-delay="0.9s"
                                            className="title"
                                        >
                                            Best LMS Soluations
                                        </h1>
                                        <p data-animation="fadeInLeft" data-delay="1.3s">
                                            my.Kerjaindonesia adalah digital learning platform dan Sertifikasi online
                                            yang memudahkan anda untuk memiliki keahlian yang diinginkan
                                        </p>

                                        <Link
                                            data-animation="fadeInUp"
                                            data-delay="1.6s"
                                            className="main-btn"
                                            to={"about"}
                                        >
                                            My.Kerjaindonesia<FontAwesomeIcon icon={faLongArrowAltRight} />
                                        </Link>
                                        <div className="main-btn" 
                                            onClick={()=> handleClick()}
                                        >sdsadsa</div>
                                    </div>
                                    {/* banner content */}
                                </div>
                            </div>
                            {/* row */}
                        </div>
                        {/* container */}
                    </div>
                </div>

                <div className="single-banner bg_cover  bg_img_2">
                    <div className="banner-overlay">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-9">
                                    <div className="banner-content">
                                        <span data-animation="fadeInLeft" data-delay="0.5s">
                                            Marketplace
                                        </span>
                                        <h1
                                            data-animation="fadeInLeft"
                                            data-delay="0.9s"
                                            className="title"
                                        >
                                            Best Content <br />
                                            Marketplace
                      </h1>
                                        <p data-animation="fadeInLeft" data-delay="1.3s">
                                            Kumpulan kursus terbesar di Asia, Berbagai pilihan  materi online lebih dari 100.000 kursus bertambah setiap bulan
                      </p>
                                        <a
                                            href='https://dev.kerjaindonesia.xyz'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            // data-animation="fadeInUp"
                                            // data-delay="1.6s"
                                            className="main-btn"
                                        // to={"services"}
                                        >
                                            Marketplace <FontAwesomeIcon icon={faLongArrowAltRight} />
                                        </a>
                                    </div>
                                    {/* banner content */}
                                </div>
                            </div>
                            {/* row */}
                        </div>
                        {/* container */}
                    </div>
                </div>


                <div className="single-banner bg_cover  bg_img_3" >
                    <div className="banner-overlay">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-9">
                                    <div className="banner-content">
                                        <span data-animation="fadeInLeft" data-delay="0.5s">
                                            Learning Environment Consulting
                                         </span>
                                        <h1
                                            data-animation="fadeInLeft"
                                            data-delay="0.9s"
                                            className="title"
                                        >
                                            Learning  <br />
                                            Provider Agency
                                        </h1>
                                        <p data-animation="fadeInLeft" data-delay="1.3s">
                                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                            accusantium doloremda tium totam rem aperiam eaque ipsa quae ab
                                            illo inventore veritatis
                                        </p>
                                        <Link
                                            data-animation="fadeInUp"
                                            data-delay="1.6s"
                                            className="main-btn"
                                            to={"services"}
                                        >
                                            Our Services <FontAwesomeIcon icon={faLongArrowAltRight} />
                                        </Link>
                                    </div>
                                    {/* banner content */}
                                </div>
                            </div>
                            {/* row */}
                        </div>
                        {/* container */}
                    </div>
                </div>

            </Slider>
        </>
    )
}

export default Banner;

