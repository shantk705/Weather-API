import { imageChooser } from "../Chooseimage/Chooseimage";




function Weathernow({ response }) {
  const res = response && response.list[0];

  return (
    <div className="weathernow">
      {console.log(res)}
      {res && (
        <div>
          {imageChooser(res.weather[0].main, "weather")}
          <h3>{res.weather[0].description}</h3>
          <h2>{`Temperature ${res.main.temp_min}\u00b0C to ${res.main.temp_max}\u00b0C`}</h2>
          <h4>{`Humidity ${res.main.humidity}%  Pressure ${res.main.pressure}`}</h4>
        </div>
      )}
    </div>
  );
}
export default Weathernow;





