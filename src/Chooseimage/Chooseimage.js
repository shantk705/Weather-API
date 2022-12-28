import clear from "../img/clear.svg";
import drizzle from "../img/drizzle.svg";
import fog from "../img/fog.svg";
import mostlycloudy from "../img/mostlycloudy.svg";
import rain from "../img/rain.svg";
import snow from "../img/snow.svg";
import storm from "../img/storm.svg";
import unknown from "../img/unknown.svg";

export const imageChooser = (value, className) => {
  let image;
  if (value === "Thunderstorm") {
    image = storm;
  } else if (value === "Drizzle") {
    image = drizzle;
  } else if (value === "Rain") {
    image = rain;
  } else if (value === "Snow") {
    image = snow;
  } else if (value === "Clouds") {
    image = mostlycloudy;
  } else if (value === "Clear") {
    image = clear;
  } else if (value === "Fog") {
    image = fog;
  } else image = unknown;
  // console.log("TEST", image.toString());
  return <img className={className} src={image} alt={"aaa"} />;
};