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

var Sc = function Sc(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement(
        'clipPath',
        { id: 'a' },
        _react2.default.createElement('path', { fillOpacity: '.67', d: 'M0 0h682.67v512H0z' })
      )
    ),
    _react2.default.createElement(
      'g',
      { 'fill-rule': 'evenodd', 'clip-path': 'url(#a)', transform: 'scale(.9375)', 'stroke-width': '1pt' },
      _react2.default.createElement('path', { d: 'M0 0h992.13v512H0z' }),
      _react2.default.createElement('path', { d: 'M0 512l992.12-170.67V512H0z' }),
      _react2.default.createElement('path', { d: 'M0 512l992.12-341.33v170.67L0 512z' }),
      _react2.default.createElement('path', { d: 'M0 512V0h330.71L0 512z' }),
      _react2.default.createElement('path', { d: 'M0 512L330.71 0h330.71L0 512z' })
    )
  );
};
Sc = (0, _pure2.default)(Sc);
Sc.displayName = 'Sc';

exports.default = Sc;
//# sourceMappingURL=sc.js.map