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

var Cw = function Cw(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement('path', { id: 'b', d: 'M0-1l.225.69H.95L.364.12l.225.69L0 .383-.588.81l.225-.692L-.95-.31h.725z' }),
      _react2.default.createElement(
        'clipPath',
        { id: 'a' },
        _react2.default.createElement('path', { fillOpacity: '.67', d: 'M0 0h682.67v512H0z' })
      )
    ),
    _react2.default.createElement(
      'g',
      { 'clip-path': 'url(#a)', transform: 'scale(.94)' },
      _react2.default.createElement('path', { d: 'M0 0h768v512H0z' }),
      _react2.default.createElement('path', { d: 'M0 320h768v64H0z' }),
      _react2.default.createElement('use', { transform: 'scale(42.67)', height: '9000', width: '13500', y: '2', x: '2' }),
      _react2.default.createElement('use', { transform: 'scale(56.9)', height: '9000', width: '13500', y: '3', x: '3' })
    )
  );
};
Cw = (0, _pure2.default)(Cw);
Cw.displayName = 'Cw';

exports.default = Cw;
//# sourceMappingURL=cw.js.map