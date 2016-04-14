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

var Bg = function Bg(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement(
      'g',
      { 'fill-rule': 'evenodd', 'stroke-width': '1pt' },
      _react2.default.createElement('path', { d: 'M0 319.997h640V480H0z' }),
      _react2.default.createElement('path', { d: 'M0 0h640v160.003H0z' }),
      _react2.default.createElement('path', { d: 'M0 160.003h640v160.003H0z' })
    )
  );
};
Bg = (0, _pure2.default)(Bg);
Bg.displayName = 'Bg';

exports.default = Bg;
//# sourceMappingURL=bg.js.map