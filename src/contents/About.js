import React from 'react';
import './about.css';
import Icon from '../images/Business-Card.jpg';
import { CardLink } from 'reactstrap';

function About() {
  return (
    <div>
      <div id='aboutStyle'>
        <h1>About Me</h1>
        <img id='Mybusiness' src={Icon} alt='buisness-card' />
        <p>
          Hello, my name is Mel. I am 25 and consider myself to be a creative
          individual.{' '}
        </p>
        <p>I am hoping to excel in Web Development to combine my skills.</p>
        <p>
          My ultimate goal when working with clients/businesses are to make
          their ideas come alive!
        </p>
        <div>
         
            <CardLink className='text-success text-decoration-none' a href='Melissavinny1133@gmail.com'>
              {'Melissavinny1133@gmail.com'}
            </CardLink>
      
        </div>
      </div>
    </div>
  );
}

export default About;
