import React from "react";
import PropTypes from "prop-types";
const Whetherdata = ({ weather }) => {
  if (!weather) {
    return null;
  }

  return (
    <div className="p-5 flex flex-col gap-3">
      <h2 className="bg-white shadow-xl p-3 text-xl font-semibold rounded-lg">
        Current Weather
      </h2>
      <h2 className="text-3xl font-bold">{weather.name}</h2>
      <h3 className="text-2xl font-bold ">{weather.main.temp}°C</h3>
      <h3 className="font-semibold">Humidity:{weather.main.humidity}</h3>
      <p className="font-semibold">Weather:{weather.weather[0].description}</p>
    </div>
  );
};
Whetherdata.propTypes = {
  weather: PropTypes.shape({
    name: PropTypes.string.isRequired,
    main: PropTypes.shape({
      temp: PropTypes.number.isRequired,
      humidity: PropTypes.number.isRequired,
    }).isRequired,
    weather: PropTypes.arrayOf(
      PropTypes.shape({
        description: PropTypes.string.isRequired,
      })
    ).isRequired,
  }),
};
export default Whetherdata;
