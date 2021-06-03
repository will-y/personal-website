import React from 'react';
import './Projects.css';
import {withRouter, Link} from "react-router-dom";

class Project extends React.Component {
    render() {
        return (
            <div className="project-container">
                <h2 className="project-title">{this.props.title}</h2>
                <p className="project-description">{this.props.desc}</p>
                {this.props.demo && (<Link className="project-link" to={`${this.props.match.path}/${this.props.demo}`}>Demo Link</Link>)}
                <a className="project-link" href={this.props.src} target="_blank" rel="noreferrer">Source</a>
                {this.props.children}
            </div>
        );
    }
}

export default withRouter(Project);
