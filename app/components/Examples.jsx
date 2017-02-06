var React = require('react');
var {Link} = require('react-router');

var Examples = props => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <div className="callout secondary">
        <p>Here are a few examples to try out:</p>
        <ol>
          <li>
            <Link to='/?location=Vancouver'>Vancouver, BC</Link>
          </li>
          <li>
            <Link to='/?location=Montreal'>Montreal, QC</Link>
          </li>
          <li>
            <Link to='/?location=Ottawa'>Ottawa, ON</Link>
          </li>
        </ol>
      </div>
    </div>
  );
};

module.exports = Examples;
