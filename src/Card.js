import React from "react";
import './App.css';
// import webpage1 from './assets/Sunny-Side-webpage.png';
// import webpage2 from './assets/SCO-agency-webpage.png';
// import webpage3 from './assets/resturent-webpage.png';
// import webpage4 from './assets/Weather-dashboard.png';

function Card({webimg, title, text, weblink}) {
  return (
    <div className=" d-flex justify-content-center align-items-center" id="project">
      <div id="prog-img">
        <img src={webimg} className=""></img>
      </div>
      <div id="prog-text">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
         {text}
        </p>
        <a href={weblink} target="blank" className="btn btn-success">
          Visit Website
        </a>
      </div>
    </div>
  );
}

export default Card;
