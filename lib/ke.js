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

var Ke = function Ke(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement('path', { 'stroke-miterlimit': '10', d: 'M-28.58 47.5l1.733 1 46.713-80.91c2.732-.73 4.232-3.33 5.732-5.927 1-1.732 5-8.66 6.734-17.663-6.93 6.003-10.93 12.93-11.93 14.663-1.5 2.598-3 5.196-2.268 7.928z', id: 'a' })
    ),
    _react2.default.createElement('path', { d: 'M0 0h640v480H0z' }),
    _react2.default.createElement('path', { d: 'M0 0h640v144H0z' }),
    _react2.default.createElement('path', { d: 'M0 336h640v144H0z' }),
    _react2.default.createElement(
      'g',
      { id: 'b', transform: 'matrix(3 0 0 3 320 240)' },
      _react2.default.createElement('use', { height: '100%', width: '100%', stroke: '#000' }),
      _react2.default.createElement('use', { height: '100%', width: '100%' })
    ),
    _react2.default.createElement('use', { height: '100%', width: '100%', transform: 'matrix(-1 0 0 1 640 0)' }),
    _react2.default.createElement('path', { d: 'M640.5 168H377c-9-24-39-72-57-72s-48 48-57 72H-.227v144H263c9 24 39 72 57 72s48-48 57-72h263.5V168z' }),
    _react2.default.createElement('path', { id: 'c', d: 'M377 312c9-24 15-48 15-72s-6-48-15-72c-9 24-15 48-15 72s6 48 15 72' }),
    _react2.default.createElement('use', { height: '100%', width: '100%', transform: 'matrix(-1 0 0 1 640 0)' }),
    _react2.default.createElement(
      'g',
      { transform: 'matrix(3 0 0 3 320 240)' },
      _react2.default.createElement('ellipse', { rx: '4', ry: '6' }),
      _react2.default.createElement('path', { id: 'd', d: 'M1 5.85s4 8 4 21-4 21-4 21z' }),
      _react2.default.createElement('use', { height: '100%', width: '100%', transform: 'scale(-1)' }),
      _react2.default.createElement('use', { height: '100%', width: '100%', transform: 'scale(-1 1)' }),
      _react2.default.createElement('use', { height: '100%', width: '100%', transform: 'scale(1 -1)' })
    )
  );
};
Ke = (0, _pure2.default)(Ke);
Ke.displayName = 'Ke';

exports.default = Ke;
//# sourceMappingURL=ke.js.map