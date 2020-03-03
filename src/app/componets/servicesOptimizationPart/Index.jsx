import React from 'react';


class ServicesOptimizationPart extends React.Component {

    render() { 
        return ( 
          <div className="services-optimization-area pt-80 pb-120">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 order-lg-1 order-2">
                  <div className="services-optimization-thumb mt-40">
                    <img src="assets/images/services-op-1.jpg" alt="" />
                  </div>
                  <div className="services-optimization-thumb-2">
                    <img src="assets/images/services-op-2.jpg" alt="" />
                  </div>
                </div>
                <div className="col-lg-6 order-lg-2 order-1">
                  <div className="services-optimization-content mt-40">
                    <span>Search Enging Optimization</span>
                    <h3 className="title">Nothing to do anything.</h3>
                    <p>
                      Does any industry face a more complex audience journey and marketing
                      sales process than B2B technology? Consider the number of people who
                      influence a sale, the length of the decision-making cycle, the
                      competing interests of the people who purchase, implement, manage,
                      and use the technology. It’s a lot meaningful content here.
                    </p>
                    <div className="action-support-item">
                      <p>Make A Call</p>
                      <span>+62 21 79187250</span>
                      <i className="fal fa-phone" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
         );
    }
}
 
export default ServicesOptimizationPart;