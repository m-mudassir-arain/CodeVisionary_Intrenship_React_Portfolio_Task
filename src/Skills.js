import './App.css';
import React from "react";
import coding_img from "./assets/Skill-img.jpg";
import { Link } from "react-router-dom";
import './DisplayIcons';
import DisplayIcons from './DisplayIcons';

function Skills() {
  return (
    <>
        <section id="Skills" className="w-100 d-flex justify-content-around align-items-center bg-dark-subtle">
            <div className="container d-flex justify-content-center align-items-center  rounded-5 w-100 h-100 p-3" id="skill-section">
                
                <div className="s-left w-50 d-flex flex-column justify-content-center align-items-start" id="skill-left">

                    <div className="mb-5 fw-medium text-secondary" id="div-skill"><p>My Skills</p></div>
                    <div className="mb-3" id="div"><h1>My Feature Skills</h1></div>
                    <div className="mt-3 mb-3" id="div"><p className=" fs-5">I have a great deal of experience with HTML, CSS, JavaScript, and React.js, and I specialize in creating dynamic 
                        and responsive user interfaces. I like to write clear, effective code that improves functionality and design. 
                        Developing smooth, interactive online applications is my area of expertise.
                    </p></div>

                    <div className="mt-3 fw-bold w-100" id="prog-section">
                        HTML
                        <div  className="progress mb-3" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                            <div id="first" className="progress-bar bg-success w-100">100%</div>
                        </div>
                        CSS
                        <div  className="progress mb-3" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                            <div id="second" className="progress-bar bg-success w-75">75%</div>
                        </div>
                        JAVASCRIPT
                        <div  className="progress mb-3" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                            <div id="third" className="progress-bar bg-success w-75">75%</div>
                        </div>
                        REACT.JS
                        <div  className="progress mb-3" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                            <div id="forth" className="progress-bar bg-success w-25">25%</div>
                        </div>
                        BOOTSTRAP
                        <div  className="progress mb-3" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                            <div id="fifth" className="progress-bar bg-success w-50">50%</div>
                        </div>
                    </div>
                </div>

                <div className="a-right d-flex justify-content-center align-items-center ms-5 w-50" id="skill-right">
                    <div className="skills-img bg-secondary-subtle rounded-4">
                        <img src={coding_img} className="coding-img"></img>
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

export default Skills;
