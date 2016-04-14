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

var Mv = function Mv(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement(
      'g',
      { 'fill-rule': 'evenodd' },
      _react2.default.createElement('path', { d: 'M640 480H0V0h640z' }),
      _react2.default.createElement('path', { d: 'M410.48 91.74C237.41 141.38 262.07 367.72 424.29 385c-256.94 49.22-293.5-318.86-13.81-293.26z' }),
      _react2.default.createElement('path', { d: 'M0 0h640v60H0zM0 420h640v60H0z' }),
      _react2.default.createElement('path', { d: 'M.001 0h60v457.03h-60zM580 0h60v457.03h-60z' })
    )
  );
};
Mv = (0, _pure2.default)(Mv);
Mv.displayName = 'Mv';

exports.default = Mv;
//# sourceMappingURL=mv.js.map