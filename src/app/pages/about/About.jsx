import React from 'react';
import { Link } from 'react-router-dom';

import Footer from '../../common/footer/Index';
import Header from '../../common/header/Index';

import AboutExperiencePart from '../../componets/aboutExperiencePart/Index';
import AboutIntroPart from '../../componets/aboutIntroPart/Index';
import AbotFaqPart from '../../componets/abotFaqPart/Index';


class AboutPage extends React.Component {

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
                    <h2 className="title">About Us</h2>
                    <nav aria-label="breadcrumb">

                    
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          <Link to={'index'}>Home</Link>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                          About
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
            <AboutExperiencePart/>
            <AboutIntroPart/>
            <AbotFaqPart/>
            <Footer/>
            </>
         );
    }
}
 
export default AboutPage;