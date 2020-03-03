import React from 'react';
import Footer from '../common/footer/Index';
import Header from '../common/header/Index';
import { Link } from 'react-router-dom';

class TeamPage extends React.Component {

  // componentDidMount() {
	// 	setTimeout(function () {
	// 		document.querySelector(".preloader").style = "display: none";
	// 	}, 5000);
  // }
    render() { 
        return ( 
          <>
          <Header/>
        {
          /*====== PAGE TITLE PART START ======*/
        }
        <div className="page-title-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="page-title-item text-center">
                  <h2 className="title">Team</h2>
                  <nav aria-label="breadcrumb">

                  
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link  to={"/"}>Home </Link>
                      </li>
                      <li className="breadcrumb-item active" aria-current="page">
                      Team
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
          {/*====== LEADERSHIP PART START ======*/}
          <div className="leadership-area padding gray-bg pt-70">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="leadership-item mt-50">
                    <img src="assets/images/leadership-1.jpg" alt="" />
                    <div className="leadership-content">
                      <h5 className="title">Rosalina Devid</h5>
                      <span>Founder</span>
                    </div>
                  </div>
                  {/* leadership item */}
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="leadership-item mt-50">
                    <img src="assets/images/leadership-2.jpg" alt="" />
                    <div className="leadership-content">
                      <h5 className="title">Kemina Dvlin</h5>
                      <span>CEO</span>
                    </div>
                  </div>
                  {/* leadership item */}
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="leadership-item mt-50">
                    <img src="assets/images/leadership-3.jpg" alt="" />
                    <div className="leadership-content">
                      <h5 className="title">Yellow D. Ballow</h5>
                      <span>Marketer</span>
                    </div>
                  </div>
                  {/* leadership item */}
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="leadership-item mt-50">
                    <img src="assets/images/leadership-4.jpg" alt="" />
                    <div className="leadership-content">
                      <h5 className="title">Rosalina Devid</h5>
                      <span>Founder</span>
                    </div>
                  </div>
                  {/* leadership item */}
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="leadership-item mt-50">
                    <img src="assets/images/leadership-5.jpg" alt="" />
                    <div className="leadership-content">
                      <h5 className="title">Kemina Dvlin</h5>
                      <span>CEO</span>
                    </div>
                  </div>
                  {/* leadership item */}
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="leadership-item mt-50">
                    <img src="assets/images/leadership-6.jpg" alt="" />
                    <div className="leadership-content">
                      <h5 className="title">Yellow D. Ballow</h5>
                      <span>Marketer</span>
                    </div>
                  </div>
                  {/* leadership item */}
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="leadership-item mt-50">
                    <img src="assets/images/leadership-7.jpg" alt="" />
                    <div className="leadership-content">
                      <h5 className="title">Rosalina Devid</h5>
                      <span>Founder</span>
                    </div>
                  </div>
                  {/* leadership item */}
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="leadership-item mt-50">
                    <img src="assets/images/leadership-8.jpg" alt="" />
                    <div className="leadership-content">
                      <h5 className="title">Kemina Dvlin</h5>
                      <span>CEO</span>
                    </div>
                  </div>
                  {/* leadership item */}
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="leadership-item mt-50">
                    <img src="assets/images/leadership-9.jpg" alt="" />
                    <div className="leadership-content">
                      <h5 className="title">Yellow D. Ballow</h5>
                      <span>Marketer</span>
                    </div>
                  </div>
                  {/* leadership item */}
                </div>
              </div>
              {/* row */}
            </div>
            {/* container */}
          </div>
          {/*====== LEADERSHIP PART ENDS ======*/}
          {/*====== TEAM JOIN PART START ======*/}
          <div className="team-join">
            <div className="container">
              <div className="join-bg">
                <div className="row align-items-center">
                  <div className="col-lg-8">
                    <div className="team-join-title">
                      <span>Join With us</span>
                      <h3 className="title">Let’s make some noise with us.</h3>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="team-join-btn text-lg-right text-left">
                      <Link  className="main-btn" to={"/home-1"}>
                        Apply Now
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="team-join-thumb">
                      <img src="assets/images/team-join-thumb.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*====== TEAM JOIN PART ENDS ======*/}
          {/*====== PROGRESS BAR PART START ======*/}
          <div className="Progress-bar-area mt-95 mb-120">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-3 col-md-6">
                  <div className="Progress-bar-item mt-30" id="circle1">
                    <div className="Progress-bar-content text-center">
                      <i className="fal fa-map" />
                      <h3 className="title">
                        <span className="counter">280</span>
                      </h3>
                    </div>
                  </div>
                  {/* Progress bar item */}
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="Progress-bar-item mt-30" id="circle2">
                    <div className="Progress-bar-content text-center">
                      <i className="fal fa-chart-bar" />
                      <h3 className="title">
                        <span className="counter">782</span>
                      </h3>
                    </div>
                  </div>
                  {/* Progress bar item */}
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="Progress-bar-item mt-30" id="circle3">
                    <div className="Progress-bar-content text-center">
                      <i className="fal fa-chart-pie" />
                      <h3 className="title">
                        <span className="counter">9</span>m
                      </h3>
                    </div>
                  </div>
                  {/* Progress bar item */}
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="Progress-bar-item mt-30" id="circle4">
                    <div className="Progress-bar-content text-center">
                      <i className="fal fa-user-friends" />
                      <h3 className="title">
                        <span className="counter">100</span>
                      </h3>
                    </div>
                  </div>
                </div>
                {/* Progress bar item */}
              </div>
              {/* row */}
            </div>
            {/* container */}
          </div>
          {/*====== PROGRESS BAR PART ENDS ======*/}
        </div>;
        <Footer/>
        </>
      );
    }
}
 
export default TeamPage;