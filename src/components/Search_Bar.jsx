import { useState } from "react";


function SearchBar({ fetchWeather }) {
  const [city, setCity] = useState("");
  const fetchWeatherHandler = () => {
    fetchWeather(city);
  };
  return (

    <header>
    <div class="top">
      <input
        type="text"
        className="search"
        value={city}
        placeholder="Enter location"
        onChange={(e) => setCity(e.target.value)}
      />
      <button className="button" onClick={fetchWeatherHandler}>Find Weather</button>
    </div>
    </header>
  );
}
export default SearchBar;









