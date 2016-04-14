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

var Jm = function Jm(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement(
      'g',
      { 'fill-rule': 'evenodd' },
      _react2.default.createElement('path', { d: 'M0 0l320 240L0 480zM640 0L320 240l320 240z' }),
      _react2.default.createElement('path', { d: 'M0 0l320 240L640 0zM0 480l320-240 320 240z' }),
      _react2.default.createElement('path', { d: 'M640 0h-59.625L0 435.281V480h59.629L640.004 44.719z' }),
      _react2.default.createElement('path', { d: 'M0 0v44.722l580.375 435.28h59.629v-44.72L59.629 0z' })
    )
  );
};
Jm = (0, _pure2.default)(Jm);
Jm.displayName = 'Jm';

exports.default = Jm;
//# sourceMappingURL=jm.js.map