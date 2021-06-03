import React from 'react';
import Project from "./Project";
import './Projects.css';
import {BrowserRouter as Router, Switch, Route, useRouteMatch, withRouter} from "react-router-dom";
import Snake from "./Snake";

class Projects extends React.Component {
    render() {
        console.log(this.props)
        return (
            <Switch>
                <Route path={`${this.props.match.path}/snake`}>
                    <Snake />
                </Route>
                <Route path={this.props.match.path}>
                    <div className="projects-container">
                        <Project title="Snake Machine Learning" desc="A neural network that learns to play Snake." src="https://github.com/will-y/snake" demo="snake"/>
                        <Project title="Elemental Mastery" desc="A mod for Minecraft that adds many features to the base game." src="https://github.com/will-y/elementalmastery">
                            <a className="project-link" href="https://www.curseforge.com/minecraft/mc-mods/elemental-mastery" target="_blank" rel="noreferrer">More Information</a>
                        </Project>
                        <Project title="On Rails" desc="A simple Ruby on Rails app that simulations ticket buying and train schedules for Amtrak trains. Connects to three different backend databases." src="https://github.com/will-y/on-rails" />
                        <Project title="What's For Dinner?" desc="A simple Angular app that users can see upcoming plans for dinner as well as add new meals, and recipes. Includes an express backend server and a MongoDB database for storing data." src="https://github.com/will-y/WhatsForDinner">
                            <a className="project-link" href="https://github.com/will-y/WhatsForDinnerServer" target="_blank" rel="noreferrer">Source (Backend)</a>
                        </Project>
                    </div>
                </Route>
            </Switch>
        );
    }
}

export default withRouter(Projects);
