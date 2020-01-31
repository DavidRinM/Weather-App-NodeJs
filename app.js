const request = require("request");
const geoCode = require("./utils/geoCode");
const forecast = require("./utils/forecast");

// const weatherurl =
//   "https://api.darksky.net/forecast/2cb01e9bccbb3592ce5c8b6b98897ffb/37.8267,-122.4233?units=si&lang=es";

// request({ url: weatherurl, json: true }, (error, response) => {
//   if (error) {
//     console.log("Unable to connect to Weather Service");
//   } else if (response.body.error) {
//     console.log("Unable to find Location");
//   } else {
//     const temperature = response.body.currently.temperature;
//     const precipitation = response.body.currently.precipProbability;
//     const dailyWeather = response.body.daily.data[0].summary;
//     console.log(
//       dailyWeather +
//         " It´s currently " +
//         temperature +
//         " degrees outside. There´s " +
//         precipitation +
//         "% of rain"
//     );
//   }
// });

geoCode("Claveria Ciudad de Mexico", (error, data) => {
  console.log("error", error);
  console.log("data", data);
});

//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

forecast(-75.7088, 44.1545, (error, data) => {
  //Longitude, Latitud
  console.log("Error", error);
  console.log("Data", data);
});
