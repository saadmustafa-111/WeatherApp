import React from "react";
import PropTypes from "prop-types";
const Weatherforcast = ({ forecast }) => {
  if (!forecast || forecast.length === 0) return;

  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return (
    <div className="mt-4 p-5">
      <h3 className="text-2xl  font-bold">7 Days Forecast</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
        {forecast.map((day, index) => {
          const date = new Date(day.dt * 1000);
          console.log("Timestamp:", day.dt, "Date:", date.toLocaleString()); // Debugging line
          const dayName = weekdays[date.getDay()];
          return (
            <div key={index} className="p-4 bg-white shadow-lg rounded-lg">
              <p>
                {dayName}, {date.toLocaleDateString()}
              </p>
              <p>Temp: {day.main.temp}°C</p>
              <p>Weather: {day.weather[0].description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

Weatherforcast.propTypes = {
  forecast: PropTypes.arrayOf(
    PropTypes.shape({
      dt: PropTypes.number.isRequired, // Unix timestamp
      main: PropTypes.shape({
        temp: PropTypes.number.isRequired,
      }).isRequired,
      weather: PropTypes.arrayOf(
        PropTypes.shape({
          description: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
};
export default Weatherforcast;
