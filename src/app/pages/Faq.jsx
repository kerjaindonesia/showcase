import React from 'react';
import Footer from '../common/footer/Index';
import Header from '../common/header/Index';
import { Link } from 'react-router-dom';




class FaqPage extends React.Component {


  // componentDidMount() {
	// 	setTimeout(function () {
	// 		document.querySelector(".preloader").style = "display: none";
	// 	}, 5000);
  // }


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
                  <h2 className="title">FAQ</h2>
                  <nav aria-label="breadcrumb">

                  
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link  to={"/"}>Home </Link>
                      </li>
                      <li className="breadcrumb-item active" aria-current="page">
                      FAQ
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
          {/*====== ABOT FAQ PART START ======*/}
          <div className="about-faq-area about-faq-area-page pb-100">
            <div className="container">


            <div className="accordion" id="accordionExample">
  <div className="card">
    <div className="card-header" id="headingOne">
      <h2 className="mb-0">
        <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Collapsible Group Item #1
        </button>
      </h2>
    </div>

    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div className="card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header" id="headingTwo">
      <h2 className="mb-0">
        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Collapsible Group Item #2
        </button>
      </h2>
    </div>
    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div className="card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header" id="headingThree">
      <h2 className="mb-0">
        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Collapsible Group Item #3
        </button>
      </h2>
    </div>
    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
      <div className="card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
</div>


              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="faq-accordion-3 mt-30">
                    <div className="accordion" id="accordionExample">
                      <div className="card">
                        <div className="card-header" id="headingOne">
                          <Link 
                            to={'/'}
                            data-toggle="collapse"
                            data-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            <i className="fal fa-magic" />
                            Technical content may have persuasive objectives
                          </Link>
                        </div>
                        <div
                          id="collapseOne"
                          className="collapse show"
                          aria-labelledby="headingOne"
                          data-parent="#accordionExample"
                        >
                          <div className="card-body">
                            <p>
                              Today, the term Information Technology (IT) has ballooned
                              to encompass is real. Today, the term Information
                              Technology (IT) has ballooned to encompass is real.Today,
                              the term Information Technology (IT) has ballooned to
                              encompass is real.
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* card */}
                      <div className="card">
                        <div className="card-header" id="headingTwo">
                          <Link 
                            className="collapsed"
                            to={'/'}
                            data-toggle="collapse"
                            data-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            <i className="fal fa-magic" />
                            Technical content may have persuasive objectives
                          </Link>
                        </div>
                        <div
                          id="collapseTwo"
                          className="collapse"
                          aria-labelledby="headingTwo"
                          data-parent="#accordionExample"
                        >
                          <div className="card-body">
                            <p>
                              Today, the term Information Technology (IT) has ballooned
                              to encompass is real. Today, the term Information
                              Technology (IT) has ballooned to encompass is real.Today,
                              the term Information Technology (IT) has ballooned to
                              encompass is real.
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* card */}
                      <div className="card">
                        <div className="card-header" id="headingThree">
                          <Link 
                            className="collapsed"
                            to={'/'}
                            data-toggle="collapse"
                            data-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            <i className="fal fa-magic" />
                            Technical content may have persuasive objectives
                          </Link>
                        </div>
                        <div
                          id="collapseThree"
                          className="collapse"
                          aria-labelledby="headingThree"
                          data-parent="#accordionExample"
                        >
                          <div className="card-body">
                            <p>
                              Today, the term Information Technology (IT) has ballooned
                              to encompass is real. Today, the term Information
                              Technology (IT) has ballooned to encompass is real.Today,
                              the term Information Technology (IT) has ballooned to
                              encompass is real.
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* card */}
                      <div className="card">
                        <div className="card-header" id="headingFour">
                          <Link 
                            className="collapsed"
                            to={'/'}
                            data-toggle="collapse"
                            data-target="#collapseFour"
                            aria-expanded="false"
                            aria-controls="collapseFour"
                          >
                            <i className="fal fa-magic" />
                            Technical content may have persuasive objectives
                          </Link>
                        </div>
                        <div
                          id="collapseFour"
                          className="collapse"
                          aria-labelledby="headingFour"
                          data-parent="#accordionExample"
                        >
                          <div className="card-body">
                            <p>
                              Today, the term Information Technology (IT) has ballooned
                              to encompass is real. Today, the term Information
                              Technology (IT) has ballooned to encompass is real.Today,
                              the term Information Technology (IT) has ballooned to
                              encompass is real.
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* card */}
                      <div className="card">
                        <div className="card-header" id="headingFive">
                          <Link 
                            className="collapsed"
                            to={'/'}
                            data-toggle="collapse"
                            data-target="#collapseFive"
                            aria-expanded="false"
                            aria-controls="collapseFive"
                          >
                            <i className="fal fa-magic" />
                            Technical content may have persuasive objectives
                          </Link>
                        </div>
                        <div
                          id="collapseFive"
                          className="collapse"
                          aria-labelledby="headingFive"
                          data-parent="#accordionExample"
                        >
                          <div className="card-body">
                            <p>
                              Today, the term Information Technology (IT) has ballooned
                              to encompass is real. Today, the term Information
                              Technology (IT) has ballooned to encompass is real.Today,
                              the term Information Technology (IT) has ballooned to
                              encompass is real.
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* card */}
                    </div>
                  </div>
                  {/* faq accordion */}
                </div>
                <div className="col-lg-6">
                  <div className="faq-video-thumb-area">
                    <div className="faq-video-thumb-1 text-right">
                      <img src="assets/images/faq-thumb-item-1.jpg" alt="faq" />
                    </div>
                    <div className="faq-video-thumb-2">
                      <img src="assets/images/faq-thumb-item-2.jpg" alt="faq" />
                    </div>
                  </div>
                </div>
              </div>
              {/* row */}
            </div>
            {/* container */}
          </div>
          {/*====== ABOT FAQ PART ENDS ======*/}
          {/*====== ABOT FAQ PART START ======*/}
          <div className="about-faq-area pb-100 gray-bg">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 order-2 order-lg-1">
                  <div className="faq-video-thumb">
                    <img src="assets/images/faq-video-thumb.jpg" alt="" />
                    <Link  className="video-popup" to={"http://bit.ly/2VuPnrx"} >
                      <i className="fas fa-play" />
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2">
                  <div className="about-faq-content">
                    <span>FAQ</span>
                    <h2 className="title">Get Every answer from here.</h2>
                  </div>
                  <div className="faq-accordion-3 mt-30">
                    <div className="accordion" id="accordionExample-2">
                      <div className="card">
                        <div className="card-header" id="heading1">
                          <Link 
                            to={'/'}
                            data-toggle="collapse"
                            data-target="#collapse1"
                            aria-expanded="true"
                            aria-controls="collapse1"
                          >
                            <i className="fal fa-magic" />
                            Technical content may have persuasive objectives
                          </Link>
                        </div>
                        <div
                          id="collapse1"
                          className="collapse show"
                          aria-labelledby="heading1"
                          data-parent="#accordionExample-2"
                        >
                          <div className="card-body">
                            <p>
                              Today, the term Information Technology (IT) has ballooned
                              to encompass is real. Today, the term Information
                              Technology (IT) has ballooned to encompass is real.Today,
                              the term Information Technology (IT) has ballooned to
                              encompass is real.
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* card */}
                      <div className="card">
                        <div className="card-header" id="heading2">
                          <Link 
                            className="collapsed"
                            to={'/'}
                            data-toggle="collapse"
                            data-target="#collapse2"
                            aria-expanded="false"
                            aria-controls="collapse2"
                          >
                            <i className="fal fa-magic" />
                            Technical content may have persuasive objectives
                          </Link>
                        </div>
                        <div
                          id="collapse2"
                          className="collapse"
                          aria-labelledby="heading2"
                          data-parent="#accordionExample-2"
                        >
                          <div className="card-body">
                            <p>
                              Today, the term Information Technology (IT) has ballooned
                              to encompass is real. Today, the term Information
                              Technology (IT) has ballooned to encompass is real.Today,
                              the term Information Technology (IT) has ballooned to
                              encompass is real.
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* card */}
                      <div className="card">
                        <div className="card-header" id="heading3">
                          <Link 
                            className="collapsed"
                            to={'/'}
                            data-toggle="collapse"
                            data-target="#collapse3"
                            aria-expanded="false"
                            aria-controls="collapse3"
                          >
                            <i className="fal fa-magic" />
                            Technical content may have persuasive objectives
                          </Link>
                        </div>
                        <div
                          id="collapse3"
                          className="collapse"
                          aria-labelledby="heading3"
                          data-parent="#accordionExample-2"
                        >
                          <div className="card-body">
                            <p>
                              Today, the term Information Technology (IT) has ballooned
                              to encompass is real. Today, the term Information
                              Technology (IT) has ballooned to encompass is real.Today,
                              the term Information Technology (IT) has ballooned to
                              encompass is real.
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* card */}
                      <div className="card">
                        <div className="card-header" id="heading4">
                          <Link 
                            className="collapsed"
                            to={'/'}
                            data-toggle="collapse"
                            data-target="#collapse4"
                            aria-expanded="false"
                            aria-controls="collapse4"
                          >
                            <i className="fal fa-magic" />
                            Technical content may have persuasive objectives
                          </Link>
                        </div>
                        <div
                          id="collapse4"
                          className="collapse"
                          aria-labelledby="heading4"
                          data-parent="#accordionExample-2"
                        >
                          <div className="card-body">
                            <p>
                              Today, the term Information Technology (IT) has ballooned
                              to encompass is real. Today, the term Information
                              Technology (IT) has ballooned to encompass is real.Today,
                              the term Information Technology (IT) has ballooned to
                              encompass is real.
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* card */}
                      <div className="card">
                        <div className="card-header" id="heading5">
                          <Link 
                            className="collapsed"
                            to={'/'}
                            data-toggle="collapse"
                            data-target="#collapse5"
                            aria-expanded="false"
                            aria-controls="collapse5"
                          >
                            <i className="fal fa-magic" />
                            Technical content may have persuasive objectives
                          </Link>
                        </div>
                        <div
                          id="collapse5"
                          className="collapse"
                          aria-labelledby="heading5"
                          data-parent="#accordionExample-2"
                        >
                          <div className="card-body">
                            <p>
                              Today, the term Information Technology (IT) has ballooned
                              to encompass is real. Today, the term Information
                              Technology (IT) has ballooned to encompass is real.Today,
                              the term Information Technology (IT) has ballooned to
                              encompass is real.
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* card */}
                    </div>
                  </div>
                  {/* faq accordion */}
                </div>
              </div>
              {/* row */}
            </div>
            {/* container */}
          </div>
          {/*====== ABOT FAQ PART ENDS ======*/}
          {/*====== QUOTE PART START ======*/}
          <div
            className="quote-area bg_cover"
            style={{ backgroundImage: "url(assets/images/form-bg.jpg)" }}
          >
            <div className="quote-overlay">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-6">
                    <div className="section-title-2 text-center pl-25 pr-25">
                      <h2 className="title">Get A Free Quote</h2>
                      <p>
                        Does any industry face a more complex audience journey and
                        marketing sales process than B2B technology.
                      </p>
                    </div>
                    {/* section title 2 */}
                  </div>
                </div>
                {/* row */}
                <div className="quote-form">
                  <form action="index">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="input-box mt-30">
                          <input type="text" placeholder="Enter your name" />
                          <i className="fal fa-user" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="input-box mt-30">
                          <input type="email" placeholder="Enter your email" />
                          <i className="fal fa-envelope" />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="input-box text-center mt-30">
                          <textarea
                            name="index"
                            id="index"
                            cols={30}
                            rows={10}
                            placeholder="Enter your subject"
                            defaultValue={""}
                          />
                          <button className="main-btn" type="submit">
                            Get A Free Quote
                          </button>
                          <i className="fal fa-edit" />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                {/* quote form */}
              </div>
              {/* container */}
            </div>
          </div>
          {/*====== QUOTE PART ENDS ======*/}
        </div>;


        <Footer/>
        </>
      );
    }
}
 
export default FaqPage;