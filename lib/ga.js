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

var Ga = function Ga(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement(
      'g',
      { 'fill-rule': 'evenodd' },
      _react2.default.createElement('path', { d: 'M640 480H0V0h640z' }),
      _react2.default.createElement('path', { d: 'M640 160.003H0V0h640z' }),
      _react2.default.createElement('path', { d: 'M640 480H0V319.997h640z' })
    )
  );
};
Ga = (0, _pure2.default)(Ga);
Ga.displayName = 'Ga';

exports.default = Ga;
//# sourceMappingURL=ga.js.map