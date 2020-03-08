const request = require("request");

const forecast = (longitude, latitude, callback) => {
  const url = `https://api.darksky.net/forecast/2cb01e9bccbb3592ce5c8b6b98897ffb/${encodeURIComponent(
    latitude
  )},${encodeURIComponent(longitude)}?units=si&lang=es`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to forecast services", undefined); //No internet
    } else if (body.error) {
      callback("Location not found", undefined);
    } else {
      const data = {
        temperature: body.currently.temperature,
        precipitation: body.currently.precipProbability,
        dailyWeather: body.daily.data[0].summary
      };

      callback(
        undefined,
        data.dailyWeather +
          " It´s currently " +
          data.temperature +
          " degrees outside. There´s " +
          data.precipitation +
          "% of rain"
      );
    }
  });
};

module.exports = forecast;
