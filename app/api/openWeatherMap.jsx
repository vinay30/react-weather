var axios = require('axios');

const OPEN_WEATHER_MAP_URL = "http://api.openweathermap.org/data/2.5/weather?appid=eafac7ceda8c8e92aef1dc12b9454fb1&units=metric";


module.exports = {
  getTemp: function(city) {
    var encodedLocation = encodeURIComponent(city);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

     return axios.get(requestUrl)
    .then(function(response) {
      if(response.status && response.message) {
        throw new Error(response.message);
      } else {
        return response.data.main.temp;
      }
    }, function(err) {
      //throw new Error(err.response.data.message);
      throw new Error("Unable to find that city! Please try again.")
    });
  }
}
