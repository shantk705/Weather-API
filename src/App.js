import "./App.css";
import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./components/Search_Bar";
import HourlyWeatherList from "./components/HourlyWeatherList";
import Weathernow from "./components/Weathernow";

function App() {
  const [response, setResponse] = useState();

  const fetchWeather = async (city) => {
    await axios
      .get(
        `http://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=8&units=metric&appid=8b0085fe50c89792c823f75df807415e`
      )
      .then((response) => {
        setResponse(response.data);
      });
  };

  return (

    <>
    


    <div className="main">
      <SearchBar fetchWeather={fetchWeather} />
      <Weathernow response={response} />
      <HourlyWeatherList response={response} />

    </div>
    </>

  );
}

export default App;




  



