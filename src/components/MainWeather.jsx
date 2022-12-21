import React from 'react'
import snow from "../imgs/snow.svg";


const MainWeather = () => {
  return (<div className="weather-main">
  <img
    className="main-img"
    src={snow}
    alt=""
  />
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
  )
}

export default MainWeather