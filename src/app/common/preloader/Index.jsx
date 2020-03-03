import React from 'react';

export default class Preloader extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pageLoading: true,
        };
        this.PageLoad = this.PageLoad.bind(this);
    }

    componentDidMount() {
        this.setState({
            pageLoading: false,
        });
    }

    PageLoad(){
        this.setState({
            pageLoading: true,
        });
    }

    render() {
        return (
            <div className="preloader" onLoad={this.PageLoad} style={this.state.pageLoading? {display: 'block'} : { display: 'none'}}>
                <div className="loading">
                    <div className="line" />
                    <div className="line" />
                    <div className="line" />
                    <div className="line" />
                    <div className="line" />
                    <div className="line" />
                    <div className="line" />
                    <div className="line" />
                </div>
            </div>
        );
    }
}

