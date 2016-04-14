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

var Fo = function Fo(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement(
        'clipPath',
        { id: 'a' },
        _react2.default.createElement('path', { fillOpacity: '.67', d: 'M-78.015 32h640v480h-640z' })
      )
    ),
    _react2.default.createElement(
      'g',
      { 'fill-rule': 'evenodd', 'clip-path': 'url(#a)', transform: 'translate(78.02 -32)', 'stroke-width': '0' },
      _react2.default.createElement('path', { d: 'M-78.015 32h663.91v480h-663.91z' }),
      _react2.default.createElement('path', { d: 'M-76.033 218.67h185.9V32h106.23v186.67h371.79v106.67h-371.79v186.67h-106.23V325.34h-185.9V218.67z' }),
      _react2.default.createElement('path', { d: 'M-76.033 245.33h212.45V32h53.113v213.33h398.35v53.333H189.53v213.33h-53.113v-213.33h-212.45V245.33z' })
    )
  );
};
Fo = (0, _pure2.default)(Fo);
Fo.displayName = 'Fo';

exports.default = Fo;
//# sourceMappingURL=fo.js.map