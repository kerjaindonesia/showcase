import React from 'react';
import Nav from './Nav';
import { Link } from "react-router-dom";
import Preloader from "../preloader/Index";


class Header extends React.Component {

    render() { 
        return (
            <>
            <Preloader/>
          <header className="header-area-2 header-area-3">
            <div className="header-nav">
              <div className="navigation">
                <nav className="navbar navbar-expand-lg navbar-light ">
                  <Link className="navbar-brand" to={"/"}>
                    <img src="assets/images/logo-3.png" alt="" />
                  </Link> 
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="toggler-icon" />
                    <span className="toggler-icon" />
                    <span className="toggler-icon" />
                  </button> 
                  <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                    <Nav/>
                  </div> 
                  <div className="navbar-btn mr-100">
                    <Link className="main-btn" to={'/'} >Get A Quote</Link>
                  </div>
                  <div className="country-flag d-none d-lg-block">
                    <Link to={'/'}><img src="assets/images/flag-1.jpg" alt="flag" /></Link>
                  </div>
                </nav>
              </div> 
            </div>
          </header>
                </>
         );
    }
}
 
export default Header;