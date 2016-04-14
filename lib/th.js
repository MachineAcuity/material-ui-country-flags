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

var Th = function Th(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement(
      'g',
      { 'fill-rule': 'evenodd' },
      _react2.default.createElement('path', { d: 'M0 0h640v480H0z' }),
      _react2.default.createElement('path', { d: 'M0 162.544h640v160.003H0z' }),
      _react2.default.createElement('path', { d: 'M0 .042h640v82.5H0zM0 400.003h640v80H0z' })
    )
  );
};
Th = (0, _pure2.default)(Th);
Th.displayName = 'Th';

exports.default = Th;
//# sourceMappingURL=th.js.map