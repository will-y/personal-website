import React from 'react';
import './Header.css';
import {Link} from "react-router-dom";


class NavComponent extends React.Component {

    render() {
        console.log("nav-component" + (this.props.active ? " nav-component-active" : ""))
        return (
            <Link className={"nav-component" + (this.props.active ? " nav-component-active" : "")} to={this.props.path}>
                {this.props.title}
            </Link>
        );
    }
}

export default NavComponent;
