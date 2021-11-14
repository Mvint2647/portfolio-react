import React from 'react';
import './homepage.css';
import { CardSubtitle, Card, CardText, CardTitle, CardBody, CardLink } from 'reactstrap';

function Homepage() {
  return (
    
    <div>
      
      <Card>
        <CardBody>
          <CardTitle className='subtitle'> Welcome!</CardTitle>
          <CardSubtitle className='subtitles'>
            My name is Melissa Vint
          </CardSubtitle>
        </CardBody>
        <img alt='Laptop' src='https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' />
        <CardBody>
          <CardText>
            Thank you for taking the time to view my Portfolio
          </CardText>
          <p className='p'>
            (To return to Homepage just refresh the page)
          </p>
          <CardLink>
      </CardLink>
        </CardBody>
      </Card>
    </div>
   
  );
}

export default Homepage;
