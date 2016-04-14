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

var Ae = function Ae(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement(
      'g',
      { 'clip-path': 'url(#a)', 'fill-rule': 'evenodd', transform: 'matrix(1.3333 0 0 1 -85.333 0)' },
      _react2.default.createElement('path', { d: 'M0 0h192v512H0z' }),
      _react2.default.createElement('path', { d: 'M192 340.06h576V512H192z' }),
      _react2.default.createElement('path', { d: 'M192 172.7h576v169.65H192z' }),
      _react2.default.createElement('path', { d: 'M192 0h576v172.7H192z' })
    )
  );
};
Ae = (0, _pure2.default)(Ae);
Ae.displayName = 'Ae';

exports.default = Ae;
//# sourceMappingURL=ae.js.map