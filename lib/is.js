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

var Is = function Is(props) {
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
      { 'fill-rule': 'evenodd', 'stroke-width': '0', 'clip-path': 'url(#a)' },
      _react2.default.createElement('path', { d: 'M0 0h666.67v480H0z' }),
      _react2.default.createElement('path', { d: 'M0 186.67h186.67V0h106.67v186.67h373.33v106.67H293.34v186.67H186.67V293.34H0V186.67z' }),
      _react2.default.createElement('path', { d: 'M0 213.33h213.33V0h53.333v213.33h400v53.333h-400v213.33H213.33v-213.33H0V213.33z' })
    )
  );
};
Is = (0, _pure2.default)(Is);
Is.displayName = 'Is';

exports.default = Is;
//# sourceMappingURL=is.js.map