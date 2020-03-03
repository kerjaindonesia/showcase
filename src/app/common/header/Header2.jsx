import React from 'react';
import Nav from './Nav';
import { Link } from "react-router-dom";
import SocialLink from './SocialLink';
import Preloader from "../preloader/Index";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';



class Header extends React.Component {

    render() { 
        return (
            <>
            <Preloader/>
          <header className="header-area header-area-2">
            <div className="header-top pl-30 pr-30">
              <div className="row align-items-center">
                <div className="col-md-6 col-sm-7">
                  <div className="header-left-side text-center text-sm-left">
                    <ul>
                      <li>
                        <a  href="mailto:webmaster@example.com" target="__blank">
                          <FontAwesomeIcon icon={faEnvelope}   className="mr-1"/>
                        info@webmail.com
                        </a>
                      </li>
                      <li><a href="tel:786 875 864 75 7">
                        <FontAwesomeIcon icon={faPhone}   className="mr-1"/>
                        786 875 864 75 7</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6 col-sm-5">
                  <div className="header-right-social text-center text-sm-right">
                  <SocialLink/>
                  </div>
                </div>
              </div>
            </div>
            <div className="header-nav">
              <div className="navigation">
                <nav className="navbar navbar-expand-lg navbar-light ">
                  <Link className="navbar-brand"  to={'/'}>
                    <img src="/assets/images/logo-2.png" alt="" />
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
                  <Link className="main-btn"  to={'/'}>Get A Quote</Link>
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