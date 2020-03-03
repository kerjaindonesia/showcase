import React from 'react';
import Nav from './Nav';
import { Link } from "react-router-dom";
import SocialLink from './SocialLink';
import Preloader from "../preloader/Index";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faEnvelope,
  faLongArrowAltRight,
  faPhone,
  faSearch,
  faShoppingCart
} from '@fortawesome/free-solid-svg-icons';


class Header extends React.Component {

  constructor(props) {
    super(props);
    this.menuShowHide = this.menuShowHide.bind(this);
    this.state={
      isTop: true,
      menuShowHideToggle: false,
      menuShowHideToggleClass: ' collapse'
    };
  }

  componentDidMount() {

    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop })
      }
    });
  }

  menuShowHide(){
    this.setState({menuShowHideToggleClass: 'collapsing'});

    setTimeout(function() {
      this.setState({menuShowHideToggleClass: 'collapse'});
    }.bind(this), 6 );


    const currentState = this.state.menuShowHideToggle;
    this.setState({menuShowHideToggle: !currentState});  //Flips true/false
  }

  render() {

        return (
            <>
              <Preloader/>
          <header className="header-area header-area-2 header-area-4">
            <div className="header-top pl-30 pr-30 white-bg">
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
                      <li>
                        <a href="tel:786 875 864 75 7">
                          <FontAwesomeIcon icon={faPhone}   className="mr-1"/>
                        786 875 864 75 7
                        </a>
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
            <div className="header-nav" >
              <div className={this.state.isTop ? 'navigation' : 'navigation sticky'}>
                <nav className="navbar navbar-expand-lg navbar-light ">
                  <Link className="navbar-brand"  to={'/'}>
                    <img src="assets/images/logo-2.png" alt="" />
                  </Link>

                  <button  onClick={this.menuShowHide }   className={`
                   navbar-toggler 
                   ${this.state.isTop ? ' ' : ' sticky'}
                   ${this.state.menuShowHideToggle ? 'active' : 'collapsed'}
                   `} type="button"
                          data-toggle="collapse"
                          data-target="#navbarSupportedContent"
                          aria-controls="navbarSupportedContent"
                          aria-expanded="false"
                          aria-label="Toggle navigation">
                    <span className="toggler-icon" />
                    <span className="toggler-icon" />
                    <span className="toggler-icon" />
                  </button> {/* navbar toggler */}
                  <div className={`navbar-collapse sub-menu-bar ${this.state.menuShowHideToggleClass} ${this.state.menuShowHideToggle? ' show': ' '}                     `} id="navbarSupportedContent">
                    <Nav/>
                  </div> {/* navbar collapse */}
                  <div className="bar-area d-none d-xl-block">
                    <ul>
                      <li>
                        <Link to={"shop"}>
                          <FontAwesomeIcon icon={faShoppingCart}   className="mr-1"/>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/"}>
                          <FontAwesomeIcon icon={faSearch}   className="mr-1"/>
                        </Link>
                      </li>
                      <li className="d-none d-md-block d-lg-none">
                        <Link to={"/"}>
                          <FontAwesomeIcon icon={faBars}   className="mr-1"/>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="navbar-btn mr-100">
                    <Link className="main-btn" to={"/"}>Free Consulting
                      <FontAwesomeIcon icon={faLongArrowAltRight}   className="mr-1"/>
                    </Link>
                  </div>
                </nav>
              </div> {/* navigation */}
            </div>
          </header>
              </>
         );
    }
}
 
export default Header;