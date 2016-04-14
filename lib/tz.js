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

var Tz = function Tz(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement(
        'clipPath',
        { id: 'a' },
        _react2.default.createElement('path', { fillOpacity: '.67', d: 'M10 0h160v120H10z' })
      )
    ),
    _react2.default.createElement(
      'g',
      { 'clip-path': 'url(#a)', 'fill-rule': 'evenodd', transform: 'matrix(4 0 0 4 -40 0)', 'stroke-width': '1pt' },
      _react2.default.createElement('path', { d: 'M0 0h180v120H0z' }),
      _react2.default.createElement('path', { d: 'M0 0h180L0 120V0z' }),
      _react2.default.createElement('path', { d: 'M0 120h40l140-95V0h-40L0 95v25z' }),
      _react2.default.createElement('path', { d: 'M0 91.456L137.18 0h13.52L0 100.47v-9.014zM29.295 120l150.7-100.47v9.014L42.815 120h-13.52z' })
    )
  );
};
Tz = (0, _pure2.default)(Tz);
Tz.displayName = 'Tz';

exports.default = Tz;
//# sourceMappingURL=tz.js.map