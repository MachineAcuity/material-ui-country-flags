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

var Eu = function Eu(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement(
        'g',
        { id: 'd' },
        _react2.default.createElement(
          'g',
          { id: 'b' },
          _react2.default.createElement('path', { d: 'M0-1l-.31.95.477.156z', id: 'a' }),
          _react2.default.createElement('use', { transform: 'scale(-1 1)' })
        ),
        _react2.default.createElement(
          'g',
          { id: 'c' },
          _react2.default.createElement('use', { transform: 'rotate(72)' }),
          _react2.default.createElement('use', { transform: 'rotate(144)' })
        ),
        _react2.default.createElement('use', { transform: 'scale(-1 1)' })
      )
    ),
    _react2.default.createElement('path', { d: 'M0 0h640v480H0z' }),
    _react2.default.createElement(
      'g',
      { transform: 'translate(320 242.263) scale(23.7037)' },
      _react2.default.createElement('use', { height: '100%', width: '100%', y: '-6' }),
      _react2.default.createElement('use', { height: '100%', width: '100%', y: '6' }),
      _react2.default.createElement(
        'g',
        { id: 'e' },
        _react2.default.createElement('use', { height: '100%', width: '100%', x: '-6' }),
        _react2.default.createElement('use', { height: '100%', width: '100%', transform: 'rotate(-144 -2.344 -2.11)' }),
        _react2.default.createElement('use', { height: '100%', width: '100%', transform: 'rotate(144 -2.11 -2.344)' }),
        _react2.default.createElement('use', { height: '100%', width: '100%', transform: 'rotate(72 -4.663 -2.076)' }),
        _react2.default.createElement('use', { height: '100%', width: '100%', transform: 'rotate(72 -5.076 .534)' })
      ),
      _react2.default.createElement('use', { height: '100%', width: '100%', transform: 'scale(-1 1)' })
    )
  );
};
Eu = (0, _pure2.default)(Eu);
Eu.displayName = 'Eu';

exports.default = Eu;
//# sourceMappingURL=eu.js.map