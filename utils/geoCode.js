const request = require("request");

const geoCode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiZGF2aWRyaW5tIiwiYSI6ImNrNXllemx6NzJmdmMza24xd20yYmY0aTYifQ.a1jV-KyIifqTZzRhxMujmQ&limit=1`;
  
    request({ url:url, json:true}, (error, response) => {
      if(error){
        callback("Unable to connect to location services", undefined);
      }
      else if (response.body.features.length === 0){
        callback("Unable to find location. Try another search", undefined);
      }
      else{
        callback(undefined, {
          latitud: response.body.features[0].center[1],
          longitud: response.body.features[0].center[0],
          location: response.body.features[0].place_name
        });
      }
    });
  };

  module.exports=geoCode;