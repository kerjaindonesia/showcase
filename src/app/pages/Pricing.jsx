import React from 'react';
import Footer from '../common/footer/Index';
import Header from '../common/header/Index';
import { Link } from 'react-router-dom';

class PricingPage extends React.Component {



    // componentDidMount() {
    // 	setTimeout(function () {
    // 		document.querySelector(".preloader").style = "display: none";
    // 	}, 5000);
    // }

    render() {
        return (
            <>
                <Header />

                {
                    /*====== PAGE TITLE PART START ======*/
                }
                <div className="page-title-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="page-title-item text-center">
                                    <h2 className="title">Our Plans</h2>
                                    <nav aria-label="breadcrumb">


                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item">
                                                <Link to={"/"}>Home </Link>
                                            </li>
                                            <li className="breadcrumb-item active" aria-current="page">
                                                pricing
                      </li>
                                        </ol>
                                    </nav>
                                </div>
                                {/* page title */}
                            </div>
                        </div>
                        {/* row */}
                    </div>
                    {/* container */}
                </div>
                {
                    /*====== PAGE TITLE PART ENDS ======*/
                }
                <div>
                    {/*====== SERVICES PLANS PART START ======*/}
                    <div className="services-plans-area">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-6">
                                    <div className="services-title mb-50">
                                        <span>plans</span>
                                        <h2 className="title">Here is plans</h2>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="plans-tab-btn d-flex justify-content-md-end justify-content-start">
                                        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                            <li className="nav-item">
                                                <Link
                                                    className="nav-link active"
                                                    id="pills-home-tab"
                                                    data-toggle="pill"
                                                    to={"#pills-home"}
                                                    role="tab"
                                                    aria-controls="pills-home"
                                                    aria-selected="true"
                                                >
                                                    Monthly
                        </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link
                                                    className="nav-link"
                                                    id="pills-profile-tab"
                                                    data-toggle="pill"
                                                    to={"#pills-profile"}
                                                    role="tab"
                                                    aria-controls="pills-profile"
                                                    aria-selected="false"
                                                >
                                                    Yearly
                        </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-content" id="pills-tabContent">
                                <div
                                    className="tab-pane fade show active"
                                    id="pills-home"
                                    role="tabpanel"
                                    aria-labelledby="pills-home-tab"
                                >
                                    <div className="row justify-content-center">
                                        <div className="col-lg-3 col-md-6 col-sm-8 mt-30">
                                            <div
                                                className="plans-item bg_cover text-center"
                                                style={{
                                                    backgroundImage: "url(assets/images/plans-thumb.jpg)"
                                                }}
                                            >
                                                <b>Early Birds</b>
                                                <h3 className="title">
                                                    $ <span>9</span>
                                                </h3>
                                                <span>Per Month</span>
                                                <p>
                                                    The functional goal of technical content is to help people use
                                                    a product successfully.
                        </p>
                                                <Link className="main-btn main-btn-2" to={"/"}>
                                                    Purchase Now
                        </Link>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-8 mt-30">
                                            <div
                                                className="plans-item bg_cover text-center"
                                                style={{
                                                    backgroundImage: "url(assets/images/plans-thumb.jpg)"
                                                }}
                                            >
                                                <b>Team</b>
                                                <h3 className="title">
                                                    $ <span>32</span>
                                                </h3>
                                                <span>Per Month</span>
                                                <p>
                                                    The functional goal of technical content is to help people use
                                                    a product successfully.
                        </p>
                                                <Link className="main-btn main-btn-2" to={"/"}>
                                                    Purchase Now
                        </Link>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-8 mt-30">
                                            <div
                                                className="plans-item bg_cover text-center"
                                                style={{
                                                    backgroundImage: "url(assets/images/plans-thumb.jpg)"
                                                }}
                                            >
                                                <b>Personal</b>
                                                <h3 className="title">
                                                    $ <span>69</span>
                                                </h3>
                                                <span>Per Month</span>
                                                <p>
                                                    The functional goal of technical content is to help people use
                                                    a product successfully.
                        </p>
                                                <Link className="main-btn main-btn-2" to={"/"}>
                                                    Purchase Now
                        </Link>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-8 mt-30">
                                            <div
                                                className="plans-item bg_cover text-center"
                                                style={{
                                                    backgroundImage: "url(assets/images/plans-thumb.jpg)"
                                                }}
                                            >
                                                <b>Plutinum</b>
                                                <h3 className="title">
                                                    $ <span>99</span>
                                                </h3>
                                                <span>Per Month</span>
                                                <p>
                                                    The functional goal of technical content is to help people use
                                                    a product successfully.
                        </p>
                                                <Link className="main-btn main-btn-2" to={"/"}>
                                                    Purchase Now
                        </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="pills-profile"
                                    role="tabpanel"
                                    aria-labelledby="pills-profile-tab"
                                >
                                    <div className="row justify-content-center">
                                        <div className="col-lg-3 col-md-6 col-sm-8 mt-30">
                                            <div
                                                className="plans-item bg_cover text-center"
                                                style={{
                                                    backgroundImage: "url(assets/images/plans-thumb.jpg)"
                                                }}
                                            >
                                                <b>Early Birds</b>
                                                <h3 className="title">
                                                    $ <span>56</span>
                                                </h3>
                                                <span>Per Month</span>
                                                <p>
                                                    The functional goal of technical content is to help people use
                                                    a product successfully.
                        </p>
                                                <Link className="main-btn main-btn-2" to={"/"}>
                                                    Purchase Now
                        </Link>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-8 mt-30">
                                            <div
                                                className="plans-item bg_cover text-center"
                                                style={{
                                                    backgroundImage: "url(assets/images/plans-thumb.jpg)"
                                                }}
                                            >
                                                <b>Team</b>
                                                <h3 className="title">
                                                    $ <span>99</span>
                                                </h3>
                                                <span>Per Month</span>
                                                <p>
                                                    The functional goal of technical content is to help people use
                                                    a product successfully.
                        </p>
                                                <Link className="main-btn main-btn-2" to={"/"}>
                                                    Purchase Now
                        </Link>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-8 mt-30">
                                            <div
                                                className="plans-item bg_cover text-center"
                                                style={{
                                                    backgroundImage: "url(assets/images/plans-thumb.jpg)"
                                                }}
                                            >
                                                <b>Personal</b>
                                                <h3 className="title">
                                                    $ <span>133</span>
                                                </h3>
                                                <span>Per Month</span>
                                                <p>
                                                    The functional goal of technical content is to help people use
                                                    a product successfully.
                        </p>
                                                <Link className="main-btn main-btn-2" to={"/"}>
                                                    Purchase Now
                        </Link>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-8 mt-30">
                                            <div
                                                className="plans-item bg_cover text-center"
                                                style={{
                                                    backgroundImage: "url(assets/images/plans-thumb.jpg)"
                                                }}
                                            >
                                                <b>Plutinum</b>
                                                <h3 className="title">
                                                    $ <span>599</span>
                                                </h3>
                                                <span>Per Month</span>
                                                <p>
                                                    The functional goal of technical content is to help people use
                                                    a product successfully.
                        </p>
                                                <Link className="main-btn main-btn-2" to={"/"}>
                                                    Purchase Now
                        </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*====== SERVICES PLANS PART ENDS ======*/}
                    {/*====== SERVICES PLANS PART START ======*/}
                    {/* <div className="services-plans-area services-plans-dark-area">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-6">
                  <div className="services-title mb-50">
                    <span>plans</span>
                    <h2 className="title">Here is plans</h2>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="plans-tab-btn d-flex justify-content-md-end justify-content-start">
                    <ul className="nav nav-pills mb-3" id="pills-tab-2" role="tablist">
                      <li className="nav-item">
                        <Link 
                          className="nav-link active"
                          id="pills-monthly-tab"
                          data-toggle="pill"
                          to={"#pills-monthly"}
                          role="tab"
                          aria-controls="pills-monthly"
                          aria-selected="true"
                        >
                          Monthly
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link 
                          className="nav-link"
                          id="pills-yearly-tab"
                          data-toggle="pill"
                          to={"#pills-yearly"}
                          role="tab"
                          aria-controls="pills-yearly"
                          aria-selected="false"
                        >
                          Yearly
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="tab-content" id="pills-tabContent-2">
                <div
                  className="tab-pane fade show active"
                  id="pills-monthly"
                  role="tabpanel"
                  aria-labelledby="pills-monthly-tab"
                >
                  <div className="row justify-content-center">
                    <div className="col-lg-3 col-md-6 col-sm-8 mt-30">
                      <div
                        className="plans-item bg_cover text-center"
                        style={{
                          backgroundImage: "url(assets/images/plans-thumb.jpg)"
                        }}
                      >
                        <b>Early Birds</b>
                        <h3 className="title">
                          $ <span>9</span>
                        </h3>
                        <span>Per Month</span>
                        <p>
                          The functional goal of technical content is to help people use
                          a product successfully.
                        </p>
                        <Link  className="main-btn main-btn-2" to={"/"}>
                          Purchase Now
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-8 mt-30">
                      <div
                        className="plans-item bg_cover text-center"
                        style={{
                          backgroundImage: "url(assets/images/plans-thumb.jpg)"
                        }}
                      >
                        <b className="item-2">Team</b>
                        <h3 className="title">
                          $ <span>32</span>
                        </h3>
                        <span>Per Month</span>
                        <p>
                          The functional goal of technical content is to help people use
                          a product successfully.
                        </p>
                        <Link  className="main-btn main-btn-2" to={"/"}>
                          Purchase Now
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-8 mt-30">
                      <div
                        className="plans-item bg_cover text-center"
                        style={{
                          backgroundImage: "url(assets/images/plans-thumb.jpg)"
                        }}
                      >
                        <b className="item-3">Personal</b>
                        <h3 className="title">
                          $ <span>69</span>
                        </h3>
                        <span>Per Month</span>
                        <p>
                          The functional goal of technical content is to help people use
                          a product successfully.
                        </p>
                        <Link  className="main-btn main-btn-2" to={"/"}>
                          Purchase Now
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-8 mt-30">
                      <div
                        className="plans-item bg_cover text-center"
                        style={{
                          backgroundImage: "url(assets/images/plans-thumb.jpg)"
                        }}
                      >
                        <b className="item-4">Plutinum</b>
                        <h3 className="title">
                          $ <span>99</span>
                        </h3>
                        <span>Per Month</span>
                        <p>
                          The functional goal of technical content is to help people use
                          a product successfully.
                        </p>
                        <Link  className="main-btn main-btn-2" to={"/"}>
                          Purchase Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-yearly"
                  role="tabpanel"
                  aria-labelledby="pills-yearly-tab"
                >
                  <div className="row justify-content-center">
                    <div className="col-lg-3 col-md-6 col-sm-8 mt-30">
                      <div
                        className="plans-item bg_cover text-center"
                        style={{
                          backgroundImage: "url(assets/images/plans-thumb.jpg)"
                        }}
                      >
                        <b>Early Birds</b>
                        <h3 className="title">
                          $ <span>56</span>
                        </h3>
                        <span>Per Month</span>
                        <p>
                          The functional goal of technical content is to help people use
                          a product successfully.
                        </p>
                        <Link  className="main-btn main-btn-2" to={"/"}>
                          Purchase Now
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-8 mt-30">
                      <div
                        className="plans-item bg_cover text-center"
                        style={{
                          backgroundImage: "url(assets/images/plans-thumb.jpg)"
                        }}
                      >
                        <b className="item-2">Team</b>
                        <h3 className="title">
                          $ <span>99</span>
                        </h3>
                        <span>Per Month</span>
                        <p>
                          The functional goal of technical content is to help people use
                          a product successfully.
                        </p>
                        <Link  className="main-btn main-btn-2" to={"/"}>
                          Purchase Now
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-8 mt-30">
                      <div
                        className="plans-item bg_cover text-center"
                        style={{
                          backgroundImage: "url(assets/images/plans-thumb.jpg)"
                        }}
                      >
                        <b className="item-3">Personal</b>
                        <h3 className="title">
                          $ <span>133</span>
                        </h3>
                        <span>Per Month</span>
                        <p>
                          The functional goal of technical content is to help people use
                          a product successfully.
                        </p>
                        <Link  className="main-btn main-btn-2" to={"/"}>
                          Purchase Now
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-8 mt-30">
                      <div
                        className="plans-item bg_cover text-center"
                        style={{
                          backgroundImage: "url(assets/images/plans-thumb.jpg)"
                        }}
                      >
                        <b className="item-4">Plutinum</b>
                        <h3 className="title">
                          $ <span>599</span>
                        </h3>
                        <span>Per Month</span>
                        <p>
                          The functional goal of technical content is to help people use
                          a product successfully.
                        </p>
                        <Link  className="main-btn main-btn-2" to={"/"}>
                          Purchase Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
                    {/*====== SERVICES PLANS PART ENDS ======*/}
                </div>;
        <Footer />
            </>
        );
    }
}

export default PricingPage;