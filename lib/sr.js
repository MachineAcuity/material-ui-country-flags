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

var Sr = function Sr(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M.1 0h640v480H.1z' }),
    _react2.default.createElement('path', { d: 'M.1 96h640v288H.1z' }),
    _react2.default.createElement('path', { d: 'M.1 144h640v192H.1z' }),
    _react2.default.createElement('path', { d: 'M320 153.167l56.427 173.666-147.73-107.33h182.605l-147.73 107.33z' })
  );
};
Sr = (0, _pure2.default)(Sr);
Sr.displayName = 'Sr';

exports.default = Sr;
//# sourceMappingURL=sr.js.map