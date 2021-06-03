import React from 'react';
import Header from "../header/Header";
import Footer from "../footer/Footer";
import './Page.css';

class Page extends React.Component {
    render() {
        return (
            <div className="page">
                <Header activePath={window.location.pathname} pages={this.props.pages}/>
                <div className="page-content">
                    {this.props.children}
                </div>
                <Footer />
            </div>
        );
    }
}

export default Page;
