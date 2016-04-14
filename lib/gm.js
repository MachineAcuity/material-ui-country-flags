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

var Gm = function Gm(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement(
        'clipPath',
        { id: 'a' },
        _react2.default.createElement('path', { fillOpacity: '.67', d: 'M0-48h640v480H0z' })
      )
    ),
    _react2.default.createElement(
      'g',
      { 'fill-rule': 'evenodd', 'clip-path': 'url(#a)', transform: 'translate(0 48)', 'stroke-width': '1pt' },
      _react2.default.createElement('path', { d: 'M0-128h640V85.33H0z' }),
      _react2.default.createElement('path', { d: 'M0 85.333h640v35.556H0z' }),
      _react2.default.createElement('path', { d: 'M0 120.89h640v142.22H0z' }),
      _react2.default.createElement('path', { d: 'M0 263.11h640v35.556H0z' }),
      _react2.default.createElement('path', { d: 'M0 298.67h640V512H0z' })
    )
  );
};
Gm = (0, _pure2.default)(Gm);
Gm.displayName = 'Gm';

exports.default = Gm;
//# sourceMappingURL=gm.js.map