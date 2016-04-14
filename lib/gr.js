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

var Gr = function Gr(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement(
        'clipPath',
        { id: 'a' },
        _react2.default.createElement('path', { fillOpacity: '.67', d: 'M0 0h120v90H0z' })
      )
    ),
    _react2.default.createElement(
      'g',
      { 'fill-rule': 'evenodd', 'clip-path': 'url(#a)', transform: 'scale(5.33)', 'stroke-width': '1pt' },
      _react2.default.createElement('path', { d: 'M0 0h135v10H0z' }),
      _react2.default.createElement('path', { d: 'M0 10h135v10H0z' }),
      _react2.default.createElement('path', { d: 'M0 20h135v10H0z' }),
      _react2.default.createElement('path', { d: 'M0 30h135v10H0z' }),
      _react2.default.createElement('path', { d: 'M0 40h135v10H0z' }),
      _react2.default.createElement('path', { d: 'M0 50h135v10H0z' }),
      _react2.default.createElement('path', { d: 'M0 60h135v10H0z' }),
      _react2.default.createElement('path', { d: 'M0 70h135v10H0z' }),
      _react2.default.createElement('path', { d: 'M0 80h135v10H0zM0 0h50v50H0z' }),
      _react2.default.createElement(
        'g',
        null,
        _react2.default.createElement('path', { d: 'M20 0h10v50H20z' }),
        _react2.default.createElement('path', { d: 'M0 20h50v10H0z' })
      )
    )
  );
};
Gr = (0, _pure2.default)(Gr);
Gr.displayName = 'Gr';

exports.default = Gr;
//# sourceMappingURL=gr.js.map