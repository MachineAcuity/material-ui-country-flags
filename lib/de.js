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

var De = function De(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement(
      'g',
      { 'fill-rule': 'evenodd', 'stroke-width': '1pt' },
      _react2.default.createElement('path', { d: 'M0 320h640v160.002H0z' }),
      _react2.default.createElement('path', { d: 'M0 0h640v160H0z' }),
      _react2.default.createElement('path', { d: 'M0 160h640v160H0z' })
    )
  );
};
De = (0, _pure2.default)(De);
De.displayName = 'De';

exports.default = De;
//# sourceMappingURL=de.js.map