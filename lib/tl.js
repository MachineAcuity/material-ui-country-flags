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

var Tl = function Tl(props) {
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
      { 'clip-path': 'url(#a)', 'fill-rule': 'evenodd', transform: 'scale(.9375)' },
      _react2.default.createElement('path', { d: 'M0 0h1031.2v512H0z' }),
      _react2.default.createElement('path', { d: 'M0 0c3.234 0 512 256.72 512 256.72L0 512V0z' }),
      _react2.default.createElement('path', { d: 'M0 0c2.151 0 340.62 256.72 340.62 256.72L0 512V0z' }),
      _react2.default.createElement('path', { d: 'M187.71 298.16l-60.813-13.478-31.072 52.839-4.861-59.677-60.753-13.372 54.84-24.817-3.292-59.385 40.235 43.39 55.341-25.232-28.827 53.899 39.203 45.835z' })
    )
  );
};
Tl = (0, _pure2.default)(Tl);
Tl.displayName = 'Tl';

exports.default = Tl;
//# sourceMappingURL=tl.js.map