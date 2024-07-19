import React, { useState } from "react";
import axios from "axios";
import CitySelector from "./components/CitySelector";
import WeatherDisplay from "./components/WeatherDisplay";
import WeatherBackground from "./components/WeatherBackground";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async (city) => {
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=e2c17cf7def74706bbd62406241107&q=${city}&aqi=no`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error("Error fetching the weather data", error);
    }
  };

  return (
    <div>
      <WeatherBackground
        weather={weatherData?.current.condition.text}
        day={weatherData?.current.is_day}
      />
      <CitySelector onCityChange={fetchWeatherData} />
      <WeatherDisplay weatherData={weatherData} />
    </div>
  );
};

export default App;
