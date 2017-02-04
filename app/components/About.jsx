var React = require('react');

var About = props => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>Welcome to my first web app based on React.
        It is one of several projects I completed as part of an intro to React course through Udemy.</p>
      <p>Search for the weather in your particular location by typing a city into the
      box on the Get Weather page. See the Examples page for help! Pretty straightforward.</p>
      <p>This app in particular makes use of the following technologies:</p>
      <ul>
        <li><strong>Front End:</strong> React, JSX, ES2015 JS</li>
        <li><strong>API's:</strong> OpenWeatherMap</li>
        <li><strong>GitHub:</strong> <a href="https://github.com/vinay30/react-weather">React weather</a></li>
        <li><strong>Build tool:</strong> Webpack (creating bundle.js)</li>
        <li><strong>Server:</strong> Node.js</li>
        <li><strong>App deployment:</strong> <a href="http://serene-plains-48996.herokuapp.com/">Heroku</a></li>
      </ul>
    </div>
  );
};

module.exports = About;
