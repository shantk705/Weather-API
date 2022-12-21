import React from "react";
import main from "../img/mostlycloudy.svg";

function CurrentWeather() {
  return (
    <>
      <div className="current_weather">
        <div className="weathernow">
          <img className="main" alt="main" src={main}></img>

          <h1> overcast clouds</h1>
          <div className="temp">
            {" "}
            <b>Temperature </b> 10° to 11°C
          </div>
          <div className="hum_press">
            <div>
              {" "}
              <p className="hum">
                {" "}
                <b>Humidity</b> 78%
              </p>
            </div>
            <div>
              {" "}
              <p className="press">
                {" "}
                <b>Pressure </b>1008.48
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CurrentWeather;
