var React = require('react');
var {connect} = require('react-redux');

export var Main = (props) => {
  return (
    <div>
      <div className="grid-x">
        <div className="cell medium-6 large-4 small-centered">
            {props.children}
        </div>
      </div>
    </div>
  );
};

export default connect()(Main);
