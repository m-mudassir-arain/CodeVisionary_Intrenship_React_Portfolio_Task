import "./App.css";
import React from "react";
import profile from "./assets/portfolio-pic.png";
import "./DisplayIcons";
import DisplayIcons from "./DisplayIcons";
import porfile2 from './assets/portfolio2.png';
import coding_img from "./assets/Skill-img.jpg";
import webpage1 from './assets/Sunny-Side-webpage.png';
import webpage2 from './assets/SCO-agency-webpage.png';
import webpage3 from './assets/resturent-webpage.png';
import webpage4 from './assets/Weather-dashboard.png';
import Card from './Card';
import ContactIcons from './ContactIcons';
import { useState } from "react";



function Home() {

    let [pageLink, setPageLink] = useState(false);
    let visitContact = () => {
      setPageLink = window.location.href="/contact";
    }
  return (
    <>
      <section id="Home">

        <div className="container" id="home-section">

          <div id="home-left">
            <h1>
              Hello,<br></br> I'm Muhammad Mudassir<br></br>
              <span className="text-success">FRONTEND DEVELOPER</span>
            </h1>
            <p>
              I'm an enthusiastic front-end programmer. Using web design to create user-friendly, responsive interfaces 
              and intuitive online experiences is something I enjoy doing.
            </p>
            <div className="d-flex justify-content-start align-items-center mt-2" id="home-buttons">
              <button className="btn btn-success " type="button" href={pageLink} onClick={visitContact}>Contact me</button>
              <DisplayIcons/>
            </div>
          </div>

          <div className="h-right w-50 h-100 d-flex justify-content-center align-items-center ms-5" id="home-right">
            <div className="portfolio-img w-100 h-80 d-flex justify-content-center align-items-center bg-success rounded-circle overflow-hidden">
              <img src={profile} className="w-100 h-80"></img>
            </div>
          </div>

        </div>

      </section>

      <section id="About">

      <div className="container d-flex justify-content-center align-items-center vw-100 h-100 mt-5" id="about-section">

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

    <section id="Project" className=" w-100 d-flex justify-content-center align-items-center mb-4" >
      <div className="container h-100 w-75 d-flex flex-column justify-content-around align-items-center" id="project-section">
        <div id="heading">
          <h1>My Success Work</h1>
        </div>
        <div className="h-75 w-100 d-flex flex-wrap justify-content-around align-items-center" id="projects-div">

          <Card webimg={webpage1} title='Graphics and Photography' text='Make the webpage using the photos and graphics. For 
            this user-friendly interface, HTML and CSS are used.' weblink=' https://m-mudassir-arain.github.io/SunnySide-webpage-project' />
          
          <Card webimg={webpage2} title='SCO & Marketing Agency' text='Make a website for a digital marketing agency and SCO. For this 
            user-friendly interface, HTML and CSS are used.' weblink='#' />

          <Card webimg={webpage3} title='Restaurant' text='Make a beautiful, straightforward restaurant website. For this user-friendly 
            interface, HTML and CSS are used.' weblink='https://m-mudassir-arain.github.io/Resturent-Webpage-HighTech' />

          <Card webimg={webpage4} title='Weather Dashboard' text='Develop the Weather Dashboard website, which focuses on real-time 
            weather forecasting.utilizing JavaScript, HTML, CSS, and API.' weblink='https://m-mudassir-arain.github.io/Weather-Dashboard-WebProject' />

        </div>
        
      </div>
    </section>

    <section id="Contact" className=" w-100 d-flex justify-content-center align-items-center bg-success text-white p-5" >
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

    <section id="Footer" className="bg-black text-white d-flex justify-content-evenly align-items-center">
            <p className="text-center mt-3">&copy;Copyright 2024 M.Mudassir Portfolio. All Rights Resereved | Design by <span className="text-success">M.Mudassir</span></p>
            <div>            
                <DisplayIcons/>
            </div>

        </section>   
    </>
  );
}

export default Home;
