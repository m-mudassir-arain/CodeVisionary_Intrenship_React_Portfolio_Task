import './App.css';
import React from "react";
import DisplayIcons from './DisplayIcons';

function Footer() {
    return (
        <section id="Footer" className="bg-black text-white d-flex justify-content-evenly align-items-center">
            <p className="text-center mt-3">&copy;Copyright 2024 M.Mudassir Portfolio. All Rights Resereved | Design by <span className="text-success">M.Mudassir</span></p>
            <div>            
                <DisplayIcons/>
            </div>

        </section>       
    );
}
export default Footer;