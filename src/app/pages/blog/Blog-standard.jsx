import React from 'react';
import BlogSideBar from '../../componets/blog/BlogSideBar';
import Footer from '../../common/footer/Index';
import Header from '../../common/header/Index';
import { Link } from 'react-router-dom';


class BlogStandard extends React.Component {


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
                <h2 className="title">News</h2>
                <nav aria-label="breadcrumb">

                
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to={"/"}>Home </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                    News
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
        {/*====== BLOG GRID PART START ======*/}
        <div className="blog-grid-area pt-90 pb-120">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-8">
                <div className="blog-grid-item mt-30">
                  <img src="assets/images/blog-grid-1.jpg" alt="" />
                  <div className="blog-grid-overlay">
                    <span>Design/SEO</span>
                    <Link to={"blog-details"}>
                      <h5 className="title">
                        A series of iOS 7 inspired vector icons.
                      </h5>
                    </Link>
                    <ul>
                      <li>
                        <i className="fal fa-calendar-alt" />
                        <span>23rd January 2019</span>
                      </li>
                      <li>
                        <i className="fal fa-heart" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-8">
                <div className="blog-grid-item mt-30">
                  <img src="assets/images/blog-grid-2.jpg" alt="" />
                  <div className="blog-grid-overlay">
                    <span>Design/SEO</span>
                    <Link to={"blog-details"}>
                      <h5 className="title">
                        A series of iOS 7 inspired vector icons.
                      </h5>
                    </Link>
                    <ul>
                      <li>
                        <i className="fal fa-calendar-alt" />
                        <span>23rd January 2019</span>
                      </li>
                      <li>
                        <i className="fal fa-heart" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-8">
                <div className="blog-grid-item mt-30">
                  <img src="assets/images/blog-grid-3.jpg" alt="" />
                  <div className="blog-grid-overlay">
                    <span>Design/SEO</span>
                    <Link to={"blog-details"}>
                      <h5 className="title">
                        A series of iOS 7 inspired vector icons.
                      </h5>
                    </Link>
                    <ul>
                      <li>
                        <i className="fal fa-calendar-alt" />
                        <span>23rd January 2019</span>
                      </li>
                      <li>
                        <i className="fal fa-heart" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-8">
                <div className="blog-grid-item mt-30">
                  <img src="assets/images/blog-grid-4.jpg" alt="" />
                  <div className="blog-grid-overlay">
                    <span>Design/SEO</span>
                    <Link to={"blog-details"}>
                      <h5 className="title">
                        A series of iOS 7 inspired vector icons.
                      </h5>
                    </Link>
                    <ul>
                      <li>
                        <i className="fal fa-calendar-alt" />
                        <span>23rd January 2019</span>
                      </li>
                      <li>
                        <i className="fal fa-heart" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-8">
                <div className="blog-grid-item mt-30">
                  <img src="assets/images/blog-grid-5.jpg" alt="" />
                  <div className="blog-grid-overlay">
                    <span>Design/SEO</span>
                    <Link to={"blog-details"}>
                      <h5 className="title">
                        A series of iOS 7 inspired vector icons.
                      </h5>
                    </Link>
                    <ul>
                      <li>
                        <i className="fal fa-calendar-alt" />
                        <span>23rd January 2019</span>
                      </li>
                      <li>
                        <i className="fal fa-heart" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-8">
                <div className="blog-grid-item mt-30">
                  <img src="assets/images/blog-grid-6.jpg" alt="" />
                  <div className="blog-grid-overlay">
                    <span>Design/SEO</span>
                    <Link to={"blog-details"}>
                      <h5 className="title">
                        A series of iOS 7 inspired vector icons.
                      </h5>
                    </Link>
                    <ul>
                      <li>
                        <i className="fal fa-calendar-alt" />
                        <span>23rd January 2019</span>
                      </li>
                      <li>
                        <i className="fal fa-heart" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-8">
                <div className="blog-grid-item mt-30">
                  <img src="assets/images/blog-grid-7.jpg" alt="" />
                  <div className="blog-grid-overlay">
                    <span>Design/SEO</span>
                    <Link to={"blog-details"}>
                      <h5 className="title">
                        A series of iOS 7 inspired vector icons.
                      </h5>
                    </Link>
                    <ul>
                      <li>
                        <i className="fal fa-calendar-alt" />
                        <span>23rd January 2019</span>
                      </li>
                      <li>
                        <i className="fal fa-heart" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-8">
                <div className="blog-grid-item mt-30">
                  <img src="assets/images/blog-grid-8.jpg" alt="" />
                  <div className="blog-grid-overlay">
                    <span>Design/SEO</span>
                    <Link to={"blog-details"}>
                      <h5 className="title">
                        A series of iOS 7 inspired vector icons.
                      </h5>
                    </Link>
                    <ul>
                      <li>
                        <i className="fal fa-calendar-alt" />
                        <span>23rd January 2019</span>
                      </li>
                      <li>
                        <i className="fal fa-heart" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-8">
                <div className="blog-grid-item mt-30">
                  <img src="assets/images/blog-grid-9.jpg" alt="" />
                  <div className="blog-grid-overlay">
                    <span>Design/SEO</span>
                    <Link to={"blog-details"}>
                      <h5 className="title">
                        A series of iOS 7 inspired vector icons.
                      </h5>
                    </Link>
                    <ul>
                      <li>
                        <i className="fal fa-calendar-alt" />
                        <span>23rd January 2019</span>
                      </li>
                      <li>
                        <i className="fal fa-heart" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-8">
                <div className="blog-grid-item mt-30">
                  <img src="assets/images/blog-grid-10.jpg" alt="" />
                  <div className="blog-grid-overlay">
                    <span>Design/SEO</span>
                    <Link to={"blog-details"}>
                      <h5 className="title">
                        A series of iOS 7 inspired vector icons.
                      </h5>
                    </Link>
                    <ul>
                      <li>
                        <i className="fal fa-calendar-alt" />
                        <span>23rd January 2019</span>
                      </li>
                      <li>
                        <i className="fal fa-heart" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-8">
                <div className="blog-grid-item mt-30">
                  <img src="assets/images/blog-grid-11.jpg" alt="" />
                  <div className="blog-grid-overlay">
                    <span>Design/SEO</span>
                    <Link to={"blog-details"}>
                      <h5 className="title">
                        A series of iOS 7 inspired vector icons.
                      </h5>
                    </Link>
                    <ul>
                      <li>
                        <i className="fal fa-calendar-alt" />
                        <span>23rd January 2019</span>
                      </li>
                      <li>
                        <i className="fal fa-heart" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-8">
                <div className="blog-grid-item mt-30">
                  <img src="assets/images/blog-grid-12.jpg" alt="" />
                  <div className="blog-grid-overlay">
                    <span>Design/SEO</span>
                    <Link to={"blog-details"}>
                      <h5 className="title">
                        A series of iOS 7 inspired vector icons.
                      </h5>
                    </Link>
                    <ul>
                      <li>
                        <i className="fal fa-calendar-alt" />
                        <span>23rd January 2019</span>
                      </li>
                      <li>
                        <i className="fal fa-heart" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <nav className="mt-40" aria-label="Page navigation example">
                  <ul className="pagination pagination-2 justify-content-center">
                    <li className="page-item">
                      <Link
                        className="page-link d-none d-sm-inline-block"
                        to="blog-details"
                        tabIndex={-1}
                        aria-disabled="true"
                      >
                        <i className="fal fa-arrow-left" />
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to={"blog"}>
                        01
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to={"blog"}>
                        02
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to={"blog"}>
                        03
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to={"blog"}>
                        ...
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to={"blog"}>
                        10
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link d-none d-sm-inline-block" to={"blog"}>
                        <i className="fal fa-arrow-right" />
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
        {/*====== BLOG GRID PART ENDS ======*/}

      <BlogSideBar/>
      </div>;
      <Footer/>
      </>
    );
  }
}
 
export default BlogStandard;