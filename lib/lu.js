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

var Lu = function Lu(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement(
      'g',
      { 'fill-rule': 'evenodd', fillOpacity: '1' },
      _react2.default.createElement('path', { d: 'M0 0h640v160.683H0z' }),
      _react2.default.createElement('path', { d: 'M0 160.683h640V321.55H0z' }),
      _react2.default.createElement('path', { d: 'M0 321.55h640v158.448H0z' })
    )
  );
};
Lu = (0, _pure2.default)(Lu);
Lu.displayName = 'Lu';

exports.default = Lu;
//# sourceMappingURL=lu.js.map