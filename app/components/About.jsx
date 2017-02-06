var React = require('react');

var About = props => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <div className="callout primary">
        <p>Welcome to my first web app based on React.
          It is one of several projects I completed as part of an intro to React course through Udemy.</p>
        <p>Search for the weather in your particular location by typing a city into the
        box on the Get Weather page. See the Examples page for help! Pretty straightforward.</p>
      </div>
      <div className="callout secondary">
        <p>This app in particular makes use of the following technologies:</p>
        <ul>
          <li><strong>Front End:</strong> <a href="https://facebook.github.io/react">React</a>, JSX, ES2015 JS</li>
          <li><strong>API's:</strong> <a href="http://openweathermap.org">OpenWeatherMap</a> to search for weather by city</li>
          <li><strong>GitHub:</strong> <a href="https://github.com/vinay30/react-weather">React weather</a></li>
          <li><strong>Build tool:</strong> Webpack (creating bundle.js)</li>
          <li><strong>Server:</strong> Express (Node.js)</li>
          <li><strong>App deployment:</strong> <a href="http://serene-plains-48996.herokuapp.com/">Heroku</a></li>
        </ul>
      </div>
    </div>
  );
};

module.exports = About;
