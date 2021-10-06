import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './content/Home';
import Projects from "./content/projects/Projects";
import Contact from "./content/Contact";
import Page from "./content/Page";
import Resume from "./content/Resume"


function App(props) {
    const pages = [
        {name: "Home", path: "/"},
        // {name: "About", path: "/about"},
        {name: "Resume", path: "/resume"},
        {name: "Projects", path: "/projects"},
        {name: "Contact Me", path: "/contact"}
    ]

    return (
        <div className="container">
            <Router>
                <Switch>
                    <Route path="/resume">
                        <Page pages={pages}>
                            <Resume />
                        </Page>

                    </Route>
                    <Route path="/projects">
                        <Page pages={pages}>
                            <Projects />
                        </Page>
                    </Route>
                    <Route path="/contact">
                        <Page pages={pages}>
                            <Contact />
                        </Page>
                    </Route>
                    <Route path="/">
                        <Page pages={pages}>
                            <Home />
                        </Page>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
