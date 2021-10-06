import React from 'react';
import Project from "./Project";
import './Projects.css';
import {Switch, Route, withRouter} from "react-router-dom";
import Snake from "./Snake";

class Projects extends React.Component {
    render() {
        return (
            <Switch>
                <Route path={`${this.props.match.path}/snake`}>
                    <Snake />
                </Route>
                <Route path={this.props.match.path}>
                    <div className="projects-container">
                        <Project title="Snake Machine Learning" desc="A neural network that learns to play Snake." src="https://github.com/will-y/snake" demo="snake"/>
                        <Project title="Bio-AI Demo App" desc="A demo app that contains some projects I worked on in the class Bio Inspired Artificial Intelligence." src="https://github.com/will-y/bioai">
                            <a className="project-link" href="https://bioai.willyelton.dev" target="_blank" rel="noreferrer">View App</a>
                        </Project>
                        <Project title="Elemental Mastery" desc="A mod for Minecraft that adds many features to the base game." src="https://github.com/will-y/elementalmastery">
                            <a className="project-link" href="https://www.curseforge.com/minecraft/mc-mods/elemental-mastery" target="_blank" rel="noreferrer">More Information</a>
                        </Project>
                        <Project title="This Website" desc="The website that you are currently on! Made using React and hosted on Firebase." src="https://github.com/will-y/personal-website" />
                        <Project title="On Rails" desc="A simple Ruby on Rails app that simulates ticket buying and train schedules for Amtrak trains. Connects to three different backend databases." src="https://github.com/will-y/on-rails" />
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
