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

var Fm = function Fm(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement(
        'clipPath',
        { id: 'a' },
        _react2.default.createElement('path', { fillOpacity: '.67', d: 'M-81.333 0h682.67v512h-682.67z' })
      )
    ),
    _react2.default.createElement(
      'g',
      { 'fill-rule': 'evenodd', 'clip-path': 'url(#a)', transform: 'translate(76.25) scale(.94)', 'stroke-width': '1pt' },
      _react2.default.createElement('path', { d: 'M-252 0H772v512H-252z' }),
      _react2.default.createElement('path', { d: 'M259.787 122.985l-32.44 22.214 12.433-35.9-32.475-22.177 40.122.038 12.366-35.92 12.366 35.92 40.12-.026L279.8 109.3l12.43 35.905m-32.443 244.847l-32.44-22.214 12.433 35.9-32.475 22.176 40.122-.038 12.366 35.92 12.366-35.92 40.12.027-32.48-22.166 12.43-35.905m-188.384-92.465l-24.53 30.73 1.395-37.967-37.54-11.713 38.38-11.695 1.324-37.966 22.328 30.735 38.36-11.755-24.58 30.694 22.383 30.7m274.28-11.763l24.53 30.73-1.395-37.967 37.54-11.713-38.38-11.695-1.324-37.966-22.328 30.735-38.36-11.755 24.58 30.694-22.383 30.7' })
    )
  );
};
Fm = (0, _pure2.default)(Fm);
Fm.displayName = 'Fm';

exports.default = Fm;
//# sourceMappingURL=fm.js.map