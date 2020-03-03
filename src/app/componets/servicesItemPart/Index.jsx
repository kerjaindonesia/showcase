import React from 'react';

class ServicesItemPart extends React.Component {

    render() { 
        return ( 
          <div className="services-item-area pt-90 pb-120">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 col-sm-8">
                  <div className="single-services-item mt-30">
                    <img src="assets/images/services-thumb-1.jpg" alt="" />
                    <div className="services-overlay">
                      <i className="fal fa-eye-dropper" />
                      <h4 className="title">UI/UX Design</h4>
                      <p>
                        The functional goal of technical content is to help people use a
                        product successfully. The business goal must tie the content.
                      </p>
                    </div>
                  </div>
                  {/* single services */}
                </div>
                <div className="col-lg-4 col-md-6 col-sm-8">
                  <div className="single-services-item mt-30">
                    <img src="assets/images/services-thumb-2.jpg" alt="" />
                    <div className="services-overlay">
                      <i className="fal fa-gavel" />
                      <h4 className="title">IT Consultancy</h4>
                      <p>
                        The functional goal of technical content is to help people use a
                        product successfully. The business goal must tie the content.
                      </p>
                    </div>
                  </div>
                  {/* single services */}
                </div>
                <div className="col-lg-4 col-md-6 col-sm-8">
                  <div className="single-services-item mt-30">
                    <img src="assets/images/services-thumb-3.jpg" alt="" />
                    <div className="services-overlay">
                      <i className="fal fa-map-marked-alt" />
                      <h4 className="title">Technology Prof.</h4>
                      <p>
                        The functional goal of technical content is to help people use a
                        product successfully. The business goal must tie the content.
                      </p>
                    </div>
                  </div>
                  {/* single services */}
                </div>
                <div className="col-lg-4 col-md-6 col-sm-8">
                  <div className="single-services-item mt-30">
                    <img src="assets/images/services-thumb-5.jpg" alt="" />
                    <div className="services-overlay">
                      <i className="fal fa-hurricane" />
                      <h4 className="title">Web Development</h4>
                      <p>
                        The functional goal of technical content is to help people use a
                        product successfully. The business goal must tie the content.
                      </p>
                    </div>
                  </div>
                  {/* single services */}
                </div>
                <div className="col-lg-4 col-md-6 col-sm-8">
                  <div className="single-services-item mt-30">
                    <img src="assets/images/services-thumb-4.jpg" alt="" />
                    <div className="services-overlay">
                      <i className="fal fa-bezier-curve" />
                      <h4 className="title">App Development</h4>
                      <p>
                        The functional goal of technical content is to help people use a
                        product successfully. The business goal must tie the content.
                      </p>
                    </div>
                  </div>
                  {/* single services */}
                </div>
                <div className="col-lg-4 col-md-6 col-sm-8">
                  <div className="single-services-item mt-30">
                    <img src="assets/images/services-thumb-6.jpg" alt="" />
                    <div className="services-overlay">
                      <i className="fal fa-umbrella" />
                      <h4 className="title">Game Design</h4>
                      <p>
                        The functional goal of technical content is to help people use a
                        product successfully. The business goal must tie the content.
                      </p>
                    </div>
                  </div>
                  {/* single services */}
                </div>
              </div>
              {/* row */}
            </div>
            {/* container */}
          </div>
         );
    }
}
 
export default ServicesItemPart;