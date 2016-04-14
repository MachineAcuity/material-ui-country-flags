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

var GbEng = function GbEng(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M0 0h640v480H0z' }),
    _react2.default.createElement('path', { d: 'M281.6 0h76.8v480h-76.8z' }),
    _react2.default.createElement('path', { d: 'M0 201.6h640v76.8H0z' })
  );
};
GbEng = (0, _pure2.default)(GbEng);
GbEng.displayName = 'GbEng';

exports.default = GbEng;
//# sourceMappingURL=gb-eng.js.map