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

var Mm = function Mm(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement('path', { id: 'a', transform: 'scale(8.844)', d: 'M0-.5l.162.5h-.324z' }),
      _react2.default.createElement(
        'g',
        { id: 'c' },
        _react2.default.createElement('use', { transform: 'rotate(-144)', width: '18', height: '12' }),
        _react2.default.createElement('use', { transform: 'rotate(-72)', width: '18', height: '12' }),
        _react2.default.createElement('use', { width: '18', height: '12' }),
        _react2.default.createElement('use', { transform: 'rotate(72)', width: '18', height: '12' }),
        _react2.default.createElement('use', { transform: 'rotate(144)', width: '18', height: '12' })
      ),
      _react2.default.createElement(
        'clipPath',
        { id: 'b' },
        _react2.default.createElement('path', { d: 'M1-7.2h16v12H1z' })
      )
    ),
    _react2.default.createElement(
      'g',
      { transform: 'matrix(.4 0 0 .4 -.4 2.88)', 'clip-path': 'url(#b)' },
      _react2.default.createElement('path', { d: 'M0-7.2h18v6H0z' }),
      _react2.default.createElement('path', { d: 'M0-1.2h18v6H0z' }),
      _react2.default.createElement('path', { d: 'M0-3.2h18v4H0z' }),
      _react2.default.createElement('use', { transform: 'translate(0 -7.2)', height: '12', width: '18', y: '6.422', x: '9' })
    )
  );
};
Mm = (0, _pure2.default)(Mm);
Mm.displayName = 'Mm';

exports.default = Mm;
//# sourceMappingURL=mm.js.map