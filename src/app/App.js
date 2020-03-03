import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';

import NoMatch from './pages/Error';
import Index1 from './pages/home/Index';
import Index2 from './pages/home/Index-2';
import Index3 from './pages/home/Index-3';
import Index4 from './pages/home/Index-4';
import AboutPage from './pages/about/About';
import ContactPage from './pages/Contact';
import ServicesPage from './pages/service/Index';
import ServicesDetails from './pages/service/Details';
import CaseStudy from './pages/Case-study';
import CaseDetails from './pages/Case-details';
import ComingSoon from './pages/Coming-soon';
import FaqPage from './pages/Faq';
import PricingPage from './pages/Pricing';
import ShopPage from './pages/Shop';
import ShopDetailsPage from './pages/Shop-details';
import ProductPage from './pages/product/Index';
import TeamPage from './pages/Team';
import TeamDetailsPage from './pages/Team-details';
import BlogStandard from './pages/blog/Blog-standard';
import BlogGrid from './pages/blog/Blog-grid';
import BlogDetails from './pages/blog/Blog-details';
import ProductDetailPage from "./pages/product-details/Index";

class App extends Component {

	render() {
		return (
			<BrowserRouter basename={'/'} >
				<Switch>
				  <Route exact path={`${process.env.PUBLIC_URL}/`} component={Index1}/>
				  <Route path={`${process.env.PUBLIC_URL}/index`} component={Index1}/>
				  <Route path={`${process.env.PUBLIC_URL}/home`} component={Index1}/>
				  <Route path={`${process.env.PUBLIC_URL}/home-1`} component={Index1}/>
				  <Route path={`${process.env.PUBLIC_URL}/index2`} component={Index2}/>
				  <Route path={`${process.env.PUBLIC_URL}/index3`} component={Index3}/>
				  <Route path={`${process.env.PUBLIC_URL}/index4`} component={Index4}/>

				  <Route path={`${process.env.PUBLIC_URL}/about`} component={AboutPage}/>
				  <Route path={`${process.env.PUBLIC_URL}/services`} component={ServicesPage}/>
				  <Route path={`${process.env.PUBLIC_URL}/services-details`} component={ServicesDetails}/>

				  <Route path={`${process.env.PUBLIC_URL}/case-study`} component={CaseStudy}/>
				  <Route path={`${process.env.PUBLIC_URL}/case-details`} component={CaseDetails}/>
				  <Route path={`${process.env.PUBLIC_URL}/coming-soon`} component={ComingSoon}/>
				  <Route path={`${process.env.PUBLIC_URL}/error`} component={NoMatch}/>
				  <Route path={`${process.env.PUBLIC_URL}/faq`} component={FaqPage}/>
				  <Route path={`${process.env.PUBLIC_URL}/pricing`} component={PricingPage}/>

				  <Route path={`${process.env.PUBLIC_URL}/products`} component={ProductPage}/>
				  <Route path={`${process.env.PUBLIC_URL}/products-details`} component={ProductDetailPage}/>
				  <Route path={`${process.env.PUBLIC_URL}/shop`} component={ShopPage}/>

				  <Route path={`${process.env.PUBLIC_URL}/shop-details`} component={ShopDetailsPage}/>
				  <Route path={`${process.env.PUBLIC_URL}/team`} component={TeamPage}/>
				  <Route path={`${process.env.PUBLIC_URL}/team-details`} component={TeamDetailsPage}/>
				  <Route path={`${process.env.PUBLIC_URL}/blog-standard`} component={BlogStandard}/>
				  <Route path={`${process.env.PUBLIC_URL}/blog-grid`} component={BlogGrid}/>
				  <Route path={`${process.env.PUBLIC_URL}/blog-details`} component={BlogDetails}/>

				  <Route path={`${process.env.PUBLIC_URL}/contact`} component={ContactPage}/>

				  <Route component={NoMatch} />
				</Switch>
			<ToastContainer />
		</BrowserRouter>
		 );
	}
}
 
export default App;
