import React from 'react';
import './Footer.css';


class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="links">
                    <a href="https://github.com/will-y" target="_blank" rel="noreferrer" className="footer-link">Github</a>
                    <a href="https://www.linkedin.com/in/will-yelton/" target="_blank" rel="noreferrer" className="footer-link">LinkedIn</a>
                </div>
            </footer>
        );
    }
}

export default Footer;
