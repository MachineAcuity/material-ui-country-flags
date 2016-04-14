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

var Cm = function Cm(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M0 0h213.333v480H0z' }),
    _react2.default.createElement('path', { d: 'M213.333 0h213.333v480H213.333z' }),
    _react2.default.createElement('path', { d: 'M426.667 0H640v480H426.667z' }),
    _react2.default.createElement(
      'g',
      { transform: 'translate(320 240) scale(7.1111)' },
      _react2.default.createElement(
        'g',
        { id: 'b' },
        _react2.default.createElement('path', { id: 'a', d: 'M0-8L-2.472-.392 1.332.845z' }),
        _react2.default.createElement('use', { height: '100%', width: '100%', transform: 'scale(-1 1)' })
      ),
      _react2.default.createElement('use', { height: '100%', width: '100%', transform: 'rotate(72)' }),
      _react2.default.createElement('use', { height: '100%', width: '100%', transform: 'rotate(144)' }),
      _react2.default.createElement('use', { height: '100%', width: '100%', transform: 'rotate(-144)' }),
      _react2.default.createElement('use', { height: '100%', width: '100%', transform: 'rotate(-72)' })
    )
  );
};
Cm = (0, _pure2.default)(Cm);
Cm.displayName = 'Cm';

exports.default = Cm;
//# sourceMappingURL=cm.js.map