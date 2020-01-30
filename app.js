const request = require("request");
const geoCode = require("./utils/geoCode");

// const weatherurl =
//   "https://api.darksky.net/forecast/2cb01e9bccbb3592ce5c8b6b98897ffb/37.8267,-122.4233?units=si&lang=es";
// const geocodingurl =
//   "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZGF2aWRyaW5tIiwiYSI6ImNrNXllemx6NzJmdmMza24xd20yYmY0aTYifQ.a1jV-KyIifqTZzRhxMujmQ&limit=1";

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

// request({ url: geocodingurl, json: true }, (error, response) => {
//   if (error) {
//     console.log("Unable to connect to location services");
//   } else if (response.body.features.length === 0) {
//     console.log("Coordenates not found. Try another search");
//   } else {
//     const longitud = response.body.features[0].center[0];
//     const latitude = response.body.features[0].center[1];
//     console.log("Latitud: " + latitude + " Longitud: " + longitud);
//   }
// });




geoCode("Claveria Ciudad de Mexico", (error, data) => {
  console.log("error", error);
  console.log("data", data); 
});