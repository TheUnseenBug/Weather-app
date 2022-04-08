import request from "request";
import fetch from "node-fetch";
const forecast = async (latitude, longitude) => {
  const url =
    "http://api.weatherstack.com/current?access_key=e84129bc20b99e3b1452c36379b4e3ff&query=" +
    latitude +
    "," +
    longitude +
    "&units=m";

  const req = await fetch(url, {
    method: "GET",
  });
  const data = await req.json();
  const currentWeatherDescription = data.current.weather_descriptions[0];
  const currentTemperature = data.current.temperature;
  const feelsLike = data.current.feelslike;
  return {
    currentTemperature,
    currentWeatherDescription,
    feelsLike,
  };
};

export default forecast;
