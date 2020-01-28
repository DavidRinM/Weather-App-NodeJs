const request = require("request");


const url = "https://api.darksky.net/forecast/2cb01e9bccbb3592ce5c8b6b98897ffb/37.8267,-122.4233";

request({ url:url }, (error, response) => {
    const data = JSON.parse(response.body);
    console.log(data.currently);
});