import React from 'react';
//import { toast } from 'react-toastify';
import Header from '../../common/header/Index';
import Footer from '../../common/footer/Index';

import Banner from '../../componets/banner/Index';
import WhoWeAreArea from '../../componets/whoWeAreArea/Index';
import SolutionPart from '../../componets/solutionPart/Index';
import LatestServicesPart from '../../componets/LatestServicesPart/Index';
import WhyChoosePart from '../../componets/whyChoosePart/Index';
// import CaseStudiesPart from '../../componets/CaseStudiesPart/Index'
// import TeamMemberPart from '../../componets/teamMemberPart/Index';
import ContactUsPart from '../../componets/contactUsPart/Index';
import OueChoosePart from '../../componets/OueChoosePart/Index';
// import MeetUsPart from '../../componets/MeetUsPart/Index';
// import LatestNewsPart from '../../componets/latestNewsPart/Index';
import Brand2Part from '../../componets/brand2Part/Index';
import Preloader from "../../common/preloader/Index";


class Index1 extends React.Component {

    render() { 
        return ( 
            <>
            <Preloader/>
            <Header />
            <Banner/>
            <WhoWeAreArea/>
            <SolutionPart/>
            <LatestServicesPart/>
            <WhyChoosePart/>
            {/* <CaseStudiesPart/> */}
            {/* <TeamMemberPart/> */}
            <OueChoosePart/>
            {/* <MeetUsPart/> */}
            <ContactUsPart/>
            {/* <LatestNewsPart/> */}
            <Brand2Part/>
            <Footer />
            </>
         );
    }
}
 
export default Index1;