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

var To = function To(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement(
      'g',
      { 'fill-rule': 'evenodd', 'stroke-width': '1pt' },
      _react2.default.createElement('path', { d: 'M0 0h640v480H0z' }),
      _react2.default.createElement('path', { d: 'M0 0h249.954v200.321H0z' }),
      _react2.default.createElement(
        'g',
        null,
        _react2.default.createElement('path', { d: 'M102.854 31.24h39.84v139.54h-39.84z' }),
        _react2.default.createElement('path', { d: 'M192.55 81.086v39.84H53.01v-39.84z' })
      )
    )
  );
};
To = (0, _pure2.default)(To);
To.displayName = 'To';

exports.default = To;
//# sourceMappingURL=to.js.map