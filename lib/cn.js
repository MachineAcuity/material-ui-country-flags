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

var Cn = function Cn(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement(
      'title',
      null,
      'Flag of the People\'s Republic of China'
    ),
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement('path', { id: 'b', d: 'M-.588.81L0-1 .588.81-.952-.31H.952z' }),
      _react2.default.createElement(
        'clipPath',
        { id: 'a' },
        _react2.default.createElement('path', { d: 'M-5-15.4h26.667v20H-5z' })
      )
    ),
    _react2.default.createElement(
      'g',
      { transform: 'matrix(.48 0 0 .48 -2.6 2.39)', 'clip-path': 'url(#a)' },
      _react2.default.createElement('path', { d: 'M-5-15.4h30v20H-5z' }),
      _react2.default.createElement('use', { height: '20', width: '30', transform: 'matrix(3 0 0 3 0 -10.4)' }),
      _react2.default.createElement('use', { height: '20', width: '30', transform: 'rotate(-120.93 -1.29 -8.12)' }),
      _react2.default.createElement('use', { height: '20', width: '30', transform: 'rotate(-98.11 -1.45 -8.74)' }),
      _react2.default.createElement('use', { height: '20', width: '30', transform: 'rotate(-74.04 -2.07 -8.84)' }),
      _react2.default.createElement('use', { height: '20', width: '30', transform: 'rotate(-51.32 -4.16 -8.4)' })
    )
  );
};
Cn = (0, _pure2.default)(Cn);
Cn.displayName = 'Cn';

exports.default = Cn;
//# sourceMappingURL=cn.js.map