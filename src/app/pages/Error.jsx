import React from 'react';
import Footer from '../common/footer/Index';
import Header from '../common/header/Index';
import { Link } from 'react-router-dom';

class NoMatch extends React.Component {

    render() { 
        return ( 
          <>
          <Header/>
            {
              /*====== ERROR PART START ======*/
            }
            <div className="row pt-120"></div>
            <div className="error-area pt-120 pb-115">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <div className="error-item text-center">
                      <img src="/assets/images/error.png" alt="" />
                      <h2 className="title">
                        Looks Like Here <br /> Is Nothing
                      </h2>
                      <span>Don’t be fret. We are here.</span>
                      <p>
                        <Link to={'/'}>Back to Home</Link>
                      </p>
                    </div>
                    {/* error item */}
                  </div>
                </div>
              </div>
            </div>
            {
              /*====== ERROR PART ENDS ======*/
            }
            <Footer/>
            </>
         );
    }
}
 
export default NoMatch;