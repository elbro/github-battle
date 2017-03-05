var React = require('react');
var MainContainer = require('./MainContainer');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

var Main = React.createClass({
  render: function () {
    return (
      <ReactCSSTransitionGroup 
        transitionName="appear" 
        transitionEnterTimeout={500} 
        transitionLeaveTimeout={500}>
        {React.cloneElement(this.props.children, {key: this.props.location.pathname})}
      </ReactCSSTransitionGroup>
    )
  }
});

module.exports = Main;
