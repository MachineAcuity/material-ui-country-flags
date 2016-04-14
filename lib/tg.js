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

var Tg = function Tg(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement(
        'clipPath',
        { id: 'a' },
        _react2.default.createElement('path', { fillOpacity: '.67', d: 'M0 0h682.67v512H0z' })
      )
    ),
    _react2.default.createElement(
      'g',
      { 'clip-path': 'url(#a)', 'fill-rule': 'evenodd', transform: 'scale(.9375)' },
      _react2.default.createElement('path', { d: 'M0 0h767.63v512H0z' }),
      _react2.default.createElement('path', { d: 'M0 208.14h767.63v102.81H0zM0 .248h767.63v102.81H0z' }),
      _react2.default.createElement('path', { d: 'M0 .248h306.51v310.71H0z' }),
      _react2.default.createElement('path', { d: 'M134.42 128.43c0-.856 18.836-53.083 18.836-53.083l17.124 52.227s57.365 1.713 57.365.856-45.378 34.248-45.378 34.248 21.404 59.933 20.549 58.221c-.856-1.712-49.659-35.96-49.659-35.96s-49.658 34.248-48.802 34.248c.856 0 18.835-56.508 18.835-56.508l-44.522-33.392 55.652-.856z' }),
      _react2.default.createElement('path', { d: 'M0 409.19h767.63V512H0z' })
    )
  );
};
Tg = (0, _pure2.default)(Tg);
Tg.displayName = 'Tg';

exports.default = Tg;
//# sourceMappingURL=tg.js.map