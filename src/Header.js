import "./App.css";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
      <nav className="navbar sticky-top navbar-expand-lg navbar-dark  d-flex justify-content-between align-items-center">
        <div
          className="container-fluid d-flex justify-content-evenly align-items-center mt-2 mb-2"
          id="container">
          <a className="navbar-brand fs-5 fw-bolder" href="#" id="name">
            Muhammad Mudassir
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active fs-5" aria-current="page" to="/"> Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-5 " to="/About"> About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-5" to="/Skills">Skills</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-5" to="/Project">Projects</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-5" to="/Contact"> Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
};

export default Header;
