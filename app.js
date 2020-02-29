const request = require("request");
const geoCode = require("./utils/geoCode");
const forecast = require("./utils/forecast");

const address = process.argv[2];

if (!address) {
  console.log("Please provide an Address");
} else {
  geoCode(address, (error, data) => {
    if (error) {
      return console.log(error);
    }

    forecast(data.longitud, data.latitud, (error, forecastData) => {
      //Longitude, Latitud
      if (error) {
        return console.log(error);
      }
      console.log(data.location);
      console.log(forecastData);
    });
  });
}

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
