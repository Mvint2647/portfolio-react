import React from 'react';
import './about.css';
import Icon from '../images/Business-Card.jpg';
import { CardBody } from 'reactstrap';

function About() {
  return (
    <div>
      <div id='aboutStyle'>
        <h1>About Me</h1>
        <img id='Mybusiness' src={Icon} alt='buisness-card' />
        <CardBody>
        <p>Certificate in full stack web development from UNC Charlotte and desire for a role in front-end web development. Skills include JavaScript, CSS, React.js, and responsive web design with two years of graphic design education at SCC. Strengths include meeting deadlines, creativity, and teamwork.</p>
        <p>Successfully rebranded an organization, which increased exposure and social media following using data information. Used graphic design to help redesign as well as marketing to grow more connections!</p> 
        <p>Passionate about approaching programming challenges from different angles and collaborating with others to create meaningful web applications. Excited to develop responsive websites. Positioned to provide unique perspectives on how end users interact with websites and software platforms by leveraging background in digital marketing.</p>
        </CardBody>
        <div>
        </div>
      </div>
    </div>
  );
}

export default About;
