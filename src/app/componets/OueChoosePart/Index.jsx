import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";


class OueChoosePart extends React.Component {

    render() {
        return (
            <div className="our-choose-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section-title mt-30">
                                <span>Agensi terbaik untuk anda</span>
                                <h2 className="title">Mengapa memilih solusi kami</h2>
                            </div>
                            {/* section title */}
                            <div className="accordion" id="accordionExample">
                                <div className="card">
                                    <div className="card-header" id="headingOne">
                                        <Link
                                            to={'/'}
                                            data-toggle="collapse"
                                            data-target="#collapseOne"
                                            aria-expanded="true"
                                            aria-controls="collapseOne"
                                        >
                                            <FontAwesomeIcon icon={faLongArrowAltRight} />
                                            Kami menyediakan servis profesional
                                        </Link>
                                    </div>
                                    <div
                                        id="collapseOne"
                                        className="collapse"
                                        aria-labelledby="headingOne"
                                        data-parent="#accordionExample"
                                    >
                                        <div className="card-body">
                                            <p>
                                                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                                                odit aut fugit, sed quia consequuntur magni dolores eos qui
                                                ratione voluptatem sequi nesciunt. Neque porro quisquam
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* card */}
                                <div className="card">
                                    <div className="card-header" id="headingTwo">
                                        <Link
                                            // className="collapse"
                                            to={"/"}
                                            data-toggle="collapse"
                                            data-target="#collapseTwo"
                                            aria-expanded="false"
                                            aria-controls="collapseTwo"
                                        >
                                            <FontAwesomeIcon icon={faLongArrowAltRight} className={`pr-1`} />

                                            Stay Up, Stay Running
                                            &amp; Protected
                        </Link>
                                    </div>
                                    <div
                                        id="collapseTwo"
                                        className="collapse"
                                        aria-labelledby="headingTwo"
                                        data-parent="#accordionExample"
                                    >
                                        <div className="card-body">
                                            <p>
                                                ASu Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                                                odit aut fugit, sed quia consequuntur magni dolores eos qui
                                                ratione voluptatem sequi nesciunt. Neque porro quisquam
                          </p>
                                        </div>
                                    </div>
                                </div>
                                {/* card */}
                                <div className="card">
                                    <div className="card-header" id="headingThree">
                                        <Link
                                            // className="collapsed"
                                            to={"/"}
                                            data-toggle="collapse"
                                            data-target="#collapseThree"
                                            aria-expanded="false"
                                            aria-controls="collapseThree"
                                        >

                                            <FontAwesomeIcon icon={faLongArrowAltRight} className={`pr-1`} />
                                            Our Experienced
                                            Experts
                        </Link>
                                    </div>
                                    <div
                                        id="collapseThree"
                                        className="collapse"
                                        aria-labelledby="headingThree"
                                        data-parent="#accordionExample"
                                    >
                                        <div className="card-body">
                                            <p>
                                                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                                                odit aut fugit, sed quia consequuntur magni dolores eos qui
                                                ratione voluptatem sequi nesciunt. Neque porro quisquam
                          </p>
                                        </div>
                                    </div>
                                </div>
                                {/* card */}
                                <div className="card">
                                    <div className="card-header" id="headingFour">
                                        <Link
                                            // className="collapsed"
                                            to={"/"}
                                            data-toggle="collapse"
                                            data-target="#collapseFour"
                                            aria-expanded="false"
                                            aria-controls="collapseFour"
                                        >
                                            <FontAwesomeIcon icon={faLongArrowAltRight} className={`pr-1`} /> Management Engineering
                                            System
                        </Link>
                                    </div>
                                    <div
                                        id="collapseFour"
                                        className="collapse"
                                        aria-labelledby="headingFour"
                                        data-parent="#accordionExample"
                                    >
                                        <div className="card-body">
                                            <p>
                                                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                                                odit aut fugit, sed quia consequuntur magni dolores eos qui
                                                ratione voluptatem sequi nesciunt. Neque porro quisquam
                          </p>
                                        </div>
                                    </div>
                                </div>
                                {/* card */}
                            </div>
                            {/* accordion */}
                        </div>
                        <div className="col-lg-6">
                            <div className="our-choose-counter-area mt-30">
                                <div className="row">
                                    <div className="col-md-6 col-sm-6">
                                        <div
                                            className="our-choose-counter wow slideInUp"
                                            data-wow-duration=".5s"
                                            data-wow-delay="0s"
                                        >
                                            <sub>
                                                <span className="counter">569</span> <sup>+</sup>
                                            </sub>
                                            <span>Projct Complate</span>
                                            <p>
                                                Sed ut perspiciatis unde omnis iste natus error sit
                                                voluptsantium doloremque laudantium
                          </p>
                                        </div>
                                        <div
                                            className="our-choose-counter wow slideInUp mt-55"
                                            data-wow-duration="1s"
                                            data-wow-delay="0s"
                                        >
                                            <sub>
                                                <span className="counter">783</span> <sup>+</sup>
                                            </sub>
                                            <span>Business Partners</span>
                                            <p>
                                                Sed ut perspiciatis unde omnis iste natus error sit
                                                voluptsantium doloremque laudantium
                          </p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <div
                                            className="our-choose-counter wow slideInUp"
                                            data-wow-duration="1.5s"
                                            data-wow-delay="0s"
                                        >
                                            <sub>
                                                <span className="counter">356</span> <sup>+</sup>
                                            </sub>
                                            <span>Happy Clients</span>
                                            <p>
                                                Sed ut perspiciatis unde omnis iste natus error sit
                                                voluptsantium doloremque laudantium
                          </p>
                                        </div>
                                        <div
                                            className="our-choose-counter wow slideInUp mt-55"
                                            data-wow-duration="2s"
                                            data-wow-delay="0s"
                                        >
                                            <sub>
                                                <span className="counter">894</span> <sup>+</sup>
                                            </sub>
                                            <span>IT Consultant</span>
                                            <p>
                                                Sed ut perspiciatis unde omnis iste natus error sit
                                                voluptsantium doloremque laudantium
                          </p>
                                        </div>
                                    </div>
                                    {/* our choose counter */}
                                </div>
                                {/* row */}
                            </div>
                        </div>
                    </div>
                    {/* row */}
                </div>
                {/* container */}
            </div>
        );
    }
}

export default OueChoosePart;