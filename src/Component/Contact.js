import React, { Component } from 'react';
import { SectionWrapper, SingleFeature } from './Utility';
class Contact extends Component {
  render() {
    const details = {
      id: "contact",
      classname: "contact",
      mainHeading: "Feel free to drop us a line",
      subHeading: "We are happy to listen"
    }
    return (
      <SectionWrapper {...details}>
      <div className="col-md-6 col-sm-5">
    <h5>Feel free to drop us a line!</h5>
    <form action="#" className="contact-form" id="contactForm" method="post" name="contactform">
      <div className="form-group">
        <input className="form-control" id="name" name="name" placeholder="Your Name" type="text" required />
      </div>
      <div className="form-group">
        <input className="form-control" id="email" name="email" placeholder="Email Address" type="email" required />
      </div>
      <div className="form-group">
        <textarea className="form-control" id="message" name="massage" placeholder="Type your message here" rows={5} required defaultValue={""} />
      </div>
      <div id="contactFormResponse" />
      <button id="cfsubmit" type="submit" className="btn btn-dark btn-block contact-submit">Give us a shout</button>
    </form>
  </div>
      </SectionWrapper>
    );
  }
}

export default Contact;
