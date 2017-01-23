var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();
    var cityName = this.refs.name.value;


    if(cityName.length > 3) {
      this.refs.name.value = "";
      this.props.onSearch(cityName);
    }
  },
  render: function() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="name" />
          <button>Get Weather</button>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
