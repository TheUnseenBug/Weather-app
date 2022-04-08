import path from "path";
import express from "express";
import geocode from "../utils/geocode.js";
import forecast from "../utils/forecast.js";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

app.use(express.static("../public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/html/index.html"));
});

app.get("/forecast", async (req, res) => {
  const address = req.query.address;
  const geocodeAddress = await geocode(address);
  const forecastData = await forecast(
    geocodeAddress.latitude,
    geocodeAddress.longitude
  );
  console.log(forecastData);
  res.send(forecastData);
  //localhost:3000/forecast?address=Sösdala
});

app.listen(3000);
