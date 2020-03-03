import React from 'react';
import { Link } from 'react-router-dom';

import logoKji from '../../../assets/images/logokji.png'

class Footer extends React.Component {

  render() { 
      return ( 
        <>
        <footer className="footer-area footer-area-2 footer-area-1 bg_cover" style={{backgroundImage: 'url(assets/images/footer-bg.jpg)'}}>
          <div className="footer-overlay">
            <div className="container position-relative">
              <div className="row">
                <div className="col-lg-4 col-md-7">
                  <div className="widget-item-1 mt-30">
                    <img src={logoKji} alt="" />
                    <p>The web has changed a lot since Vitaly posted his first article back in 2006. The team at Smashing has changed too, as have the things that we bring to our community onferences, books, and our membership added to the online magazine.</p>
                    <p>One thing that hasn’t changed is that we’re a small team — with most of us not working</p>
                  </div> {/* widget item 1 */}
                </div>
                <div className="col-lg-3 offset-lg-1 col-md-5">
                  <div className="widget-item-2 mt-30">
                    <h4 className="title">Pages</h4>
                    <div className="footer-list">
                      <ul>
                        <li><Link to={"/"}><i className="fal fa-angle-right" /> Home</Link></li>
                        <li><Link to={"services"}><i className="fal fa-angle-right" /> Services</Link></li>
                        <li><Link to={"about"}><i className="fal fa-angle-right" /> About</Link></li>
                        <li><Link to={"career"}><i className="fal fa-angle-right" /> Career</Link></li>
                        <li><Link to={"refund"}><i className="fal fa-angle-right" /> Refund</Link></li>
                        <li><Link to={"terms"}><i className="fal fa-angle-right" /> Terms</Link></li>
                      </ul>
                      <ul>
                        <li><Link to={"details"}><i className="fal fa-angle-right" /> Details</Link></li>
                        <li><Link to={"contact"}><i className="fal fa-angle-right" /> Contact</Link></li>
                        <li><Link to={"business"}><i className="fal fa-angle-right" /> Business</Link></li>
                        <li><Link to={"affiliate"}><i className="fal fa-angle-right" /> Affiliate</Link></li>
                      </ul>
                    </div>
                  </div> {/* widget item 2 */}
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="widget-item-2 widget-item-3 mt-30">
                    <h4 className="title">Working Hours</h4>
                    <ul>
                      <li>Monday - Friday: 7:00 - 17:00</li>
                      <li>Saturday: 7:00 - 12:00</li>
                      <li>Sunday and holidays: 8:00 - 10:00</li>
                    </ul>
                    <p><span>For more then 30 years,</span> IT Service has been a reliable partner in the field of logistics and cargo forwarding.</p>
                    <Link  to={"/"}><i className="fal fa-angle-right" />Discover More</Link>
                  </div> {/* widget item 3 */}
                </div>
              </div> {/* row */}
              <div className="row">
                <div className="col-lg-12">
                  <div className="footer-copyright">
                    <p>Copyright <span>Kerjaindonesia</span> - {(new Date().getFullYear())}</p>
                  </div> {/* footer copyright */}
                </div>
              </div> {/* row */}
            </div> {/* container */}
          </div>
        </footer>
        {/*====== BACK TO TOP ======*/}
        <div className="back-to-top back-to-top-2">
          <a  href="#backTotop">
            <i className="fas fa-arrow-up" />
          </a>
        </div>
        {/*====== BACK TO TOP ======*/}
      </>
    );
  }
}
 
export default Footer;