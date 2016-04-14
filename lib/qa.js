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

var Qa = function Qa(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement(
        'clipPath',
        { id: 'a' },
        _react2.default.createElement('path', { fillOpacity: '.67', d: 'M-27.334 0h682.67v512h-682.67z' })
      )
    ),
    _react2.default.createElement(
      'g',
      { 'fill-rule': 'evenodd', 'clip-path': 'url(#a)', transform: 'translate(25.626) scale(.9375)', 'stroke-width': '1pt' },
      _react2.default.createElement('path', { d: 'M-70 0h768v512H-70z' }),
      _react2.default.createElement('path', { d: 'M86.533 511.76l-156.53.24L-70 0 85.8.081l100.53 32.327-99.795 31.51 99.791 32.49-99.791 31.51 99.791 32.49-99.791 31.51 99.791 32.49-99.791 31.51 99.791 32.49-99.791 31.511 99.791 32.49-99.791 31.511 99.791 32.49-99.791 31.51 99.791 32.49-99.791 31.51' })
    )
  );
};
Qa = (0, _pure2.default)(Qa);
Qa.displayName = 'Qa';

exports.default = Qa;
//# sourceMappingURL=qa.js.map