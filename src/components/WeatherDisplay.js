import React from "react";

const WeatherDisplay = ({ weatherData }) => {
  if (!weatherData) return null;

  return (
    <div style={{ margin: "5vh" }}>
      <h2 style={{ color: "#052965" }}>{weatherData.location.name}</h2>
      <p>{weatherData.current.condition.text}</p>
      <p>{weatherData.current.temp_c}°C</p>
    </div>
  );
};

export default WeatherDisplay;
