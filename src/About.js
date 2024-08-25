import './App.css';
import React from "react";
import porfile2 from './assets/portfolio2.png';
import './DisplayIcons';
import DisplayIcons from './DisplayIcons';
import { Link } from "react-router-dom";

function About() {
  return (
    <>
    <section id="About" className="About-section">

      <div className="container d-flex justify-content-center align-items-center vw-100 h-100" id="about-section">

        <div className="a-left h-left d-flex justify-content-center align-items-center ms-5" id="about-left">
          <div className="portfolio-img d-flex justify-content-center align-items-center bg-secondary-subtle rounded-5">
            <img src={porfile2} className="profile-2 w-100"></img>
          </div>
        </div>

        <div className="a-right d-flex flex-column justify-content-evenly align-align-items-start w-50 ms-5" id="about-right">
            <div className="mb-5"><h1>MY BIOGHRAPY</h1></div>

            <div id="div-para" className="mt-3 mb-5"><p className=" fs-5">As a front-end developer pursuing a BS in computer science, my name is Muhammad Mudassir. with a full year of 
              development experience. My ability to create reliable and effective web applications has improved. I have a strong 
              interest in using technology, and I'm always looking for ways to develop new skills and advance in the tech sector.
            </p></div>

            <div id="contact-info">
              <p>Name: <span className="fw-medium">Muhammad Mudassir</span></p>
              <p>Location: <span className="fw-medium">Nawabshah, Pakistan</span></p>
              <p>Email: <span className="fw-medium">mmudassirarain04@gmail.com</span></p>
              <p>Phone: <span className="fw-medium">0308-3065787</span></p>
            </div>

            <div className="d-flex justify-content-start align-items-center mt-5" id="about-buttons">
              <p className="fw-bold fs-5 text-center" >Follow me on</p>
              <DisplayIcons/>
            </div>
        </div>

      </div>

    </section>

    <footer id="page-footer">
      <div className="footer-div">
        <div>
          <h1>Get in touch with me</h1>
          <p>mmudassirarain04@gmail.com</p>
          <p>+92308-3065787</p>
        </div>
        <div id="nav-links">
          <h1>Links</h1>
          <ul className=" ms-auto mb-2 mb-lg-0">
                <li className="">
                  <Link className="" aria-current="page" to="/"> Home</Link>
                </li>
                <li className="">
                  <Link className="" to="/About"> About</Link>
                </li>
                <li className="">
                  <Link className="" to="/Skills">Skills</Link>
                </li>
                <li className="">
                  <Link className="" to="/Project">Projects</Link>
                </li>
                <li className="">
                  <Link className="" to="/Contact"> Contact</Link>
                </li>
              </ul>
        </div>
        <div id="follow-div" className="d-flex flex-column align-items-center justify-content-center">
          <h1>Follow me on</h1>
          <DisplayIcons/> 
        </div>
      </div>
      <div className="border-top w-75">
      <p className="text-center mt-3">&copy;Copyright 2024 M.Mudassir Portfolio. All Rights Resereved | Design by <span className="text-success">M.Mudassir</span></p>
    </div>
    </footer>
    
    </>
  );
}

export default About;
