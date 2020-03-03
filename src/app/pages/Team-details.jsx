import React from 'react';
import Footer from '../common/footer/Index';
import Header from '../common/header/Index';
import ProgressBarPart from '../componets/progressBarPart/Index';
import AbotFaqPart from '../componets/abotFaqPart/Index';

import { Link } from 'react-router-dom';


class TeamDetailsPage extends React.Component {

  // componentDidMount() {
	// 	setTimeout(function () {
	// 		document.querySelector(".preloader").style = "display: none";
	// 	}, 5000);
  // }

    render() { 
        return ( 
          <>
          <Header/>

          {/* /*====== PAGE TITLE PART START ======*/}

        <div className="page-title-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="page-title-item text-center">
                  <h2 className="title">Team Details</h2>
                  <nav aria-label="breadcrumb">

                  
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link  to="/">Home </Link>
                      </li>
                      <li className="breadcrumb-item active" aria-current="page">
                      Team Details
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
          {/* /*====== PAGE TITLE PART ENDS ======*/

          /*====== TEAM DETAILS PART START ======*/ }

        <div className="team-details-area pt-120">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="team-details-thumb">
                  <img src="assets/images/team-details-thumb.jpg" alt="" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="team-details-content">
                  <h4 className="title">Rosalina D. Williamson</h4>
                  <span>Founder</span>
                  <p className="pb-15">
                    Does any industry face a more complex audience journey and marketing
                    sales process than B2B technology? Consider the number of people who
                    influence a sale, the length of the decision-making cycle, the
                    competing interests of the people who purchase, implement, manage,
                    and use the technology. It’s a lot meaningful content here.
                  </p>
                  <p>
                    As a result, most of us need to know how to use computers. Our
                    knowledge of computers will help us to tap into challenging career
                    opportunities and enhance the quality of our lives. It is imperative
                    that quality students be encouraged and motivated to study computers
                    and become capable and responsible IT professionals. The education
                    model needs to align itself with dynamically changing technology to
                    meet the growing need for skilled IT manpower and deliver
                    state-of-the-art, industry relevant and technology ready programs.​
                  </p>
                  <ul>
                    <li>
                      <Link  to={"/"}>
                        <i className="fab fa-facebook-f" />
                      </Link>
                    </li>
                    <li>
                      <Link  to={"/"}>
                        <i className="fab fa-twitter" />
                      </Link>
                    </li>
                    <li>
                      <Link  to={"/"}>
                        <i className="fab fa-behance" />
                      </Link>
                    </li>
                    <li>
                      <Link  to={"/"}>
                        <i className="fab fa-linkedin-in" />
                      </Link>
                    </li>
                    <li>
                      <Link  to={"/"}>
                        <i className="fab fa-youtube" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

          {/* /*====== TEAM DETAILS PART ENDS ======*/}
    

        <ProgressBarPart/>
        <AbotFaqPart/>

        <Footer/>
        </>
      );
    }
}
 
export default TeamDetailsPage;