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

var Bj = function Bj(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement(
        'clipPath',
        { id: 'a' },
        _react2.default.createElement('path', { d: 'M67.64-154h666v666h-666z' })
      )
    ),
    _react2.default.createElement(
      'g',
      { transform: 'matrix(.961 0 0 .7207 -65 110.99)', 'clip-path': 'url(#a)' },
      _react2.default.createElement(
        'g',
        { 'fill-rule': 'evenodd', 'stroke-width': '1pt' },
        _react2.default.createElement('path', { d: 'M0-154h333v666H0z' }),
        _react2.default.createElement('path', { d: 'M333-154h666v333H333z' }),
        _react2.default.createElement('path', { d: 'M333 179h666v333H333z' })
      )
    )
  );
};
Bj = (0, _pure2.default)(Bj);
Bj.displayName = 'Bj';

exports.default = Bj;
//# sourceMappingURL=bj.js.map