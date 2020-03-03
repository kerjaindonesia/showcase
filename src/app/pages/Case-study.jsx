import React from 'react';
import NewsPart from '../componets/NewsPart/Index';
import Footer from '../common/footer/Index';
import Header from '../common/header/Index';
import { Link } from 'react-router-dom';

class CaseStudy extends React.Component {

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
                  <h2 className="title">Our Portfolio</h2>
                  <nav aria-label="breadcrumb">

                  
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link  to={"/"}>Home </Link>
                      </li>
                      <li className="breadcrumb-item active" aria-current="page">
                      Our Portfolio
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
            <NewsPart/>
            <Footer/>
            </>
      );
    }
}
 
export default CaseStudy;