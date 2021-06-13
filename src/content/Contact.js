import React from 'react';
import github from '../resources/images/contact/github.png';
import li from '../resources/images/contact/li.png';
import email from '../resources/images/contact/email.png';
import './Contact.css';

class Contact extends React.Component {
    render() {
        return (
            <div className="contact-page-container">
                <h2 className="info">You can contact me at any of the following (email is preferred):</h2>
                <div className="contacts-container">
                    <div className="contact-container">
                        <a className="contact-box" href="mailto: yeltonwh@rose-hulman.edu" draggable={false}>
                            <div className="contact-content">
                                <img className="contact-image" src={email} alt="Email Logo"/>
                                <p className="contact-text">yeltonwh@rose-hulman.edu</p>
                            </div>
                        </a>
                    </div>
                    <div className="contact-container">
                        <a className="contact-box" href="https://github.com/will-y" target="_blank" rel="noreferrer" draggable={false}>
                            <div className="contact-content">
                                <img className="contact-image" src={github} alt="Github Logo"/>
                                <p className="contact-text">Will-Y On Github</p>
                            </div>
                        </a>
                    </div>
                    <div className="contact-container">
                        <a className="contact-box" href="https://www.linkedin.com/in/will-yelton/" target="_blank" rel="noreferrer" draggable={false}>
                            <div className="contact-content">
                                <img className="contact-image" src={li} alt="LinkedIn Logo" />
                                <p className="contact-text">LinkedIn</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
