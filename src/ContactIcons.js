import React from 'react'
import {FaPhone} from 'react-icons/fa';
import { IoLocationSharp } from "react-icons/io5";
import { CgMail } from "react-icons/cg";

function ContactIcons() {
    return (
      <div className="d-flex flex-column justify-content-evenly align-items-start w-100" id="ContactIcons">
        <a className="icon-link icon-link-hover  text-white text-decoration-none mb-3" ><FaPhone className="fs-2 text-white "/>0308-3065787</a>
        <a className="icon-link icon-link-hover  text-white text-decoration-none mb-3" ><CgMail  className="fs-2 text-white "/>mmudassiraarain04@gmail.com</a>
        <a className="icon-link icon-link-hover  text-white text-decoration-none mb-3" ><IoLocationSharp  className="fs-2 text-white "/>Nawabshah, Pakistan</a>
      </div>
    )
}

export default ContactIcons