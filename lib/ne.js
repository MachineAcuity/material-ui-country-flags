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

var Ne = function Ne(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M0 0h640v480H0z' }),
    _react2.default.createElement('path', { d: 'M0 0h640v320H0z' }),
    _react2.default.createElement('path', { d: 'M0 0h640v160H0z' }),
    _react2.default.createElement('circle', { cx: '320', cy: '240', r: '68' })
  );
};
Ne = (0, _pure2.default)(Ne);
Ne.displayName = 'Ne';

exports.default = Ne;
//# sourceMappingURL=ne.js.map