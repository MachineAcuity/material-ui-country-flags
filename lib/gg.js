'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _pure = require('recompose/pure');

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = require('material-ui/lib/SvgIcon');

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Gg = function Gg(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement(
        'clipPath',
        { id: 'a' },
        _react2.default.createElement('path', { fillOpacity: '.67', d: 'M-18-13.5h36v27h-36z' })
      )
    ),
    _react2.default.createElement(
      'g',
      { 'clip-path': 'url(#a)' },
      _react2.default.createElement('path', { d: 'M-18-18h36v36h-36z' }),
      _react2.default.createElement('path', { d: 'M-18-13.5h36v27h-36z' }),
      _react2.default.createElement('path', { d: 'M0-21.586v43.172M-21.586 0h43.172', stroke: '#e8112d', 'stroke-width': '7.195' }),
      _react2.default.createElement(
        'g',
        { transform: 'scale(1.75)' },
        _react2.default.createElement('path', { id: 'b', d: 'M-6.75 1.5L-6 .75H.75v-1.5H-6l-.75-.75z' }),
        _react2.default.createElement('use', { transform: 'rotate(90)', height: '24', width: '36' }),
        _react2.default.createElement('use', { transform: 'rotate(-90)', height: '24', width: '36' }),
        _react2.default.createElement('use', { transform: 'scale(-1)', height: '24', width: '36' })
      )
    )
  );
};
Gg = (0, _pure2.default)(Gg);
Gg.displayName = 'Gg';

exports.default = Gg;
//# sourceMappingURL=gg.js.map