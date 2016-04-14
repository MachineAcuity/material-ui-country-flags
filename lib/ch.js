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

var Ch = function Ch(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement(
      'g',
      { 'fill-rule': 'evenodd', 'stroke-width': '1pt' },
      _react2.default.createElement('path', { d: 'M0 0h640v480H0z' }),
      _react2.default.createElement(
        'g',
        null,
        _react2.default.createElement('path', { d: 'M170 194.997h299.996v89.997H170z' }),
        _react2.default.createElement('path', { d: 'M275 89.997h89.996v299.996H275z' })
      )
    )
  );
};
Ch = (0, _pure2.default)(Ch);
Ch.displayName = 'Ch';

exports.default = Ch;
//# sourceMappingURL=ch.js.map