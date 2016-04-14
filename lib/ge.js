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

var Ge = function Ge(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement(
        'g',
        { id: 'c' },
        _react2.default.createElement(
          'clipPath',
          { id: 'a' },
          _react2.default.createElement('path', { d: 'M-109 104a104 104 0 0 0 0-208h218a104 104 0 0 0 0 208z' })
        ),
        _react2.default.createElement('path', { id: 'b', 'clip-path': 'url(#a)', d: 'M-55 74a55 55 0 0 1 110 0V-74a55 55 0 0 1-110 0z' }),
        _react2.default.createElement('use', { transform: 'rotate(90)', height: '200', width: '300' })
      )
    ),
    _react2.default.createElement('path', { d: 'M0 0h213.33v160H0z' }),
    _react2.default.createElement('path', { d: 'M6.385 13.192h200.56v133.71H6.385z' }),
    _react2.default.createElement('path', { d: 'M93.296 13.192v53.484H6.386v26.742h86.91v53.484h26.742V93.418h86.91V66.676h-86.91V13.192H93.296z' }),
    _react2.default.createElement('use', { transform: 'matrix(.67 0 0 .67 49.47 39.57)', height: '200', width: '300' }),
    _react2.default.createElement('use', { transform: 'matrix(.67 0 0 .67 163.86 120.53)', height: '200', width: '300' }),
    _react2.default.createElement('use', { transform: 'matrix(.67 0 0 .67 163.86 39.57)', height: '200', width: '300' }),
    _react2.default.createElement('use', { transform: 'matrix(.67 0 0 .67 49.47 120.53)', height: '200', width: '300' })
  );
};
Ge = (0, _pure2.default)(Ge);
Ge.displayName = 'Ge';

exports.default = Ge;
//# sourceMappingURL=ge.js.map