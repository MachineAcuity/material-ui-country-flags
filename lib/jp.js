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

var Jp = function Jp(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement(
        'clipPath',
        { id: 'a' },
        _react2.default.createElement('path', { fillOpacity: '.67', d: 'M-88.001 32h640v480h-640z' })
      )
    ),
    _react2.default.createElement(
      'g',
      { 'fill-rule': 'evenodd', 'clip-path': 'url(#a)', transform: 'translate(88.001 -32)', 'stroke-width': '1pt' },
      _react2.default.createElement('path', { d: 'M-128 32h720v480h-720z' }),
      _react2.default.createElement('ellipse', { rx: '194.93', ry: '194.93', transform: 'translate(-168.44 8.618) scale(.76554)', cy: '344.05', cx: '523.08' })
    )
  );
};
Jp = (0, _pure2.default)(Jp);
Jp.displayName = 'Jp';

exports.default = Jp;
//# sourceMappingURL=jp.js.map