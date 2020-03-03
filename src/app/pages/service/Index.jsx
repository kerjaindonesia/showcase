import React from 'react';
import ServicesItemPart from '../../componets/servicesItemPart/Index';
import Footer from '../../common/footer/Index';
import Header from '../../common/header/Index';
import ServicesPlansPart from '../../componets/servicesPart/ServicesPlansPart';
import { Link } from 'react-router-dom';

class ServicesPage extends React.Component {

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
                          Services
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
            <ServicesPlansPart/>
            <Footer/>
            </>
         );
    }
}
 
export default ServicesPage;