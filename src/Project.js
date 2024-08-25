import './App.css';
import React from "react";
import webpage1 from './assets/Sunny-Side-webpage.png';
import webpage2 from './assets/SCO-agency-webpage.png';
import webpage3 from './assets/resturent-webpage.png';
import webpage4 from './assets/Weather-dashboard.png';
import Card from './Card';
import { Link } from "react-router-dom";
import './DisplayIcons';
import DisplayIcons from './DisplayIcons';

function Project(pros) {
  return (
    <>
      <section className=" w-100 d-flex justify-content-center align-items-center mb-4" id="Project">
        <div className="container h-100 w-75 d-flex flex-column justify-content-around align-items-center" id="project-section">
          <div id="heading">
            <h1>My Success Work</h1>
          </div>
          <div className="h-75 w-100 d-flex flex-wrap justify-content-around align-items-center" id="projects-div">

            <Card webimg={webpage1} title='Graphics and Photography' text='Make the webpage using the photos and graphics. For 
              this user-friendly interface, HTML and CSS are used.' weblink=' https://m-mudassir-arain.github.io/SunnySide-webpage-project' />
            
            <Card webimg={webpage2} title='SCO & Marketing Agency' text='Make a website for a digital marketing agency and SCO. For this 
              user-friendly interface, HTML and CSS are used.' weblink='https://m-mudassir-arain.github.io/SCO-and-Marketing-WebProject' />

            <Card webimg={webpage3} title='Restaurant' text='Make a beautiful, straightforward restaurant website. For this user-friendly 
              interface, HTML and CSS are used.' weblink='https://m-mudassir-arain.github.io/Resturent-Webpage-HighTech' />

            <Card webimg={webpage4} title='Weather Dashboard' text='Develop the Weather Dashboard website, which focuses on real-time 
              weather forecasting.utilizing JavaScript, HTML, CSS, and API.' weblink='https://m-mudassir-arain.github.io/Weather-Dashboard-WebProject' />

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

export default Project;
