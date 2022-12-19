import React from "react";
import "./App.css";
import storm from "./imgs/snow.svg";

function App() {
  return (
    <>
      <header>
        <input
          className="input-country"
          type="text"
          placeholder="Search For A City"
        />
        <button className="searchbtn" onClick="">
          Find Weather
        </button>
      </header>


      <body className="main-body">
        <div className="weather-main">
          <img className="main-img" src="https://icon-library.com/images/50x50-icon/50x50-icon-0.jpg" alt="" />
          <div className="weather-main__type">cloudy</div>
          <div className="weather-main__temp">
            <b>tempreature</b> 80 to 100
          </div>
          <div className="weather-main__details">
            <div className="weather-main__humidity ">
              <b>humidity</b> 57%
            </div>
            <div className="weather-main__pressure">
              <b>pressure</b> 965.2
            </div>
          </div>
        </div>
        <div className="weather-list">
          <div className="weather-list__items">
            <p>0:00</p>
            <img className="list-img" src="https://icon-library.com/images/50x50-icon/50x50-icon-0.jpg" alt=""></img>
            <p>17°C</p>
          </div>
          <div className="weather-list__items">
            <p>0:00 </p>
            <img className="list-img" src="https://icon-library.com/images/50x50-icon/50x50-icon-0.jpg" alt=""></img>
            <p>17°C</p>
          </div>
          <div className="weather-list__items">
            <p>0:00</p>
            <img className="list-img" src="https://icon-library.com/images/50x50-icon/50x50-icon-0.jpg" alt=""></img>
            <p>17°C</p>
          </div>
          <div className="weather-list__items">
            <p>0:00 </p>
            <img className="list-img" src="https://icon-library.com/images/50x50-icon/50x50-icon-0.jpg" alt=""></img>
            <p>17°C</p>
          </div>
          <div className="weather-list__items">
            <p>0:00 </p>
            <img className="list-img" src="https://icon-library.com/images/50x50-icon/50x50-icon-0.jpg" alt=""></img>
            <p>17°C</p>
          </div>
          <div className="weather-list__items">
            <p>0:00 </p>
            <img className="list-img" src="https://icon-library.com/images/50x50-icon/50x50-icon-0.jpg" alt=""></img>
            <p>17°C</p>
          </div>
          <div className="weather-list__items">
            <p>0:00</p>
            <img  className="list-img" src="https://icon-library.com/images/50x50-icon/50x50-icon-0.jpg" alt=""></img>
            <p>17°C</p>
          </div>
        </div>
      </body>
    </>
  );
}

export default App;
