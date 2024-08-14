import axios from "axios";
const API_KEY = "34a0442dec5bc13605a4fb7882efd31d";
export const CurrentWeather = async (city) => {
  try {
    const Response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    return Response.data;
  } catch (error) {
    console.error("Error To fetch the Weather", error);
    throw error;
  }
};
export const Forecast = async (city) => {
  try {
    const Response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
    );
    return Response.data.list.slice(0, 7);
  } catch (error) {
    console.error("Error while fetching Forecast", error);
    throw error;
  }
};
