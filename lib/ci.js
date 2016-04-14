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

var Ci = function Ci(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement(
      'g',
      { 'fill-rule': 'evenodd', fillOpacity: '1' },
      _react2.default.createElement('path', { d: 'M426.83 0H640v480H426.83z' }),
      _react2.default.createElement('path', { d: 'M0 0h212.88v480H0z' }),
      _react2.default.createElement('path', { d: 'M212.88 0h213.95v480H212.88z' })
    )
  );
};
Ci = (0, _pure2.default)(Ci);
Ci.displayName = 'Ci';

exports.default = Ci;
//# sourceMappingURL=ci.js.map