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

var Az = function Az(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M.1 0h640v480H.1z' }),
    _react2.default.createElement('path', { d: 'M.1 0h640v320H.1z' }),
    _react2.default.createElement('path', { d: 'M.1 0h640v160H.1z' }),
    _react2.default.createElement('circle', { cx: '304', cy: '240', r: '72' }),
    _react2.default.createElement('circle', { cx: '320', cy: '240', r: '60' }),
    _react2.default.createElement('path', { d: 'M384 200l7.654 21.522 20.63-9.806-9.806 20.63L424 240l-21.522 7.654 9.806 20.63-20.63-9.806L384 280l-7.654-21.522-20.63 9.806 9.806-20.63L344 240l21.522-7.654-9.806-20.63 20.63 9.806L384 200z' })
  );
};
Az = (0, _pure2.default)(Az);
Az.displayName = 'Az';

exports.default = Az;
//# sourceMappingURL=az.js.map