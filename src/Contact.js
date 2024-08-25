import './App.css';
import React from "react";
import ContactIcons from './ContactIcons';
// import { Link } from "react-router-dom";
function Contact() {
  return (
    <section className=" w-100 d-flex justify-content-center align-items-center bg-success text-white p-5" id="Contact">
        <div className=" d-flex flex-column justify-content-center align-items-start" id="contact-left">

          <div className="m-4">
            <h1>Get in touch with me</h1>
          </div>
          <div className="m-4">
              <ContactIcons/>
          </div>
          
        </div>
        <form id="contact-right">
            <div className="m-3">
              <label for="Name" className="form-label">Name</label>
              <input type="text" className="form-control" id="Name" aria-describedby="name"></input>
            </div>
            <div className="m-3">
              <label for="Email" className="form-label">Email</label>
              <input type="email" className="form-control"  id="Email" aria-describedby="email"></input>
            </div>
            <div className="m-3">
              <label for="Subject" className="form-label">Subject</label>
              <input type="text" className="form-control"  id="Subject" aria-describedby="subject"></input>
            </div>
            <div className="m-3">
              <label for="Massage" className="form-label">Massage</label>
              <input type="Text" className="form-control"  id="Massage" aria-describedby="massage"></input>
            </div>
            <div className="m-3 d-flex justify-content-center align-items-center ">
              <button className="btn btn-success w-75 border-white" type="submit">Send Massage</button>
            </div>
        </form>
    </section>
  );
}

export default Contact;
