var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false
    };
  },
  handleSearch: function(city) {
    this.setState({
      isLoading: true
    });
    openWeatherMap.getTemp(city).then(
      (temp) => {
        this.setState({
          city: city,
          temp: temp,
          isLoading: false
        });
      },
      (errorMessage) => {
        alert(errorMessage);
        this.setState({isLoading: false});
      }
    );
  },
  render: function() {
    var {isLoading, city, temp} = this.state;

    function renderMessage() {
      if (isLoading) {
        return <h3>Fetching weather...</h3>;
      } else if(temp && location) {
        return <WeatherMessage city={city} temp={temp} />;
      }
    }

    return (
      <div>
        <h3>Weather Components</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
