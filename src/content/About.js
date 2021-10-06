import React from 'react';
import "./About.css";

class About extends React.Component {
    render() {
        return (
            <div className="about-container">
                <h1>About Me</h1>
                <h2>Education</h2>
                <p>I am currently a senior at Rose-Hulman Institute of Technology. I am getting a triple major in Computer Science, Data Science, and Economics.</p>
                <h2>Work</h2>
                <p>For the past three summers, I worked as an applications developer at UPS. I did a couple of different internal web development projects.</p>
                <h2>Hobbies</h2>
                <p>In my free time, I like to program, especially things related to machine learning, watch sports, and play videogames with my friends. I also combine those two hobbies occasionally to make mods for videogames.</p>
                <h2>Favorite Technologies</h2>
                <h3>Programming Language</h3>
                <p>Javascript for front-end and some back-end development. I also like using Python and Java for back-end development.</p>
                <h3>Web Framework</h3>
                <p>React is probably my favorite at the moment, I have also used Angular and like it too.</p>
                <h3>IDE</h3>
                <p>Intellij family of products for pretty much everything.</p>
            </div>
        );
    }
}

export default About;
