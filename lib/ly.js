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

var Ly = function Ly(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement(
        'clipPath',
        { id: 'a' },
        _react2.default.createElement('path', { d: 'M166.67-20h666.67v500H166.67z' })
      )
    ),
    _react2.default.createElement(
      'g',
      { 'clip-path': 'url(#a)', transform: 'matrix(.96 0 0 .96 -160 19.2)' },
      _react2.default.createElement('path', { d: 'M0-20h1000v500H0z' }),
      _react2.default.createElement('path', { d: 'M0-20h1000v375H0z' }),
      _react2.default.createElement('path', { d: 'M0-20h1000v125H0z' }),
      _react2.default.createElement('path', { d: 'M544.2 185.8a54.3 54.3 0 1 0 0 88.4 62.5 62.5 0 1 1 0-88.4M530.4 230l84.1-27.3-52 71.5v-88.4l52 71.5z' })
    )
  );
};
Ly = (0, _pure2.default)(Ly);
Ly.displayName = 'Ly';

exports.default = Ly;
//# sourceMappingURL=ly.js.map