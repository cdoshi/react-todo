var React = require('react'),
    ReactDOM = require('react-dom'),
    {Route, Router, IndexRoute, hashHistory} = require('react-router');

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <p>Boiler plate 3 project </p>,
  document.getElementById('app')
);
