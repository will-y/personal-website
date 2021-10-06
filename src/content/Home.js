import React from 'react';
import "./About.css"

class Home extends React.Component {
    render() {
        return (
            <div className="about-container">
                <h1>Welcome to My Website!</h1>

                <p>Hello, I am Will Yelton and I am currently a Senior at Rose-Hulman Institute of Technology. I am studying Computer Science, Data Science, and Economics.</p>

                <p>On this website you can find information about me, information about projects I have done, and ways to contact me.</p>

                <p>This website was made by me from scratch using React.</p>
            </div>
        );
    }
}

export default Home;
