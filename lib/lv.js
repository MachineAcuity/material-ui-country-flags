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

var Lv = function Lv(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement(
      'g',
      { 'fill-rule': 'evenodd' },
      _react2.default.createElement('path', { d: 'M0 0h640v480.003H0z' }),
      _react2.default.createElement('path', { d: 'M0 0h640v192.001H0zM0 288.002h640v192.001H0z' })
    )
  );
};
Lv = (0, _pure2.default)(Lv);
Lv.displayName = 'Lv';

exports.default = Lv;
//# sourceMappingURL=lv.js.map