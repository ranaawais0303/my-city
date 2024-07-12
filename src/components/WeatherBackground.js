import React from "react";
import "../styles.css";

import "react-rain-animation/lib/style.css";
import Rainy from "./Rainy/Rainy";
import SunWithRays from "./Sunny/SunWithRays";
import Cloud from "./Cloud/Cloud";
import FogAnimation from "./Fog/FogAnimation";
import Drizzling from "./Drizzle/Drizzling";
import Snowfall from "./Snowy/Snowfall";
import StormCloud from "./Thunder/StormCloud";
import Thunderstorm from "./Thunder/ThunderStorm";

const WeatherBackground = ({ weather }) => {
  let className = "clear";
  let weatherComponent = null;

  if (weather) {
    if (weather.includes("Sunny")) {
      className = "sunny";
      weatherComponent = <SunWithRays />;
    } else if (weather.includes("Partly cloudy")) {
      className = "partly-cloudy";
      weatherComponent = <Cloud />;
    } else if (weather.includes("Cloudy")) {
      className = "cloudy";
      weatherComponent = <Cloud />;
    } else if (weather.includes("Overcast")) {
      className = "cloudy";
      weatherComponent = <Cloud />;
    } else if (weather.includes("Rain") || weather.includes("rain")) {
      className = "rainy";
      weatherComponent = <Rainy />;
    } else if (weather.includes("Mist")) {
      className = "mist";
      weatherComponent = <FogAnimation />;
    } else if (weather.includes("Fog")) {
      className = "fog";
      weatherComponent = <FogAnimation />;
    } else if (weather.includes("Clear")) {
      className = "clear";
    } else if (weather.includes("Hazy")) {
      className = "hazy";
      weatherComponent = <FogAnimation />;
    } else if (weather.includes("Drizzle") || weather.includes("drizzle")) {
      className = "drizzle";
      weatherComponent = <Drizzling />;
    } else if (weather.includes("Snow")) {
      className = "snowy";
      weatherComponent = <Snowfall />;
    } else if (weather.includes("Blizzard")) {
      className = "snowy";
      weatherComponent = <Snowfall />;
    } else if (weather.includes("Storm")) {
      className = "stormy";
      weatherComponent = <StormCloud />;
    } else if (weather.includes("Thunderstorm")) {
      className = "thunderstorm";
      weatherComponent = <Thunderstorm />;
    } else if (weather.includes("Thundery")) {
      className = "thunderyoutbreaks";
      weatherComponent = <Thunderstorm />;
    } else {
      className = "clear";
    }
  }

  return (
    <div className={`weather-background ${className}`}>{weatherComponent}</div>
  );
};

export default WeatherBackground;
