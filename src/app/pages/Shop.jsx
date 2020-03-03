import React from 'react';
import Footer from '../common/footer/Index';
import Header from '../common/header/Index';
import { Link } from 'react-router-dom';

class ShopPage extends React.Component {

  // componentDidMount() {
	// 	setTimeout(function () {
	// 		document.querySelector(".preloader").style = "display: none";
	// 	}, 5000);
  // }

    render() { 
        return ( 
          <>
      <Header/>
        {/* /*====== PAGE TITLE PART START ====== */}
      <div className="page-title-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-title-item text-center">
                <h2 className="title">Our Shop</h2>
                <nav aria-label="breadcrumb">

                
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link  to={"/shop"}>Home </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                    Our Shop
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
        {/* /*====== PAGE TITLE PART ENDS ======
        /*====== SHOP PART START ====== */}
      <div className="shop-area gray-bg pt-100 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="row align-items-center mb-10">
                <div className="col-lg-4 col-md-4 order-2 order-md-1">
                  <div className="shop-top-bar">
                    <p>Showing 1–09 of 42 Results</p>
                  </div>
                </div>
                <div className="col-lg-8 col-md-8 order-1 order-md-1">
                  <div className="shop-top-bar">
                    <form action="index">
                      <div className="input-box">
                        <input type="text" placeholder="Search Keywords" />
                        <button>
                          <i className="fal fa-search" />
                        </button>
                      </div>
                    </form>
                    <select>
                      <option value={1}>Short by</option>
                      <option value={2}>Another 1</option>
                      <option value={2}>Another 2</option>
                      <option value={2}>Another 3</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <div className="shop-item mt-30">
                    <div className="shop-thumb">
                      <img src="assets/images/shop-1.jpg" alt="" />
                      <div className="shop-overlay">
                        <ul>
                          <li>
                            <Link  to={"/shop"}>
                              <i className="fal fa-shopping-cart" />
                            </Link>
                          </li>
                          <li>
                            <Link  to={"/shop"}>
                              <i className="fal fa-heart" />
                            </Link>
                          </li>
                          <li>
                            <Link 
                              className="image-popup"
                              to={"assets/images/shop-1.jpg"}
                            >
                              <i className="fal fa-eye" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="shop-content white-bg text-center">
                      <Link  to={"/shop"}>
                        <h5 className="title">Golden Chair</h5>
                      </Link>
                      <ul>
                        <li>$45.99</li>
                        <li>$30.99</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <div className="shop-item mt-30">
                    <div className="shop-thumb">
                      <img src="assets/images/shop-2.jpg" alt="" />
                      <div className="shop-overlay">
                        <ul>
                          <li>
                            <Link  to={"/shop"}>
                              <i className="fal fa-shopping-cart" />
                            </Link>
                          </li>
                          <li>
                            <Link  to={"/shop"}>
                              <i className="fal fa-heart" />
                            </Link>
                          </li>
                          <li>
                            <Link 
                              className="image-popup"
                              to={"assets/images/shop-2.jpg"}
                            >
                              <i className="fal fa-eye" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="shop-content white-bg text-center">
                      <Link  to={"/shop"}>
                        <h5 className="title">Blue Table</h5>
                      </Link>
                      <ul>
                        <li>$45.99</li>
                        <li>$30.99</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <div className="shop-item mt-30">
                    <div className="shop-thumb">
                      <img src="assets/images/shop-3.jpg" alt="" />
                      <div className="shop-overlay">
                        <ul>
                          <li>
                            <Link  to={"/shop"}>
                              <i className="fal fa-shopping-cart" />
                            </Link>
                          </li>
                          <li>
                            <Link  to={"/shop"}>
                              <i className="fal fa-heart" />
                            </Link>
                          </li>
                          <li>
                            <Link 
                              className="image-popup"
                              to={"assets/images/shop-3.jpg"}
                            >
                              <i className="fal fa-eye" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="shop-content white-bg text-center">
                      <Link  to={"/shop"}>
                        <h5 className="title">Amazing Charge Light</h5>
                      </Link>
                      <ul>
                        <li>$45.99</li>
                        <li>$30.99</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <div className="shop-item mt-30">
                    <div className="shop-thumb">
                      <img src="assets/images/shop-4.jpg" alt="" />
                      <div className="shop-overlay">
                        <ul>
                          <li>
                            <Link  to={"/shop"}>
                              <i className="fal fa-shopping-cart" />
                            </Link>
                          </li>
                          <li>
                            <Link  to={"/shop"}>
                              <i className="fal fa-heart" />
                            </Link>
                          </li>
                          <li>
                            <Link 
                              className="image-popup"
                              to={"assets/images/shop-4.jpg"}
                            >
                              <i className="fal fa-eye" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="shop-content white-bg text-center">
                      <Link  to={"/shop"}>
                        <h5 className="title">Minimal Chair</h5>
                      </Link>
                      <ul>
                        <li>$45.99</li>
                        <li>$30.99</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <div className="shop-item mt-30">
                    <div className="shop-thumb">
                      <img src="assets/images/shop-5.jpg" alt="" />
                      <div className="shop-overlay">
                        <ul>
                          <li>
                            <Link  to={"/shop"}>
                              <i className="fal fa-shopping-cart" />
                            </Link>
                          </li>
                          <li>
                            <Link  to={"/shop"}>
                              <i className="fal fa-heart" />
                            </Link>
                          </li>
                          <li>
                            <Link 
                              className="image-popup"
                              to={"assets/images/shop-5.jpg"}
                            >
                              <i className="fal fa-eye" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="shop-content white-bg text-center">
                      <Link  to={"/shop"}>
                        <h5 className="title">Light Bulb</h5>
                      </Link>
                      <ul>
                        <li>$45.99</li>
                        <li>$30.99</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <div className="shop-item mt-30">
                    <div className="shop-thumb">
                      <img src="assets/images/shop-6.jpg" alt="" />
                      <div className="shop-overlay">
                        <ul>
                          <li>
                            <Link  to={"/shop"}>
                              <i className="fal fa-shopping-cart" />
                            </Link>
                          </li>
                          <li>
                            <Link  to={"/shop"}>
                              <i className="fal fa-heart" />
                            </Link>
                          </li>
                          <li>
                            <Link 
                              className="image-popup"
                              to={"assets/images/shop-6.jpg"}
                            >
                              <i className="fal fa-eye" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="shop-content white-bg text-center">
                      <Link  to={"/shop"}>
                        <h5 className="title">Wood Furniture</h5>
                      </Link>
                      <ul>
                        <li>$45.99</li>
                        <li>$30.99</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <div className="shop-item mt-30">
                    <div className="shop-thumb">
                      <img src="assets/images/shop-7.jpg" alt="" />
                      <div className="shop-overlay">
                        <ul>
                          <li>
                            <Link  to={"/shop"}>
                              <i className="fal fa-shopping-cart" />
                            </Link>
                          </li>
                          <li>
                            <Link  to={"/shop"}>
                              <i className="fal fa-heart" />
                            </Link>
                          </li>
                          <li>
                            <Link 
                              className="image-popup"
                              to={"assets/images/shop-7.jpg"}
                            >
                              <i className="fal fa-eye" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="shop-content white-bg text-center">
                      <Link  to={"/shop"}>
                        <h5 className="title">Wood Chair</h5>
                      </Link>
                      <ul>
                        <li>$45.99</li>
                        <li>$30.99</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <div className="shop-item mt-30">
                    <div className="shop-thumb">
                      <img src="assets/images/shop-8.jpg" alt="" />
                      <div className="shop-overlay">
                        <ul>
                          <li>
                            <Link  to={"/shop"}>
                              <i className="fal fa-shopping-cart" />
                            </Link>
                          </li>
                          <li>
                            <Link  to={"/shop"}>
                              <i className="fal fa-heart" />
                            </Link>
                          </li>
                          <li>
                            <Link 
                              className="image-popup"
                              to={"assets/images/shop-8.jpg"}
                            >
                              <i className="fal fa-eye" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="shop-content white-bg text-center">
                      <Link  to={"/shop"}>
                        <h5 className="title">Black Mouse Pad</h5>
                      </Link>
                      <ul>
                        <li>$45.99</li>
                        <li>$30.99</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <div className="shop-item mt-30">
                    <div className="shop-thumb">
                      <img src="assets/images/shop-9.jpg" alt="" />
                      <div className="shop-overlay">
                        <ul>
                          <li>
                            <Link  to={"/shop"}>
                              <i className="fal fa-shopping-cart" />
                            </Link>
                          </li>
                          <li>
                            <Link  to={"/shop"}>
                              <i className="fal fa-heart" />
                            </Link>
                          </li>
                          <li>
                            <Link 
                              className="image-popup"
                              to={"assets/images/shop-9.jpg"}
                            >
                              <i className="fal fa-eye" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="shop-content white-bg text-center">
                      <Link  to={"/shop"}>
                        <h5 className="title">Rolling Black Paper</h5>
                      </Link>
                      <ul>
                        <li>$45.99</li>
                        <li>$30.99</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <div className="shop-item mt-30">
                    <div className="shop-thumb">
                      <img src="assets/images/shop-10.jpg" alt="" />
                      <div className="shop-overlay">
                        <ul>
                          <li>
                            <Link  to={"/shop"}>
                              <i className="fal fa-shopping-cart" />
                            </Link>
                          </li>
                          <li>
                            <Link  to={"/shop"}>
                              <i className="fal fa-heart" />
                            </Link>
                          </li>
                          <li>
                            <Link 
                              className="image-popup"
                              to={"assets/images/shop-10.jpg"}
                            >
                              <i className="fal fa-eye" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="shop-content white-bg text-center">
                      <Link  to={"/shop"}>
                        <h5 className="title">Minimal Black Chair</h5>
                      </Link>
                      <ul>
                        <li>$45.99</li>
                        <li>$30.99</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <div className="shop-item mt-30">
                    <div className="shop-thumb">
                      <img src="assets/images/shop-11.jpg" alt="" />
                      <div className="shop-overlay">
                        <ul>
                          <li>
                            <Link  to={"/shop"}>
                              <i className="fal fa-shopping-cart" />
                            </Link>
                          </li>
                          <li>
                            <Link  to={"/shop"}>
                              <i className="fal fa-heart" />
                            </Link>
                          </li>
                          <li>
                            <Link 
                              className="image-popup"
                              to={"assets/images/shop-11.jpg"}
                            >
                              <i className="fal fa-eye" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="shop-content white-bg text-center">
                      <Link  to={"/shop"}>
                        <h5 className="title">Ciramic Round Table</h5>
                      </Link>
                      <ul>
                        <li>$45.99</li>
                        <li>$30.99</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <div className="shop-item mt-30">
                    <div className="shop-thumb">
                      <img src="assets/images/shop-12.jpg" alt="" />
                      <div className="shop-overlay">
                        <ul>
                          <li>
                            <Link  to={"/shop"}>
                              <i className="fal fa-shopping-cart" />
                            </Link>
                          </li>
                          <li>
                            <Link  to={"/shop"}>
                              <i className="fal fa-heart" />
                            </Link>
                          </li>
                          <li>
                            <Link 
                              className="image-popup"
                              to={"assets/images/shop-12.jpg"}
                            >
                              <i className="fal fa-eye" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="shop-content white-bg text-center">
                      <Link  to={"/shop"}>
                        <h5 className="title">Kedara Black Mantis</h5>
                      </Link>
                      <ul>
                        <li>$45.99</li>
                        <li>$30.99</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <nav className="mt-40" aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                      <li className="page-item">
                        <Link 
                          className="page-link"
                          to={"/shop"}
                          tabIndex={-1}
                          aria-disabled="true"
                        >
                          <i className="fal fa-arrow-left" />
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link  className="page-link active" to={"/shop"}>
                          01
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link  className="page-link" to={"/shop"}>
                          02
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link  className="page-link" to={"/shop"}>
                          03
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link  className="page-link" to={"/shop"}>
                          ...
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link  className="page-link" to={"/shop"}>
                          10
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link  className="page-link" to={"/shop"}>
                          <i className="fal fa-arrow-right" />
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-5 col-sm-7">
              <div className="shop-side-bar">
                <div className="shop-sidebar-area mt-30 white-bg">
                  <div className="sidebar-title text-center">
                    <h5 className="title">Category</h5>
                  </div>
                  <div className="sidebar-list">
                    <ul>
                      <li>
                        <Link  to={"/shop"}>
                          <i className="fal fa-angle-right" />
                          Accessories
                        </Link>
                      </li>
                      <li>
                        <Link  to={"/shop"}>
                          <i className="fal fa-angle-right" />
                          Clothing
                        </Link>
                      </li>
                      <li>
                        <Link  to={"/shop"}>
                          <i className="fal fa-angle-right" />
                          Decor
                        </Link>
                      </li>
                      <li>
                        <Link  to={"/shop"}>
                          <i className="fal fa-angle-right" />
                          Hoodies
                        </Link>
                      </li>
                      <li>
                        <Link  to={"/shop"}>
                          <i className="fal fa-angle-right" />
                          Music
                        </Link>
                      </li>
                      <li>
                        <Link  to={"/shop"}>
                          <i className="fal fa-angle-right" />
                          T-shirts
                        </Link>
                      </li>
                      <li>
                        <Link  to={"/shop"}>
                          <i className="fal fa-angle-right" />
                          Uncategorized
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="shop-sidebar-area mt-30 white-bg">
                  <div className="sidebar-title text-center">
                    <h5 className="title">Keyword</h5>
                  </div>
                  <div className="sidebar-tag">
                    <ul>
                      <li>
                        <Link  to={"/shop"}>Cleaning</Link>
                      </li>
                      <li>
                        <Link  to={"/shop"}>Business</Link>
                      </li>
                      <li>
                        <Link  to={"/shop"}>IT</Link>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <Link  to={"/shop"}>Car</Link>
                      </li>
                      <li>
                        <Link  to={"/shop"}>Agency</Link>
                      </li>
                      <li>
                        <Link  to={"/shop"}>Laptop</Link>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <Link  to={"/shop"}>Washing</Link>
                      </li>
                      <li>
                        <Link  to={"/shop"}>Paper</Link>
                      </li>
                      <li>
                        <Link  to={"/shop"}>Pen</Link>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <Link  to={"/shop"}>Tea</Link>
                      </li>
                      <li>
                        <Link  to={"/shop"}>Coffee</Link>
                      </li>
                      <li>
                        <Link  to={"/shop"}>Keyboard</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="shop-sidebar-area mt-30 white-bg">
                  <div className="sidebar-title text-center">
                    <h5 className="title">Subscribe</h5>
                  </div>
                  <div className="sidebar-subscribe">
                    <p>Lorem ipsum dolor sit asecte is tur adipisicing elit.</p>
                    <form action="index">
                      <div className="input-box">
                        <input type="text" placeholder="Enter email" />
                        <button className="main-btn">Subscribe Now</button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="sidebar-add mt-30">
                  <img src="assets/images/sidebar-ad.jpg" alt="" />
                  <span>Add Banner</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        {/* /*====== SHOP PART ENDS ====== */}
      <Footer/>
      </>
      );
    }
}
 
export default ShopPage;