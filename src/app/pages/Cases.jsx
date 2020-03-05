import React from 'react';
// import NewsPart from '../componets/NewsPart/Index';
// import Footer from '../common/footer/Index';
// import Header from '../common/header/Index';
import { Switch, Route, Redirect } from 'react-router-dom';
// import Portfolio from '../componets/portfolio/Index';
import LmsPlatform from './cases/LmsPlatform';
import Marketplace from './cases/Marketplace';
import Index from './cases/Index';

class CaseStudy extends React.Component {

    render() {
        return (
            <Switch>
                <Route path="/cases/index" component={Index} />
                <Route path="/cases/lms-platform" component={LmsPlatform} />
                <Route path="/cases/marketplace" component={Marketplace} />
                <Redirect
                    from="/cases"
                    to={{
                        pathname: '/cases/index',
                    }}
                    exact
                />
            </Switch>
        );
    }
}

export default CaseStudy;