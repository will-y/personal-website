import React from 'react';
import './Header.css';
import NavComponent from "./NavComponent";
import {BrowserRouter as Router} from "react-router-dom";

class NavBar extends React.Component {
    render() {
        return (
          <div className="nav-bar">
              <Router>
                  <NavComponent title="Test" path="/test" />
                  <NavComponent title="Test" path="/test" />
                  <NavComponent title="Test" path="/test" />
                  <NavComponent title="Test" path="/test" />
              </Router>
          </div>
        );
    }
}

export default NavBar;
