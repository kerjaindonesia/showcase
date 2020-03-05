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
import ServicesDetails from './pages/service/Details';
import Cases from './pages/Cases';
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
				  <Route exact path={`/`} component={Index1}/>
				  <Route path={`/index`} component={Index1}/>
				  <Route path={`/home`} component={Index1}/>
				  <Route path={`/home-1`} component={Index1}/>
				  <Route path={`/index2`} component={Index2}/>
				  <Route path={`/index3`} component={Index3}/>
				  <Route path={`/index4`} component={Index4}/>

				  <Route path={`/about`} component={AboutPage}/>
				  <Route path={`/services-details`} component={ServicesDetails}/>

				  <Route path={`/cases`} component={Cases}/>
				  <Route path={`/case-details`} component={CaseDetails}/>
				  <Route path={`/coming-soon`} component={ComingSoon}/>
				  <Route path={`/error`} component={NoMatch}/>
				  <Route path={`/faq`} component={FaqPage}/>
				  <Route path={`/pricing`} component={PricingPage}/>

				  <Route path={`/products`} component={ProductPage}/>
				  <Route path={`/products-details`} component={ProductDetailPage}/>
				  <Route path={`/shop`} component={ShopPage}/>

				  <Route path={`/shop-details`} component={ShopDetailsPage}/>
				  <Route path={`/team`} component={TeamPage}/>
				  <Route path={`/team-details`} component={TeamDetailsPage}/>
				  <Route path={`/blog-standard`} component={BlogStandard}/>
				  <Route path={`/blog-grid`} component={BlogGrid}/>
				  <Route path={`/blog-details`} component={BlogDetails}/>

				  <Route path={`/contact`} component={ContactPage}/>

				  <Route component={NoMatch} />
				</Switch>
			<ToastContainer />
		</BrowserRouter>
		 );
	}
}
 
export default App;
