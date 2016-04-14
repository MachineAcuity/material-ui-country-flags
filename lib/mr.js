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

var Mr = function Mr(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M0 0h640v480H0z' }),
    _react2.default.createElement('circle', { cx: '320', cy: '180', r: '155' }),
    _react2.default.createElement('path', { d: 'M243.425 11.216A150 150 0 0 0 170 140a150 150 0 0 0 150 150 150 150 0 0 0 150-150 150 150 0 0 0-73.433-128.784H243.425z' }),
    _react2.default.createElement(
      'g',
      { id: 'b', transform: 'matrix(5 0 0 5 320 140)' },
      _react2.default.createElement('path', { id: 'a', d: 'M0-12L-3.708-.587l5.706 1.854' }),
      _react2.default.createElement('use', { height: '100%', width: '100%', transform: 'scale(-1 1)' })
    ),
    _react2.default.createElement('use', { height: '100%', width: '100%', transform: 'rotate(72 320 140)' }),
    _react2.default.createElement('use', { height: '100%', width: '100%', transform: 'rotate(144 320 140)' }),
    _react2.default.createElement('use', { height: '100%', width: '100%', transform: 'rotate(-144 320 140)' }),
    _react2.default.createElement('use', { height: '100%', width: '100%', transform: 'rotate(-72 320 140)' })
  );
};
Mr = (0, _pure2.default)(Mr);
Mr.displayName = 'Mr';

exports.default = Mr;
//# sourceMappingURL=mr.js.map