import React from 'react';
import './Header.css';
import {Link} from "react-router-dom";


class NavComponent extends React.Component {

    render() {
        return <Link to={this.props.path}>{this.props.title}</Link>
    }
}

export default NavComponent;
