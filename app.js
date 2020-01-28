const request = require("request");


const url = "https://api.darksky.net/forecast/2cb01e9bccbb3592ce5c8b6b98897ffb/37.8267,-122.4233?units=si&lang=es";

request({ url:url, json:true }, (error, response) => {
    const temperature = response.body.currently.temperature;
    const precipitation = response.body.currently.precipProbability;
    const dailyWeather = response.body.daily.data[0].summary;

    console.log(dailyWeather + " It´s currently " + temperature + " degrees outside. There´s " + precipitation + "% of rain");
});