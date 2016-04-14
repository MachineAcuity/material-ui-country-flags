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

var Cg = function Cg(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement(
        'clipPath',
        { id: 'a' },
        _react2.default.createElement('path', { fillOpacity: '.67', d: 'M-79.458 32h640v480h-640z' })
      )
    ),
    _react2.default.createElement(
      'g',
      { 'stroke-width': '1pt', 'fill-rule': 'evenodd', 'clip-path': 'url(#a)', transform: 'translate(79.458 -32)' },
      _react2.default.createElement('path', { d: 'M-119.46 32h720v480h-720z' }),
      _react2.default.createElement('path', { d: 'M-119.46 32v480l480-480h-480z' }),
      _react2.default.createElement('path', { d: 'M120.54 512h480V32l-480 480z' })
    )
  );
};
Cg = (0, _pure2.default)(Cg);
Cg.displayName = 'Cg';

exports.default = Cg;
//# sourceMappingURL=cg.js.map