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

var GbSct = function GbSct(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M0 0h640v480H0z' }),
    _react2.default.createElement('path', { d: 'M0 0l5 3M0 3l5-3', stroke: '#fff', 'stroke-width': '.6', transform: 'scale(128 160)' })
  );
};
GbSct = (0, _pure2.default)(GbSct);
GbSct.displayName = 'GbSct';

exports.default = GbSct;
//# sourceMappingURL=gb-sct.js.map