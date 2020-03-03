import React from 'react';
import './Index.scss'
import './SideBar.scss';

import Footer from '../../common/footer/Index';
import Header from '../../common/header/Index';
import SideBar from './Sidebar';
import ProductSlider from "./ProductSlider";
import ProductHeader from "./Header";

class ProductDetailPage extends React.Component {


    render() {

        return (
            <>
                <Header/>
                <ProductHeader/>
                <div className="shop-area gray-bg  pb-120">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 col-md-12">
                                <div className={`product-preview`}>
                                    <div className="product-slider">
                                        <ProductSlider/>
                                    </div>
                                </div>
                            </div>
                            <SideBar/>
                        </div>
                    </div>
                </div>
                {/* /*====== SHOP PART ENDS ====== */}
                <Footer/>
            </>
        );
    }
}

export default ProductDetailPage;