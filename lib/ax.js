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

var Ax = function Ax(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement(
        'clipPath',
        { id: 'a' },
        _react2.default.createElement('path', { fillOpacity: '.67', d: 'M106.25 0h1133.3v850H106.25z' })
      )
    ),
    _react2.default.createElement(
      'g',
      { 'clip-path': 'url(#a)', transform: 'translate(-149.33) scale(.6024)' },
      _react2.default.createElement('path', { d: 'M0 0h1300v850H0z' }),
      _react2.default.createElement(
        'g',
        null,
        _react2.default.createElement('path', { d: 'M400 0h250v850H400z' }),
        _react2.default.createElement('path', { d: 'M0 300h1300v250H0z' })
      ),
      _react2.default.createElement(
        'g',
        null,
        _react2.default.createElement('path', { d: 'M475 0h100v850H475z' }),
        _react2.default.createElement('path', { d: 'M0 375h1300v100H0z' })
      )
    )
  );
};
Ax = (0, _pure2.default)(Ax);
Ax.displayName = 'Ax';

exports.default = Ax;
//# sourceMappingURL=ax.js.map