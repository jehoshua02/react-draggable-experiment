var React = require('react/addons');
var Sticky = require('app/components/Sticky');
var randomInt = require('app/util/randomInt');

var App = React.createClass({

  getInitialState: function () {
    return {
      stickies: []
    };
  },

  render: function () {
    return (
      <div>
        <input type="text" onKeyUp={this._handleKeyUp} placeholder="Add Sticky ..." />
        {this.state.stickies.map(function (sticky) {
          return (<Sticky {...sticky} />);
        })}
      </div>
    );
  },

  _handleKeyUp: function (event) {
    if (event.key === 'Enter') {
      this._addSticky({
        text: event.target.value,
        color: this._randomColor()
      });
      event.target.value = null;
    }
  },

  _addSticky: function (sticky) {
    var stickies = this.state.stickies.concat(sticky);
    this.setState({stickies: stickies});
  },

  _randomColor: function () {
    var colors = [
      'lightblue',
      'lightyellow',
      'lightgreen',
      'lightpink'
    ];

    return colors[randomInt(0, colors.length)];
  }

});

module.exports = App;
