import React from 'react';
import Footer from '../../common/footer/Index';
import Header from '../../common/header/Index';
import ServicesOptimizationPart from '../../componets/servicesOptimizationPart/Index';
import IntroVideoPart from '../../componets/introVideoPart/Index';
import ServicesPlansPart from '../../componets/servicesPart/ServicesPlansPart';
import ServicesItemPart from '../../componets/servicesItemPart/Index';
// import LatestNewsPart from '../../componets/latestNewsPart/Index';
import { Link } from 'react-router-dom';


class ServicesDetails extends React.Component {

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
                      <h2 className="title">Services</h2>
                      <nav aria-label="breadcrumb">

                      
                        <ol className="breadcrumb">
                          <li className="breadcrumb-item">
                            <Link  to={"/"}>Home </Link>
                          </li>
                          <li className="breadcrumb-item active" aria-current="page">
                          Services Details
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
            <ServicesItemPart/>
            <ServicesOptimizationPart/>
            <IntroVideoPart/>
            <ServicesPlansPart/>
            {/* <LatestNewsPart/> */}
            <Footer/>
            </>
         );
    }
}
 
export default ServicesDetails;