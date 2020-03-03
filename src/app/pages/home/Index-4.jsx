import React from 'react';
import Footer from '../../common/footer/Index';
import Header from '../../common/header/Header4';
import Banner from '../../componets/banner/Index4';
import FeaturesPart from '../../componets/FeaturesPart/Index';
import ChoosePart from '../../componets/choosePart/Index';
import Portfolio3Part from '../../componets/portfolio/Index3';
import CounterPart from '../../componets/counterPart/Index';
import FaqPart from '../../componets/FaqPart/Index4';
import GetInTouchPart from '../../componets/getInTouchPart/Index';


class Index4 extends React.Component {
     
    render() { 
        return ( 
            <>
            <Header/>
            <Banner/>
            <FeaturesPart/>
            <ChoosePart/>

            <Portfolio3Part/>

            <CounterPart/>

            <FaqPart/>
            <GetInTouchPart/>
            <Footer/>
            </>
         );
    }
}
 
export default Index4;