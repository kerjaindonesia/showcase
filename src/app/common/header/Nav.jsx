import React from 'react';
import { Link } from "react-router-dom";

class Nav extends React.Component {

    render() {
        return (
            <>
                <ul className="navbar-nav m-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to={'/'}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={'/cases'}>Products</Link>
                        <ul className="sub-menu">
                            <li>
                                <Link to={'/cases'}>Business Model</Link>
                            </li>
                            <li>
                                <Link to={'/pricing'}>pricing</Link>
                            </li>
                            {/* <li>
                                <Link to={'/team'}>team</Link>
                            </li> */}
                        </ul>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={'/faq'}>FAQ</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={'/contact'}>Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={'/about'}>About</Link>
                    </li>
                </ul>
            </>
        );
    }
}

export default Nav;