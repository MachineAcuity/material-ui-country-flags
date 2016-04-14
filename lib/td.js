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

var Td = function Td(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement(
      'g',
      { 'fill-rule': 'evenodd', fillOpacity: '1' },
      _react2.default.createElement('path', { d: 'M0 0h213.97v480H0z' }),
      _react2.default.createElement('path', { d: 'M426.03 0H640v480H426.03z' }),
      _react2.default.createElement('path', { d: 'M213.97 0h212.06v480H213.97z' })
    )
  );
};
Td = (0, _pure2.default)(Td);
Td.displayName = 'Td';

exports.default = Td;
//# sourceMappingURL=td.js.map