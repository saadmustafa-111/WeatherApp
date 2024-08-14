import React from "react";
import PropTypes from "prop-types";
import {
  WiDaySunny,
  WiCloud,
  WiRain,
  WiSnow,
  WiThunderstorm,
} from "react-icons/wi";
import { BsCloudRainHeavyFill, BsCloudsFill } from "react-icons/bs";
import { FaTemperatureHigh, FaTemperatureLow } from "react-icons/fa";
import { FaZ } from "react-icons/fa6";

const WeatherIcons = new Map([
  ["clear sky", <WiDaySunny key={"clear sky"} />],
  ["few clouds", <WiCloud key={"few clouds"} />],
  ["overcast clouds", <BsCloudsFill key={"scattered clouds"} />],
  ["light rain", <WiRain key={"shower rain"} />],
  ["moderate rain", <BsCloudRainHeavyFill key={"rain"} />],
  ["thunderstorm", <WiThunderstorm key={"thunderstorm"} />],
  ["snow", <WiSnow key={"snow"} />],
]);
const getweathericon = (description) => {
  return WeatherIcons.get(description) || <WiCloud />;
};
const WeathericonDisplay = ({ description }) => {
  return <div>{getweathericon(description)}</div>;
};
WeathericonDisplay.propTypes = {
  description: PropTypes.string.isRequired,
};
export default WeatherIcons;
export { WeathericonDisplay };
