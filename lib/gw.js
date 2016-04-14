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

var Gw = function Gw(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement(
        'clipPath',
        { id: 'a' },
        _react2.default.createElement('path', { fillOpacity: '.67', d: 'M0 77.588h503.67v377.75H0z' })
      )
    ),
    _react2.default.createElement(
      'g',
      { 'fill-rule': 'evenodd', 'clip-path': 'url(#a)', transform: 'matrix(1.27 0 0 1.27 0 -98.59)' },
      _react2.default.createElement('path', { d: 'M159.45-60.328h375.7v327.84h-375.7z' }),
      _react2.default.createElement('path', { d: 'M207.32 258.67H512v253.07H207.32z' }),
      _react2.default.createElement('path', { d: 'M0 0h207.32v512H0z' }),
      _react2.default.createElement('path', { d: 'M160.61 325.58l-55.86-39.888-55.587 40.28 20.674-65.457-55.485-40.42 68.645-.563 21.29-65.258 21.748 65.108 68.645.086-55.2 40.8 21.13 65.312z' })
    )
  );
};
Gw = (0, _pure2.default)(Gw);
Gw.displayName = 'Gw';

exports.default = Gw;
//# sourceMappingURL=gw.js.map