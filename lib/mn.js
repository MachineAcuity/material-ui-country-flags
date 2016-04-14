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

var Mn = function Mn(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M0 0h640v480H0z' }),
    _react2.default.createElement('path', { d: 'M213.333 0h213.333v480H213.333z' }),
    _react2.default.createElement('circle', { cx: '106.667', cy: '189.333', r: '29.333' }),
    _react2.default.createElement('circle', { cx: '106.667', cy: '176', r: '32' }),
    _react2.default.createElement('circle', { cx: '106.667', cy: '181.333', r: '21.333' }),
    _react2.default.createElement('path', { d: 'M93.333 141.333a13.333 13.333 0 0 0 26.667 0c0-5.333-3.333-6-3.333-8s2-4.666-2-8c2 3.334-1.334 4-1.334 7.334 0 3.333 1.334 3.333 1.334 6M48 224v128h26.667V224zm90.667 0v128h26.666V224zM80 245.333V256h53.333v-10.667zM80 320v10.667h53.333V320zm0-96h53.333l-26.666 16zm0 112h53.333l-26.666 16z' }),
    _react2.default.createElement(
      'g',
      { transform: 'translate(0 80) scale(.13333)', stroke: '#c4272f', 'stroke-width': '24' },
      _react2.default.createElement('circle', { r: '212', cy: '1560', cx: '800' }),
      _react2.default.createElement('path', { d: 'M800 1348a106 106 0 0 1 0 212 106 106 0 0 0 0 212' })
    ),
    _react2.default.createElement(
      'g',
      { transform: 'translate(0 80) scale(.13333)' },
      _react2.default.createElement('circle', { cx: '800', cy: '1454', r: '40' }),
      _react2.default.createElement('circle', { cx: '800', cy: '1666', r: '40' })
    )
  );
};
Mn = (0, _pure2.default)(Mn);
Mn.displayName = 'Mn';

exports.default = Mn;
//# sourceMappingURL=mn.js.map