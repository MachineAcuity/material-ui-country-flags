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

var No = function No(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M0 0h640v480H0z' }),
    _react2.default.createElement('path', { d: 'M180 0h120v480H180z' }),
    _react2.default.createElement('path', { d: 'M0 180h640v120H0z' }),
    _react2.default.createElement('path', { d: 'M210 0h60v480h-60z' }),
    _react2.default.createElement('path', { d: 'M0 210h640v60H0z' })
  );
};
No = (0, _pure2.default)(No);
No.displayName = 'No';

exports.default = No;
//# sourceMappingURL=no.js.map