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

var Dj = function Dj(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement(
        'clipPath',
        { id: 'a' },
        _react2.default.createElement('path', { fillOpacity: '.67', d: 'M-40 0h682.67v512H-40z' })
      )
    ),
    _react2.default.createElement(
      'g',
      { 'clip-path': 'url(#a)', 'fill-rule': 'evenodd', transform: 'translate(37.5) scale(.94)' },
      _react2.default.createElement('path', { d: 'M-40 0h768v512H-40z' }),
      _react2.default.createElement('path', { d: 'M-40 0h768v256H-40z' }),
      _react2.default.createElement('path', { d: 'M-40 0l382.73 255.67L-40 511.01V0z' }),
      _react2.default.createElement('path', { d: 'M119.8 292.07l-30.82-22.18-30.67 22.4 11.407-36.41-30.613-22.48 37.874-.31 11.747-36.3 12 36.216 37.874.048-30.458 22.695 11.66 36.328z' })
    )
  );
};
Dj = (0, _pure2.default)(Dj);
Dj.displayName = 'Dj';

exports.default = Dj;
//# sourceMappingURL=dj.js.map