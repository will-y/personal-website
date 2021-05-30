import React from 'react';
import Header from "../header/Header";
import Footer from "../footer/Footer";

class Page extends React.Component {
    render() {
        return (
            <div>
                <Header activePath={window.location.pathname} pages={this.props.pages}/>
                {this.props.children}
                <Footer />
            </div>
        );
    }
}

export default Page;
