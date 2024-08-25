import React from 'react'
import {FaGithub, FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa';
import './App.css';


function DisplayIcons() {
  return (
    <div className="d-flex justify-content-evenly align-items-center w-50" id="DisplayIcons">
      <a className="icon-link icon-link-hover" href=" https://github.com/m-mudassir-arain"><FaGithub className="fs-2 text-success ms-3"/></a>
      <a className="icon-link icon-link-hover" href=" https://facebook.com/khalidsharif.arain.1"><FaFacebook className="fs-2 text-success ms-3"/></a>
      <a className="icon-link icon-link-hover" href=" https://instagram.com/m_mudassir_arain"><FaInstagram className="fs-2 text-success ms-3"/></a>
      <a className="icon-link icon-link-hover" href=" https://linkedin.com/in/mudassirarain04"><FaLinkedin className="fs-2 text-success ms-3"/></a>
    </div>
  )
}


export default DisplayIcons

