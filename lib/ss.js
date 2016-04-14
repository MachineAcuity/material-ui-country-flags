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

var Ss = function Ss(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement(
      'title',
      null,
      'Flag of South Sudan'
    ),
    _react2.default.createElement('path', { d: 'M0 6.72h12.8V9.6H0z' }),
    _react2.default.createElement('path', { d: 'M0 2.88h12.8v3.84H0z' }),
    _react2.default.createElement('path', { d: 'M0 0h12.8v2.88H0z' }),
    _react2.default.createElement('path', { d: 'M0 3.36h12.8v2.88H0z' }),
    _react2.default.createElement('path', { d: 'M0 0l8.314 4.8L0 9.6z' }),
    _react2.default.createElement('path', { d: 'M4.014 3.897L1.235 4.8l2.779.903-1.717-2.364v2.922z' })
  );
};
Ss = (0, _pure2.default)(Ss);
Ss.displayName = 'Ss';

exports.default = Ss;
//# sourceMappingURL=ss.js.map