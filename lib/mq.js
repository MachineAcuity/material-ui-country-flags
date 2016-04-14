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

var Mq = function Mq(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement(
      'g',
      { 'stroke-width': '1pt', 'fill-rule': 'evenodd' },
      _react2.default.createElement('path', { d: 'M0 0h640v480H0z' }),
      _react2.default.createElement('path', { d: 'M0 0h213.33v480H0z' }),
      _react2.default.createElement('path', { d: 'M426.67 0H640v480H426.67z' })
    )
  );
};
Mq = (0, _pure2.default)(Mq);
Mq.displayName = 'Mq';

exports.default = Mq;
//# sourceMappingURL=mq.js.map