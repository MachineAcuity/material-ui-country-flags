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

var Mk = function Mk(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M0 0h640v480H0z' }),
    _react2.default.createElement('path', { d: 'M0 0h96l224 231.43L544 0h96L0 480h96l224-231.43L544 480h96zm640 192v96L0 192v96zM280 0l40 205.714L360 0zm0 480l40-205.714L360 480z' }),
    _react2.default.createElement('circle', { r: '77.143', cy: '240', cx: '320', stroke: '#d20000', 'stroke-width': '17.143' })
  );
};
Mk = (0, _pure2.default)(Mk);
Mk.displayName = 'Mk';

exports.default = Mk;
//# sourceMappingURL=mk.js.map