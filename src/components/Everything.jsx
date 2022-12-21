import React from 'react'
import clear from "../img/clear.svg";
import main from "../img/mostlycloudy.svg";
function Everything() {
  return (
    <>
     <div className="everything">
          <div className="time">
            <p className="first_time">03:00</p>
            <p className="second_time">06:00</p>
            <p className="third_time">09:00</p>
            <p className="fourth_time">12:00</p>
            <p className="fifth_time">15:00</p>
            <p className="six_time">18:00</p>
            <p className="seven_time">21:00</p>
          </div>

          <div className="images">
            <img className="first_pic" alt="main" src={main}></img>
            <img className="second_pic" alt="main" src={main}></img>
            <img className="third_pic" alt="main" src={clear}></img>
            <img className="fourth_pic" alt="main" src={clear}></img>
            <img className="fifth_pic" alt="main" src={clear}></img>
            <img className="six_pic" alt="main" src={clear}></img>
            <img className="seven_pic" alt="main" src={main}></img>
          </div>

          <div className="degree">
            <p className="first_degree">8°C</p>
            <p className="second_degree">9°C</p>
            <p className="third_degree">14°C</p>
            <p className="fourth_degree">17°C</p>
            <p className="fifth_degree">18°C</p>
            <p className="six_degree">16°C</p>
            <p className="seven_degree">13°C</p>
          </div>
        </div>
    
    </>
  )
}

export default Everything