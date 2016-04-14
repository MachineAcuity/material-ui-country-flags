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

var Hn = function Hn(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M-85.333 0h682.667v512H-85.333z' }),
    _react2.default.createElement('path', { d: 'M-85.333 170.667h682.667v170.667H-85.333z' }),
    _react2.default.createElement(
      'g',
      { id: 'c', transform: 'translate(256 256) scale(28.44444)' },
      _react2.default.createElement(
        'g',
        { id: 'b' },
        _react2.default.createElement('path', { id: 'a', d: 'M-.31-.05l.477.156L0-1z' }),
        _react2.default.createElement('use', { height: '100%', width: '100%', transform: 'scale(-1 1)' })
      ),
      _react2.default.createElement('use', { height: '100%', width: '100%', transform: 'rotate(72)' }),
      _react2.default.createElement('use', { height: '100%', width: '100%', transform: 'rotate(-72)' }),
      _react2.default.createElement('use', { height: '100%', width: '100%', transform: 'rotate(144)' }),
      _react2.default.createElement('use', { height: '100%', width: '100%', transform: 'rotate(-144)' })
    ),
    _react2.default.createElement('use', { height: '100%', width: '100%', transform: 'translate(142.222 -45.51)' }),
    _react2.default.createElement('use', { height: '100%', width: '100%', transform: 'translate(142.222 39.822)' }),
    _react2.default.createElement('use', { height: '100%', width: '100%', transform: 'translate(-142.222 -45.51)' }),
    _react2.default.createElement('use', { height: '100%', width: '100%', transform: 'translate(-142.222 39.822)' })
  );
};
Hn = (0, _pure2.default)(Hn);
Hn.displayName = 'Hn';

exports.default = Hn;
//# sourceMappingURL=hn.js.map