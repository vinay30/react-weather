var React = require('react');

var WeatherMessage = ({city, temp}) => {
  return (
    <div className="callout success">
      <h3 className="text-center">The weather in {city} is {temp} C</h3>
    </div>
  );
};

module.exports = WeatherMessage;
