import React from 'react';
import { Link } from 'react-router-dom';
import './Index.scss';

class Index extends React.Component {

    render() { 
        return ( 
          <div className="about-experience-area pb-120">
            <div className="container">
              <div className="row">
                <div className="col-lg-5">
                  <div className="experience-item">
                    <span>25 Years Of Experience</span>
                    <h2 className="title">Not only explore for job done.</h2>
                  </div>
                  {/* experience item */}
                </div>
                <div className="col-lg-6 offset-lg-1">
                  <div className="experience-item">
                    <p>
                      Does any industry face a more complex audience journey and marketing
                      sales process than B2B technology? Consider the number of people who
                      influence a sale, the length of the decision-making cycle, the
                      competing interests of the people who purchase, implement, manage,
                      and use the technology. It’s a lot meaningful content here.
                    </p>
                    <Link to={"about"}>Read More</Link>
                  </div>
                  {/* experience item */}
                </div>
              </div>
              <div className="row justify-content-center">
                <div
                  className="col-lg-4 col-md-6 col-sm-8 wow fadeInUp"
                  data-wow-duration=".5s"
                  data-wow-delay=".2s"
                >
                  <div className="single-experience mt-30">
                    <img src="assets/images/experience-1.jpg" alt="" />
                    <div className="experience-overlay">
                      <h5 className="title">Design &amp; Development</h5>
                      <p>
                        The functional goal of technical content is to help people use a
                        product.
                      </p>
                      <Link to={"about"}>Read More</Link>
                      <i className="fal fa-laptop-code" />
                    </div>
                  </div>
                  {/* single experience */}
                </div>
                <div
                  className="col-lg-4 col-md-6 col-sm-8 wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay=".4s"
                >
                  <div className="single-experience mt-30">
                    <img src="assets/images/experience-2.jpg" alt="" />
                    <div className="experience-overlay">
                      <h5 className="title">Technical Support</h5>
                      <p>
                        The functional goal of technical content is to help people use a
                        product.
                      </p>
                      <Link to="/home-1">Read More</Link>
                      <i className="fal fa-headphones-alt" />
                    </div>
                  </div>
                  {/* single experience */}
                </div>
                <div
                  className="col-lg-4 col-md-6 col-sm-8 wow fadeInUp"
                  data-wow-duration="1.5s"
                  data-wow-delay=".6s"
                >
                  <div className="single-experience mt-30">
                    <img src="assets/images/experience-3.jpg" alt="" />
                    <div className="experience-overlay">
                      <h5 className="title">Digital Marketing</h5>
                      <p>
                        The functional goal of technical content is to help people use a
                        product.
                      </p>
                      <Link to={"/about"}>Read More</Link>
                      <i className="fal fa-analytics" />
                    </div>
                  </div>
                  {/* single experience */}
                </div>
              </div>
              {/* row */}
            </div>
            {/* container */}
          </div>
         );
    }
}
 
export default Index;