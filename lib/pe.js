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

var Pe = function Pe(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement(
      'g',
      { 'fill-rule': 'evenodd', fillOpacity: '1' },
      _react2.default.createElement('path', { d: 'M212.875 0h213.95v480h-213.95z' }),
      _react2.default.createElement('path', { d: 'M0 0h212.875v480H0zM425.163 0H640v480H425.162z' })
    )
  );
};
Pe = (0, _pure2.default)(Pe);
Pe.displayName = 'Pe';

exports.default = Pe;
//# sourceMappingURL=pe.js.map