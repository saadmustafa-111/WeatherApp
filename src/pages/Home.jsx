import React, { useState } from "react";
import { CurrentWeather, Forecast } from "../components/Axios";
import Cityinfo from "../components/Cityinfo";
import Whetherdata from "../components/Whetherdata";
import Weatherforcast from "../components/Weatherforcast";
export default function Home() {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);

  const handleSearch = async (city) => {
    try {
      const weather = await CurrentWeather(city);
      setWeatherData(weather);
      const forecast = await Forecast(city);
      setForecastData(forecast);
    } catch (error) {
      console.log("Error While Fetching the API", error);
    }
  };
  return (
    <>
      <Cityinfo onsearch={handleSearch} />
      <Whetherdata weather={weatherData} />
      <Weatherforcast forecast={forecastData} />
    </>
  );
}
