import fetch from "node-fetch";

const geocode = async (address) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=pk.eyJ1IjoidGhldW5zZWVuYnVnIiwiYSI6ImNsMW01dzhlMTAzZmIzaXFqeHMzdDEyZW4ifQ.pJBLiAsMZRLphQXHjG0Qow";

  const req = await fetch(url, {
    method: "GET",
  });
  const data = await req.json();
  const latitude = data.features[0].center[1];
  const longitude = data.features[0].center[0];
  const location = data.features[0].place_name;
  return {
    latitude,
    longitude,
    location,
  };
};

export default geocode;
