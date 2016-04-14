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

var Ps = function Ps(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement(
        'clipPath',
        { id: 'a' },
        _react2.default.createElement('path', { fillOpacity: '.67', d: 'M-118 0h682.67v512H-118z' })
      )
    ),
    _react2.default.createElement(
      'g',
      { 'clip-path': 'url(#a)', transform: 'translate(110.63) scale(.9375)' },
      _react2.default.createElement(
        'g',
        { 'fill-rule': 'evenodd', 'stroke-width': '1pt' },
        _react2.default.createElement('path', { d: 'M-246 0H778.002v170.667H-246z' }),
        _react2.default.createElement('path', { d: 'M-246 170.667H778.002v170.667H-246z' }),
        _react2.default.createElement('path', { d: 'M-246 341.334H778.002v170.667H-246z' }),
        _react2.default.createElement('path', { d: 'M-246 512.001l512.001-256L-246 0v512.001z' })
      )
    )
  );
};
Ps = (0, _pure2.default)(Ps);
Ps.displayName = 'Ps';

exports.default = Ps;
//# sourceMappingURL=ps.js.map