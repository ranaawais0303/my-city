import React from "react";
import "../styles.css";

import "react-rain-animation/lib/style.css";
import Rainy from "./Rainy/Rainy";
import SunWithRays from "./Sunny/SunWithRays";
import Cloud from "./Cloud/Cloud";
import FogAnimation from "./Fog/FogAnimation";
import Snowfall from "./Snowy/Snowfall";
import StormCloud from "./Thunder/StormCloud";
import CloudReal from "./Cloud/CloudReal";
import BlinkingLight from "./Thunder/BlinkingLight";
import Drizzle from "./Drizzle/Drizzle";
import Cloudy from "./Cloud/Cloudy";

const WeatherBackground = ({ weather }) => {
  let className = "clear";
  let weatherComponent = null;

  if (weather) {
    if (weather.includes("Sunny") || weather.includes("Clear")) {
      className = "sunny";
      weatherComponent = <SunWithRays />;
    } else if (
      weather.includes("Partly cloudy") ||
      weather.includes("Partly Cloudy")
    ) {
      className = "partly-cloudy";
      weatherComponent = <Cloud />;
    } else if (
      weather.includes("Cloudy") ||
      weather.includes("Cloud") ||
      weather.includes("Overcast")
    ) {
      className = "rainy";
      weatherComponent = <CloudReal />;
    } else if (weather.includes("Rain") || weather.includes("rain")) {
      className = "rainy";
      weatherComponent = <Rainy />;
    } else if (
      weather.includes("Mist") ||
      weather.includes("Fog") ||
      weather.includes("Hazy")
    ) {
      className = "rainy";
      weatherComponent = <FogAnimation />;
    } else if (weather.includes("Drizzle") || weather.includes("drizzle")) {
      className = "rainy";
      weatherComponent = <Drizzle />;
    } else if (weather.includes("Snow") || weather.includes("Blizzard")) {
      className = "rainy";
      weatherComponent = <Snowfall />;
    } else if (weather.includes("Storm")) {
      className = "rainy";
      weatherComponent = <BlinkingLight />;
    } else if (
      weather.includes("Thunderstorm") ||
      weather.includes("Thundery")
    ) {
      className = "rainy";
      weatherComponent = <StormCloud />;
    } else {
      className = "clear";
    }
  }

  return (
    <div className={`weather-background ${className}`}>{weatherComponent}</div>
  );
};

export default WeatherBackground;
