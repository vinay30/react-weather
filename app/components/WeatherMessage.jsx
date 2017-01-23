var React = require('react');

var WeatherMessage = ({city, temp}) => {
  return (
    <h3>The weather in {city} is {temp} C</h3>
  );
};

module.exports = WeatherMessage;
