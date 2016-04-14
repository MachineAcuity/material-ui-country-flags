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

var Cf = function Cf(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement(
        'clipPath',
        { id: 'a' },
        _react2.default.createElement('path', { fillOpacity: '.67', d: 'M-12.355 32h640v480h-640z' })
      )
    ),
    _react2.default.createElement(
      'g',
      { 'clip-path': 'url(#a)', 'fill-rule': 'evenodd', transform: 'translate(12.355 -32)' },
      _react2.default.createElement('path', { d: 'M-52 32h719.29v118.94H-52z' }),
      _react2.default.createElement('path', { d: 'M-52 391.65h719.29V512H-52z' }),
      _react2.default.createElement('path', { d: 'M-52 271.3h719.29v120.35H-52z' }),
      _react2.default.createElement('path', { d: 'M-52 150.94h719.29v120.35H-52z' }),
      _react2.default.createElement('path', { d: 'M247.7 32.474h119.88v479.53H247.7z' }),
      _react2.default.createElement('path', { d: 'M99.253 137.653L67.837 115.93l-31.314 21.937 10.87-36.717-30.457-23.118 38.14-.968 12.49-36.22 12.702 36.113 38.173.732-30.284 23.288' })
    )
  );
};
Cf = (0, _pure2.default)(Cf);
Cf.displayName = 'Cf';

exports.default = Cf;
//# sourceMappingURL=cf.js.map