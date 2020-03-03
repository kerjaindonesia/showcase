import React from 'react';
import Slider from "react-slick";
import SimplateDescription from "./SimplateDescription";
import {Link} from "react-router-dom";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;

    const nextArrowStyle = {
        display: "block",
        zIndex: '3',
        height: "30px",
        width: "30px",
        textAlign: "center",
        lineHeight: "30px",
        borderRadius: "50%",
        fontSize: "20px",
        cursor: "pointer",
        right: "-8px",
        "&::before": {
            marginRight: "14px",
            backgroundColor: "#000",
            color: "#222020",
        },
        "&::hover": {
            backgroundColor: "#fff",
        }
    };

    return (
        <div
            className={className}
            style={{ ...style,...nextArrowStyle}}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {


    const { className, style, onClick } = props;
    const prevArrowStyle = {
        display: "block",
        zIndex: '3',
        height: "30px",
        width: "30px",
        textAlign: "center",
        lineHeight: "30px",
        borderRadius: "50%",
        fontSize: "20px",
        cursor: "pointer",
        left: "-8px",
        "&::before": {
            marginLeft: "14px",
            backgroundColor: "#000",
            color: "#222020",
        },
        "&::hover": {
            backgroundColor: "#fff",
        }
    };
    return (
        <div
            className={className}
            style={{ ...style, ...prevArrowStyle }}
            onClick={onClick}
        />
    );
}


class ProductSlider extends React.Component {


    constructor(props) {
        super(props);
        this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this);

        this.state= {
            data: {  },
            sliderHover: false,
        };

    }


    onMouseEnterHandler() {
        const currentState = this.state.sliderHover;
        this.setState({
            sliderHover: !currentState,
        });
        console.log('enter');
    }

    render() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
        };
        return (
            <>
                <div className="row">
                    <div className="col-xl-10 col-lg-10 col-md-12 col-sm-12 mt-3">
                        <div style={{ display: 'block'}}
                            onMouseEnter={this.onMouseEnterHandler}
                            onMouseLeave={this.onMouseEnterHandler}
                            >
                            <Slider {...settings}>
                                <div>
                                    <img src="/assets/images/products/2.png"  alt={``}/>
                                </div>
                            </Slider>
                            <div className={`product-button`}
                                style={this.state.sliderHover? {display: "block"}: {display: 'none'}}
                                >

                                <div className={'button-group'} >
                                    <button type="button" className="btn btn-outline-primary" style={{marginRight: "5px"}}>Screenshots</button>
                                    <span> </span>
                                    <button type="button" className="btn btn-outline-secondary">Live Demo</button>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 d-md-none d-lg-block d-xl-block  mt-3 pl-0 mt-0 ml-0 ">
                        <div className="info">
                            <div>
                                <p>PRICE</p>
                                <strong>$56</strong>
                            </div>
                            <div>
                                <p>SALES</p>
                                <strong>756</strong>
                            </div>
                            <div>
                                <p>LOVED</p>
                                <strong>120</strong>
                            </div>
                            <div>
                                <p>TYPE</p>
                                <Link to={"#wordpress"}>WordPress</Link>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div id="product-content-inner">
                            <SimplateDescription/>
                        </div>
                    </div>
                </div>

            </>
        );
    }
}

export default ProductSlider;