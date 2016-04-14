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

var Cl = function Cl(props) {
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
      { 'fill-rule': 'evenodd', 'clip-path': 'url(#a)', transform: 'scale(.9375)', fillOpacity: '.996' },
      _react2.default.createElement('path', { d: 'M255.99 0H768v256H255.99z' }),
      _react2.default.createElement('path', { d: 'M0 0h256v256H0z' }),
      _react2.default.createElement('path', { d: 'M167.82 191.71l-39.653-29.737-39.458 30.03 14.674-48.8-39.386-30.133 48.728-.42L127.84 64l15.437 48.537 48.728.064-39.184 30.418 15 48.69z' }),
      _react2.default.createElement('path', { d: 'M0 256h768v256H0z' })
    )
  );
};
Cl = (0, _pure2.default)(Cl);
Cl.displayName = 'Cl';

exports.default = Cl;
//# sourceMappingURL=cl.js.map