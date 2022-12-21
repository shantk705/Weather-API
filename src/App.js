import React, { useState } from "react";
import "./App.css";
import Search_bar from "./components/search_bar";
import WeatherList from "./components/WeatherList";
import MainWeather from "./components/MainWeather";

function App() {
  const [response, setResponse] = useState([]);
  const apiGet = () => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=lebanon&appid=039085608fe94c2eb4c476cb202f9488"
    )
      .then((response) => response.json())
      .then((json) => setResponse((prev) => [...prev, json]));
  };

  return (
    <>
      <Search_bar />
      <button onClick={apiGet} />
      {console.log(response)}

      <body className="main-body">
        <MainWeather />

        <div className="weather-list">
          <WeatherList />
        </div>
      </body>
    </>
  );
}

export default App;
