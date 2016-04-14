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

var Sj = function Sj(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement(
        'clipPath',
        { id: 'a' },
        _react2.default.createElement('path', { fillOpacity: '.67', d: 'M-24.803 48.27h570.47v427.85h-570.47z' })
      )
    ),
    _react2.default.createElement(
      'g',
      { 'clip-path': 'url(#a)', transform: 'translate(27.826 -54.153) scale(1.1219)' },
      _react2.default.createElement('path', { d: 'M0 0h512v512H0z' }),
      _react2.default.createElement('path', { 'fill-rule': 'evenodd', d: 'M-80 .158h699.74v511.84H-80z' }),
      _react2.default.createElement('path', { 'fill-rule': 'evenodd', d: 'M-99.213-23.039h212.94v221.47h-212.94zM237.42-23.039h407.46v221.47H237.42zM-99.213 321.67h210v225.76h-210zM240 323.79h404.88v223.65H240z' }),
      _react2.default.createElement('path', { 'fill-rule': 'evenodd', d: 'M144.65-23.039h64.425v570.47H144.65z' }),
      _react2.default.createElement('path', { 'fill-rule': 'evenodd', d: 'M-124.02 224.84h768.9v63.444h-768.9z' })
    )
  );
};
Sj = (0, _pure2.default)(Sj);
Sj.displayName = 'Sj';

exports.default = Sj;
//# sourceMappingURL=sj.js.map