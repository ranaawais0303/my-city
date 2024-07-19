import React from "react";
import "../styles.css";

import "react-rain-animation/lib/style.css";
import Rainy from "./Rainy/Rainy";
import SunWithRays from "./Sunny/SunWithRays";
import Cloud from "./Cloud/Cloud";
import FogAnimation from "./Fog/FogAnimation";
import Snowfall from "./Snowy/Snowfall";
import CloudReal from "./Cloud/CloudReal";
import BlinkingLight from "./Thunder/BlinkingLight";
import Drizzle from "./Drizzle/Drizzle";

const WeatherBackground = ({ weather, day }) => {
  console.log(weather, "weather");
  let className = "clear";
  let weatherComponent = null;

  if (weather) {
    if (weather === "Sunny" || weather === "Clear") {
      className = "sunny";
      weatherComponent = <SunWithRays day={day} />;
    } else if (
      weather.includes("Partly cloudy") ||
      weather.includes("Partly Cloudy")
    ) {
      className = "partly-cloudy";
      weatherComponent = <Cloud day={day} />;
    } else if (weather.includes(" heavy rain with thunder")) {
      className = "rainy";
      weatherComponent = (
        <>
          <BlinkingLight />
          <Rainy />
        </>
      );
    } else if (weather.includes(" light rain in area with thunder")) {
      className = "rainy";
      weatherComponent = (
        <>
          <BlinkingLight />
          <Drizzle />
        </>
      );
    } else if (
      weather.includes("Cloudy") ||
      weather.includes("Cloud") ||
      weather.includes("Overcast")
    ) {
      className = "rainy";
      weatherComponent = <CloudReal />;
    } else if (
      weather.includes("Drizzle") ||
      weather.includes("drizzle") ||
      weather.includes("Light rain")
    ) {
      className = "rainy";
      weatherComponent = <Drizzle />;
    } else if (weather.includes("rain nearby")) {
      className = "rainy";
      weatherComponent = <Drizzle day={day} />;
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
    } else if (weather.includes("Snow") || weather.includes("Blizzard")) {
      className = "rainy";
      weatherComponent = <Snowfall />;
    } else if (weather.includes("Thundery outbreaks in nearby")) {
      className = "rainy";
      weatherComponent = (
        <>
          <BlinkingLight />
          <Cloud day={day} />
        </>
      );
    } else if (
      weather.includes("Storm") ||
      weather.includes("Thunderstorm") ||
      weather.includes("Thundery")
    ) {
      className = "rainy";
      weatherComponent = <BlinkingLight />;
    } else {
      className = "clear";
    }
  }

  return (
    <div className={`weather-background ${className}`}>{weatherComponent}</div>
  );
};

export default WeatherBackground;
