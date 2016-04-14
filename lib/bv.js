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

var Bv = function Bv(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement(
        'clipPath',
        { id: 'a' },
        _react2.default.createElement('path', { fillOpacity: '.67', d: 'M0 0h640v480H0z' })
      )
    ),
    _react2.default.createElement(
      'g',
      { 'fill-rule': 'evenodd', 'stroke-width': '1pt', 'clip-path': 'url(#a)' },
      _react2.default.createElement('path', { d: 'M-28 0h699.74v512H-28z' }),
      _react2.default.createElement('path', { d: 'M-52.992-77.837h218.72v276.26h-218.72zM289.42-.572h380.91v199H289.42zM-27.545 320.01h190.33v190.33h-190.33zM292 322.12h378.34v188.21H292z' }),
      _react2.default.createElement('path', { d: 'M196.65-25.447h64.425v535.78H196.65z' }),
      _react2.default.createElement('path', { d: 'M-27.545 224.84h697.88v63.444h-697.88z' })
    )
  );
};
Bv = (0, _pure2.default)(Bv);
Bv.displayName = 'Bv';

exports.default = Bv;
//# sourceMappingURL=bv.js.map