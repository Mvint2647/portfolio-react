import React from "react";
import "./contact.css";
import { CardLink } from "reactstrap";

function Contact() {
  return (
    <div>
      <form id="form" className="container col-3 text-white text-center">
        <div id="formbox">
          <h3>Contact Me</h3>
          <label for="exampleInputEmail" className="form-label">
            Name
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="formbox">
          <label for="exampleInputName" className="form-label">
            Email address
          </label>
          <input type="Name" class="form-control" id="exampleInputName" />
        </div>
        <button type="submit" id="btn">
          Submit
        </button>
      </form>
      <div>
      <CardLink className='text-success  text-decoration-none' a href='Melissavinny1133@gmail.com'>
              {'Melissavinny1133@gmail.com'}
            </CardLink>
      </div>
    </div>
  );
}

export default Contact;
