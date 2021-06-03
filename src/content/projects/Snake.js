import React from 'react';
import './Projects.css';
import {Link} from "react-router-dom";

class Snake extends React.Component {
    render() {
        return (
          <div className="projects-container">
              <Link to="/projects" className="back-button">Back To Projects</Link>
              <h1>Snake Machine Learning</h1>
              <h2>Snake Game</h2>
              <p>Snake is a very simple game where the player controls a snake. The goal is to collect dots that appear on the screen. Each dot collected will increase the snake's length by 1. The goal is to survive and collect as many dots as possible before running into a wall or yourself. More information <a href="https://en.wikipedia.org/wiki/Snake_(video_game_genre)" target="_blank" rel="noreferrer" className="project-link-text">here</a> and play the game <a href="https://playsnake.org/" target="_blank" rel="noreferrer" className="project-link-text">here</a>.</p>
              <h2>Motivation</h2>
              <p>Since Snake is a simple game, it is a good target for developing a neural network to play it. There is not a lot of data that has to be processed by the player, and the input into the game is very simple (move one of four directions). This made the game a good target for a first attempt for me to develop a neural network algorithm for learning to play a video game.</p>
              <h2>How it Works</h2>
              <h3>Basic Idea</h3>
              <p>First the neural network will need to get some kind of input data from the game, then given that data produce an output to the game. In my version, the neural network will be given input data and then produce an output to the game every frame. There also needs to be some way for the neural network to "learn" and get better at the game. I do this through neuroevolution.</p>
              <h3>Input Data</h3>
              <p>The neural network needs some data in order to decide what to do. This could be the entire board space, but this is a lot of information and it would take a long time to train the network. What I decided to do is give the network data about where food or something that will kill it is relative to itself. For each of the cardinal and ordinal directions, I give the network the distance to food (or -1 if there is no food in that direction) and the distance to something that will kill it.</p>
              <h3>Output to Game</h3>
              <p>The output layer of the neural network consists of 4 nodes, one for each direction. Then, the node with the max value will be used as the direction that the snake moves in the next step.</p>
              <h3>Training the Network</h3>
              <p>The network training is done with a very simple neuroevolution algorithm. Only the weights of the networks are changed, the topology is set initially and not changed. The system starts with an initial population of neural networks with random weights. Then each network is tested by playing Snake. Its fitness is determined by how long it survived and how many dots it was able to collect. Then, the networks that performed the best are selected and bred together to form the next generation. Two networks are bred by taking either a weight from one parent or the other and giving it to the child, and repeating this for all weights. This whole process then repeats until the networks are trained to play Snake.</p>
              <h2>Demo</h2>
              <p>Put gifs here that show the training process (maybe after a different amount of generations</p>
          </div>
        );
    }
}

export default Snake;
