import React from "react";
import "../styles.css";

import "react-rain-animation/lib/style.css";
import Rainy from "./Rainy/Rainy";
import SunWithRays from "./Sunny/SunWithRays";
import Cloud from "./Cloud/Cloudy";

const WeatherBackground = ({ weather }) => {
  let className = "clear";
  let weatherComponent = "";

  if (weather) {
    if (weather.includes("Sunny")) {
      weatherComponent = <SunWithRays />;
      className = "sunny";
    } else if (weather.includes("Partly cloudy")) {
      className = "partly-cloudy";
      weatherComponent = <Cloud />;
    } else if (weather.includes("Cloudy")) className = "cloudy";
    else if (weather.includes("Overcast")) className = "cloudy";
    else if (weather.includes("Mist")) className = "mist";
    else if (weather.includes("Fog")) className = "fog";
    else if (weather.includes("Clear")) className = "clear";
    else if (weather.includes("Hazy")) className = "hazy";
    else if (weather.includes("Rain") || weather.includes("rain")) {
      weatherComponent = <Rainy />;
      className = "rainy";
    } else if (weather.includes("Drizzle")) className = "drizzle";
    else if (weather.includes("Snow")) className = "snowy";
    else if (weather.includes("Blizzard")) className = "snowy";
    else if (weather.includes("Storm")) className = "stormy";
    else if (weather.includes("Thunderstorm")) className = "thunderstorm";
    else if (weather.includes("Thundery")) className = "thunderyoutbreaks";
    else className = "clear";
  }

  return (
    <div className="cloudy">
      <Cloud />
    </div>
  );
};

export default WeatherBackground;
