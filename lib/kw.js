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

var Kw = function Kw(props) {
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
      _react2.default.createElement('path', { d: 'M0 170.64h1024v170.68H0z' }),
      _react2.default.createElement('path', { d: 'M0 341.32h1024V512H0z' }),
      _react2.default.createElement('path', { d: 'M0 0h1024v170.68H0z' }),
      _react2.default.createElement('path', { d: 'M0 0v512l255.45-170.7.55-170.77L0 0z' })
    )
  );
};
Kw = (0, _pure2.default)(Kw);
Kw.displayName = 'Kw';

exports.default = Kw;
//# sourceMappingURL=kw.js.map