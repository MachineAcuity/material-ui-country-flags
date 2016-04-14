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

var St = function St(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement(
        'clipPath',
        { id: 'a' },
        _react2.default.createElement('path', { fillOpacity: '.67', d: 'M0 0h682.67v512H0z' })
      )
    ),
    _react2.default.createElement(
      'g',
      { 'clip-path': 'url(#a)', 'fill-rule': 'evenodd', transform: 'scale(.9375)' },
      _react2.default.createElement('path', { d: 'M0 0h1024v504.3H0z' }),
      _react2.default.createElement('path', { d: 'M0 0h1024v146.29H0zM0 365.71h1024V512H0z' }),
      _react2.default.createElement('path', { d: 'M.708 0c1.417 0 255.29 253.03 255.29 253.03L-.002 512 .707 0z' }),
      _react2.default.createElement(
        'g',
        { 'stroke-width': '1pt' },
        _react2.default.createElement('path', { d: 'M411.966 268.686l-31.97-23.896 39.499.04 12.174-38.705 12.173 38.705 39.5-.029-31.977 23.885 12.236 38.687-31.938-23.942-31.938 23.937zM215.048 268.686l-31.971-23.896 39.5.04 12.173-38.705 12.174 38.705 39.5-.029-31.977 23.885 12.235 38.687-31.938-23.942-31.937 23.937z' })
      )
    )
  );
};
St = (0, _pure2.default)(St);
St.displayName = 'St';

exports.default = St;
//# sourceMappingURL=st.js.map