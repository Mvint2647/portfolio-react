import React from 'react';
import './Resume';
import Icon from '../images/ss90.jpg';
import {
  Card,
  CardText,
  CardTitle,
  CardBody,
  CardLink,
} from 'reactstrap';

function Resume() {
  return (
    <section>
      <div>
        <Card>
          <CardBody>
            <CardTitle tag='h5'>Resume</CardTitle>
          </CardBody>
          <img id='ss90' src={Icon} alt='ss90'/>
          <CardBody>
            <CardText>View full Resume</CardText>
            <CardLink className='text-success text-decoration-none' href='https://github.com/Mvint2647/portfolio-react'>
              Click here!
            </CardLink>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default Resume;
