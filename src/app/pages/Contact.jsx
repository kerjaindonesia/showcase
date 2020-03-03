import React from 'react';
import Footer from '../common/footer/Index';
import Header from '../common/header/Index';
import ModalVideo from 'react-modal-video'
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

class ContactPage extends React.Component {

  constructor () {
    super()
    this.state = {
      isOpen: false
    }
    this.openModal = this.openModal.bind(this)
  }

  // componentDidMount() {
	// 	setTimeout(function () {
	// 		document.querySelector(".preloader").style = "display: none";
	// 	}, 5000);
  // }
  openModal = event => {
    this.setState({isOpen: true});
    event.preventDefault();
  }

  formHandle = event => {
    toast.success("Thank you for contact with us!");
    event.preventDefault();
  }

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
                  <h2 className="title">Contact Us</h2>
                  <nav aria-label="breadcrumb">

                  
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link  to={"/"}>Home </Link>
                      </li>
                      <li className="breadcrumb-item active" aria-current="page">
                      Contact Us
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
        <div>
          {/*====== CONTACT DETAILS PART START ======*/}
          <div className="contact-details-area pt-90 pb-120">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="contact-info mr-30 mt-30">
                    <div className="contact-item-1">
                      <div className="contact-info-item text-center">
                        <i className="fal fa-phone" />
                        <h5 className="title">Phone Number</h5>
                        <p>+7 (800) 123 45 69</p>
                      </div>
                      <div className="contact-info-item text-center">
                        <i className="fal fa-envelope" />
                        <h5 className="title">Email Address</h5>
                        <p>info@webmail.com</p>
                      </div>
                    </div>
                    <div className="contact-item-1">
                      <div className="contact-info-item text-center">
                        <i className="fal fa-map" />
                        <h5 className="title">Office Location</h5>
                        <p>12/A, London, UK</p>
                      </div>
                      <div className="contact-info-item text-center">
                        <i className="fal fa-globe" />
                        <h5 className="title">Social Network</h5>
                        <p>fb.com/example</p>
                      </div>
                    </div>
                  </div>
                  {/* contact info */}
                </div>
                <div className="col-lg-6">
                  <div className="map-area mt-30">
                    <iframe
                      src="//www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7496149.95373021!2d85.84621250756469!3d23.452185887261447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adaaed80e18ba7%3A0xf2d28e0c4e1fc6b!2sBangladesh!5e0!3m2!1sen!2sbd!4v1569913375800!5m2!1sen!2sbd"
                      style={{ border: 0 }}
                      allowFullScreen
                      width={600}
                      height={450}
                      title="Our Localtion"
                    />
                  </div>
                  {/* map area */}
                </div>
              </div>
              {/* row */}
            </div>
            {/* container */}
          </div>
          {/*====== CONTACT DETAILS PART ENDS ======*/}
          {/*====== GET IN TOUCH PART START ======*/}
          <div className="get-in-touch-area get-in-touch-area-2">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="section-title text-left">
                    <span>Get In Touch</span>
                    <h2 className="title">Estimate For Your Projects.</h2>
                  </div>
                  {/* section title */}
                  <div className="form-area">
                    <form id="contact-form" action="assets/contact" method="post" onSubmit={this.formHandle}>
                      <div className="input-box mt-45">
                        <input type="text" name="name" placeholder="Enter your name" />
                        <i className="fal fa-user" />
                      </div>
                      <div className="input-box mt-20">
                        <input
                          type="email"
                          name="email"
                          placeholder="Enter your email"
                        />
                        <i className="fal fa-envelope" />
                      </div>
                      <div className="input-box mt-20">
                        <textarea
                          name="message"
                          id="index"
                          cols={30}
                          rows={10}
                          placeholder="Enter your message"
                          defaultValue={""}
                        />
                        <i className="fal fa-edit" />
                        <button className="main-btn" type="submit">
                          Submit Now
                        </button>
                      </div>
                    </form>
                    <p className="form-message" />
                  </div>
                </div>
                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='TdSA7gkVYU0' onClose={() => this.setState({isOpen: false})} />

                <div className="col-lg-6">
                  <div className="get-map d-none d-lg-block mt-40">
                    <img src="/assets/images/contact-thumb.jpg" alt="video play" />
                    <Link  className="video-popup" to={"http://bit.ly/2VuPnrx"}  onClick={this.openModal}>
                      <i className="fas fa-play" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*====== GET IN TOUCH PART ENDS ======*/}
        </div>;
        <Footer/>
        </>
      );
    }
}
 
export default ContactPage;