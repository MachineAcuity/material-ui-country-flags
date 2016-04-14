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

var Dk = function Dk(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M0 0h640.1v480H0z' }),
    _react2.default.createElement('path', { d: 'M205.714 0h68.57v480h-68.57z' }),
    _react2.default.createElement('path', { d: 'M0 205.714h640.1v68.57H0z' })
  );
};
Dk = (0, _pure2.default)(Dk);
Dk.displayName = 'Dk';

exports.default = Dk;
//# sourceMappingURL=dk.js.map