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

var Ma = function Ma(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M640 0H0v480h640z' }),
    _react2.default.createElement('path', { d: 'M320 179.452l-35.574 109.496 93.12-67.647H262.453l93.122 67.648z', stroke: '#006233', 'stroke-width': '11.704' })
  );
};
Ma = (0, _pure2.default)(Ma);
Ma.displayName = 'Ma';

exports.default = Ma;
//# sourceMappingURL=ma.js.map