import React from 'react';
import { Link } from "react-router-dom";

class Nav extends React.Component {

    render() {
        return (
            <>
                <ul className="navbar-nav m-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to={'/'}>Home</Link>
                        {/* <ul className="sub-menu">
                <li>
                  <Link to={'/'}>Home 1</Link>
                </li>
                <li>
                  <Link to={'/index2'}>Home 2</Link>
                </li>
                <li>
                  <Link to={'/index3'}>Home 3</Link>
                </li>
                <li>
                  <Link to={'/index4'}>Home 4</Link>
                </li>
              </ul> */}
                        {/* sub menu */}
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={'/about'}>About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={'/services-details'}>Services</Link>

                        {/* sub menu */}
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={'/'}>Products</Link>
                        <ul className="sub-menu">
                            <li>
                                <Link to={'/case-study'}>case study</Link>
                            </li>
                            {/* <li>
                            <Link to={'/case-details'}>Case Details</Link>
                            </li> */}
                                        {/* <li>
                            <Link to={'/coming-soon'}>coming soon</Link>
                            </li> */}
                            <li>
                                <Link to={'/faq'}>faq</Link>
                            </li>
                            <li>
                                <Link to={'/pricing'}>pricing</Link>
                            </li>
                            {/* <li>
                            <Link to={'/shop'}>shop</Link>
                            </li> */}
                            {/* <li>
                                <Link to={'/shop-details'}>shop Details</Link>
                            </li>

                            <li>
                                <Link to={'/products'}>Product</Link>
                            </li>
                            <li>
                                <Link to={'/products-details'}>Product Details</Link>
                            </li> */}

                            <li>
                                <Link to={'/team'}>team</Link>
                            </li>
                            {/* <li>
                                <Link to={'/team-details'}>team details</Link>
                            </li> */}
                        </ul>
                        {/* sub menu */}
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={'/blog-standard'}>Blog</Link>
                        {/* <ul className="sub-menu">
                            <li>
                                <Link to={'/blog-standard'}>Blog Standard</Link>
                            </li>
                            <li>
                                <Link to={'/blog-grid'}>Blog Grid</Link>
                            </li>
                            <li>
                                <Link to={'/blog-details'}>Blog Details</Link>
                            </li>
                        </ul> */}
                        {/* sub menu */}
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={'/contact'}>Contact</Link>
                    </li>
                </ul>
            </>
        );
    }
}

export default Nav;