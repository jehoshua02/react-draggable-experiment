var React = require('react/addons');
var Draggable = require('react-draggable');

var zIndex = require('app/util/genId').create();

var Sticky = React.createClass({

  propTypes: {
    text: React.PropTypes.string.isRequired,
    color: React.PropTypes.string
  },

  getDefaultProps: function () {
    return {
      color: "lightyellow"
    };
  },

  getInitialState: function () {
    return {
      zIndex: zIndex.next()
    };
  },

  render: function () {
    // <Draggable/> transparently adds draggable interactivity
    // to whatever element is supplied as `this.props.children`.
    // Only a single element is allowed or an Error will be thrown.
    //
    // The element is moved from its current position using absolute positioning.
    //
    // `axis` determines which axis the draggable can move.
    // - 'both' allows movement horizontally and vertically (default).
    // - 'x' limits movement to horizontal axis.
    // - 'y' limits movement to vertical axis.
    //
    // `handle` specifies a selector to be used as the handle that initiates drag.
    //
    // `cancel` specifies a selector to be used to prevent drag initialization.
    //
    // `grid` specifies the x and y that dragging should snap to.
    //
    // `bounds` specifies movement boundaries. Pass:
    // - 'parent' restricts movement within the node's offsetParent
    //   (nearest node with position relative or absolute), or
    // - An object with left, top, right, and bottom properties. These indicate how far in each direction
    //   the draggable can be moved. See example/index.html for more on this.
    //
    // `start` specifies the x and y that the dragged item should start at. This is generally not necessary
    //   to use (you can use absolute or relative positioning of the child directly), but can be helpful
    //   for uniformity in your callbacks and with css transforms.
    //
    // `moveOnStartChange`, if true (default false), will move the element if there is a change in `start`.
    //   We set this by default to `false` because it can cause unwanted effects if you are not aware of it.
    //
    // `zIndex` specifies the zIndex to use while dragging.
    //
    // `onStart` is called when dragging starts.
    //
    // `onDrag` is called while dragging.
    //
    // `onStop` is called when dragging stops.
    console.log(this.state.zIndex);
    return (
      <Draggable
          start={{x: 0, y: 0}}
          moveOnStartChange={false}
          zIndex={this.state.zIndex}
          onStart={this._handleStart}
          onDrag={this._handleDrag}
          onStop={this._handleStop}>
          <div style={this._style()}>
            {this.props.text}
          </div>
      </Draggable>
    );
  },

  _style: function () {
    return {
      backgroundColor: this.props.color,
      padding: 10,
      width: 200,
      height: 200,
      boxShadow: '0 5px 5px rgba(0,0,0,0.5)',
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: this.state.zIndex,
      boxSizing: 'border-box'
    };
  },

  _handleStart: function (event, ui) {
    console.log('Event: ', event);
    console.log('Position: ', ui.position);
    this.setState({zIndex: zIndex.next()});
  },

  _handleDrag: function (event, ui) {
    console.log('Event: ', event);
    console.log('Position: ', ui.position);
  },

  _handleStop: function (event, ui) {
    console.log('Event: ', event);
    console.log('Position: ', ui.position);
  }

});

module.exports = Sticky;
