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

var So = function So(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement(
        'clipPath',
        { id: 'a' },
        _react2.default.createElement('path', { fillOpacity: '.67', d: 'M-85.334 0h682.67v512h-682.67z' })
      )
    ),
    _react2.default.createElement(
      'g',
      { 'clip-path': 'url(#a)', 'fill-rule': 'evenodd', transform: 'translate(80.001) scale(.9375)' },
      _react2.default.createElement('path', { d: 'M-128 0h768v512h-768z' }),
      _react2.default.createElement('path', { d: 'M336.48 381.19l-82.505-53.476-82.101 54.001 30.535-87.754-81.95-54.188 101.39-.756 31.447-87.488 32.121 87.286 101.39.116-81.53 54.699 31.209 87.56z' })
    )
  );
};
So = (0, _pure2.default)(So);
So.displayName = 'So';

exports.default = So;
//# sourceMappingURL=so.js.map