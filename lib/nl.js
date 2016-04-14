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

var Nl = function Nl(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement(
      'g',
      { 'fill-rule': 'evenodd', 'stroke-width': '1pt', transform: 'scale(1.25 .9375)' },
      _react2.default.createElement('rect', { rx: '0', ry: '0', height: '509.76', width: '512' }),
      _react2.default.createElement('rect', { rx: '0', ry: '0', height: '169.92', width: '512', y: '342.08' }),
      _react2.default.createElement('path', { d: 'M0 0h512v169.92H0z' })
    )
  );
};
Nl = (0, _pure2.default)(Nl);
Nl.displayName = 'Nl';

exports.default = Nl;
//# sourceMappingURL=nl.js.map