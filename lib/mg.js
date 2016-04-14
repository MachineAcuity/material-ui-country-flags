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

var Mg = function Mg(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement(
      'g',
      { 'stroke-width': '1pt', 'fill-rule': 'evenodd' },
      _react2.default.createElement('path', { d: 'M213.33 0H640v240H213.33z' }),
      _react2.default.createElement('path', { d: 'M213.33 240H640v240H213.33z' }),
      _react2.default.createElement('path', { d: 'M0 0h213.33v480H0z' })
    )
  );
};
Mg = (0, _pure2.default)(Mg);
Mg.displayName = 'Mg';

exports.default = Mg;
//# sourceMappingURL=mg.js.map