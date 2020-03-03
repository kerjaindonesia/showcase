import React from 'react';
import Footer from '../common/footer/Index';
import Header from '../common/header/Index';
import ModalVideo from 'react-modal-video'
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

class ContactPage extends React.Component {

    constructor() {
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
        this.setState({ isOpen: true });
        event.preventDefault();
    }

    formHandle = event => {
        toast.success("Thank you for contact with us!");
        event.preventDefault();
    }

    render() {
        return (
            <>
                <Header />
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
                                                <Link to={"/"}>Home </Link>
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
                                                <p>+62 21 79187250</p>
                                            </div>
                                            <div className="contact-info-item text-center">
                                                <i className="fal fa-envelope" />
                                                <h5 className="title">Email Address</h5>
                                                <p>hello@kerjaindonesia.id</p>
                                            </div>
                                        </div>
                                        <div className="contact-item-1">
                                            <div className="contact-info-item text-center">
                                                <i className="fal fa-map" />
                                                <h5 className="title">Office Location</h5>
                                                <p>Mulia Business Park Building J, Jalan M.T. Haryono Kav. 58-60, Jakarta Selatan
</p>
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
                                            allowFullScreen
                                            style={{ border: 0 }}
                                            width={600}
                                            height={450}
                                            src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=Mulia%20Business%20Park%20Building%20J%2C%20Jalan%20M.T.%20Haryono%20Kav.%2058-60%2C%20Jakarta%20Selatan+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
                                            title="Our Location"
                                            marginwidth="0" 
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
                                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='TdSA7gkVYU0' onClose={() => this.setState({ isOpen: false })} />

                                <div className="col-lg-6">
                                    <div className="get-map d-none d-lg-block mt-40">
                                        <img src="/assets/images/contact-thumb.jpg" alt="video play" />
                                        <Link className="video-popup" to={"http://bit.ly/2VuPnrx"} onClick={this.openModal}>
                                            <i className="fas fa-play" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*====== GET IN TOUCH PART ENDS ======*/}
                </div>;
        <Footer />
            </>
        );
    }
}

export default ContactPage;