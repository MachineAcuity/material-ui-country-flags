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

var Tn = function Tn(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement(
        'clipPath',
        { id: 'a' },
        _react2.default.createElement('path', { fillOpacity: '.67', d: 'M-85.333 0h682.67v512h-682.67z' })
      )
    ),
    _react2.default.createElement(
      'g',
      { 'fill-rule': 'evenodd', 'clip-path': 'url(#a)', transform: 'translate(80) scale(.9375)' },
      _react2.default.createElement('path', { d: 'M-128 0h768v512h-768z' }),
      _react2.default.createElement('path', { d: 'M385.808 255.773c0 71.316-57.813 129.129-129.129 129.129-71.317 0-129.13-57.814-129.13-129.13s57.814-129.129 129.13-129.129c71.317 0 129.13 57.814 129.13 129.13z' }),
      _react2.default.createElement('path', { d: 'M256.68 341.41c-47.27 0-85.635-38.364-85.635-85.635s38.364-85.636 85.635-85.636c11.818 0 25.27 2.719 34.407 9.43-62.63 2.357-78.472 55.477-78.472 76.885s10.128 69.154 78.471 76.205c-7.777 5.013-22.588 8.75-34.406 8.75z' }),
      _react2.default.createElement('path', { d: 'M332.11 291.785l-38.89-14.18-25.72 32.417 1.477-41.356-38.787-14.45 39.798-11.373 1.744-41.356 23.12 34.338 39.87-11.116-25.504 32.594z' })
    )
  );
};
Tn = (0, _pure2.default)(Tn);
Tn.displayName = 'Tn';

exports.default = Tn;
//# sourceMappingURL=tn.js.map