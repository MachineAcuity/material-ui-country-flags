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

var Nr = function Nr(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement(
        'clipPath',
        { id: 'a' },
        _react2.default.createElement('path', { fillOpacity: '.67', d: 'M-54.667 0h682.67v512h-682.67z' })
      )
    ),
    _react2.default.createElement(
      'g',
      { 'fill-rule': 'evenodd', 'clip-path': 'url(#a)', transform: 'translate(51.25) scale(.9375)', 'stroke-width': '1pt' },
      _react2.default.createElement('path', { d: 'M-140 0H884v512H-140z' }),
      _react2.default.createElement('path', { d: 'M-140 234.11H884v43.783H-140z' }),
      _react2.default.createElement('path', { d: 'M161.81 437.989l-32.916-32.971-10.604 45.363-12.008-45.015-31.875 33.978 12.107-44.989-44.59 13.498 32.972-32.907-45.365-10.613 45.016-12.008L40.56 320.45l44.989 12.108-13.49-44.591 32.907 32.971 10.614-45.364 12.008 45.015 31.866-33.977-12.098 44.988 44.59-13.498-32.98 32.908 45.363 10.613-45.015 12.009 33.987 31.874-44.989-12.108z' })
    )
  );
};
Nr = (0, _pure2.default)(Nr);
Nr.displayName = 'Nr';

exports.default = Nr;
//# sourceMappingURL=nr.js.map