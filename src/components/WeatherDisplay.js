import React from "react";

const WeatherDisplay = ({ weatherData }) => {
  console.log(weatherData?.forecast.forecastday[0], "weather forcast");
  if (!weatherData) return null;

  return (
    <div style={{ margin: "5vh" }}>
      <h2 style={{ color: "#052965" }}>{weatherData.location.name}</h2>
      <p>{weatherData.current.condition.text}</p>
      <img
        src={weatherData.current.condition.icon}
        alt={weatherData.current.condition.text}
      />
      <p>{weatherData.current.temp_c}°C</p>
      <div className="weather-container">
        {weatherData.forecast.forecastday[0].hour.map((hourData, index) => (
          <div key={index} className="hourly-weather">
            <p>{hourData.time.split(" ")[1]}</p>
            <img src={hourData.condition.icon} alt={hourData.condition.text} />
            <p>{hourData.condition.text}</p>
            <p>{hourData.temp_c}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherDisplay;
