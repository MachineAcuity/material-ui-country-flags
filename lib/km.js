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

var Km = function Km(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement(
        'clipPath',
        { id: 'a' },
        _react2.default.createElement('path', { fillOpacity: '.67', d: 'M0 0h682.67v512H0z' })
      )
    ),
    _react2.default.createElement(
      'g',
      { 'clip-path': 'url(#a)', 'fill-rule': 'evenodd', transform: 'scale(.9375)' },
      _react2.default.createElement('path', { d: 'M0 0h768.77v128H0z' }),
      _react2.default.createElement('path', { d: 'M0 128h768.77v128H0z' }),
      _react2.default.createElement('path', { d: 'M0 256h768.77v128H0z' }),
      _react2.default.createElement('path', { d: 'M0 384h768.77v128H0z' }),
      _react2.default.createElement('path', { d: 'M0 0v512l381.86-255.28L0 0z' }),
      _react2.default.createElement('path', { d: 'M157.21 141.43C72.113 137.12 33.34 204.9 33.43 257.3c-.194 61.97 58.529 113.08 112.81 109.99-29.27-13.84-65.008-52.66-65.337-110.25-.3-52.18 29.497-97.55 76.307-115.61z' }),
      _react2.default.createElement('path', { d: 'M155.927 197.058l-11.992-9.385-14.539 4.576 5.215-14.317-8.831-12.41 15.227.528 9.065-12.238 4.195 14.649 14.452 4.846-12.644 8.524zM155.672 249.121l-11.993-9.385-14.538 4.576 5.215-14.317-8.831-12.41 15.227.528 9.065-12.238 4.194 14.649 14.453 4.846-12.645 8.524zM155.927 301.698l-11.992-9.385-14.539 4.576 5.215-14.317-8.831-12.41 15.227.528 9.065-12.239 4.195 14.65 14.452 4.846-12.644 8.524zM155.672 354.778l-11.993-9.385-14.538 4.576 5.215-14.317-8.831-12.41 15.227.528 9.065-12.239 4.194 14.65 14.453 4.846-12.645 8.524z' })
    )
  );
};
Km = (0, _pure2.default)(Km);
Km.displayName = 'Km';

exports.default = Km;
//# sourceMappingURL=km.js.map