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
            <CardLink className='text-success text-decoration-none' href='https://docs.google.com/document/d/1c5mCvN6fnfzin5IoNwUj3H1cxR4FBLpj08U04_uMDYA/edit?usp=sharing'>
              Click here!
            </CardLink>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default Resume;
