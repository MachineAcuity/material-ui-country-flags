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

var Cz = function Cz(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement(
        'clipPath',
        { id: 'a' },
        _react2.default.createElement('path', { fillOpacity: '.67', d: 'M-74 0h682.67v512H-74z' })
      )
    ),
    _react2.default.createElement(
      'g',
      { 'fill-rule': 'evenodd', 'clip-path': 'url(#a)', transform: 'translate(69.38) scale(.94)', 'stroke-width': '1pt' },
      _react2.default.createElement('path', { d: 'M-74 0h768v512H-74z' }),
      _react2.default.createElement('path', { d: 'M-74 0h768v256H-74z' }),
      _react2.default.createElement('path', { d: 'M-74 0l382.73 255.67L-74 511.01V0z' })
    )
  );
};
Cz = (0, _pure2.default)(Cz);
Cz.displayName = 'Cz';

exports.default = Cz;
//# sourceMappingURL=cz.js.map