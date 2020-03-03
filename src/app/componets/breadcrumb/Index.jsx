import React from 'react';
//import Breadcrumbs  from 'react-router-dynamic-breadcrumbs';   

//import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';


class Breadcrumb extends React.Component {

    render() { 
        return ( 
          <div className="page-title-area">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="page-title-item text-center">
                    <h2 className="title">About Us</h2>
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          <Link  to={"/"}>Home </Link>
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
         );
    }
}
 
export default Breadcrumb;