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
        {weatherData.forecast.forecastday.map((dayData, index) => (
          <div key={index} className="daily-weather">
            <p>
              {new Date(dayData.date).toLocaleDateString(undefined, {
                weekday: "long",
                month: "short",
                day: "numeric",
              })}
            </p>
            <img
              src={dayData.day.condition.icon}
              alt={dayData.day.condition.text}
            />
            <p>{dayData.day.condition.text}</p>
            <p>Max: {dayData.day.maxtemp_c}°C</p>
            <p>Min: {dayData.day.mintemp_c}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherDisplay;
