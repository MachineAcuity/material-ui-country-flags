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

var La = function La(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement(
        'clipPath',
        { id: 'a' },
        _react2.default.createElement('path', { fillOpacity: '.67', d: 'M0 0h640v480H0z' })
      )
    ),
    _react2.default.createElement(
      'g',
      { 'fill-rule': 'evenodd', 'clip-path': 'url(#a)' },
      _react2.default.createElement('path', { d: 'M-40 0h720v480H-40z' }),
      _react2.default.createElement('path', { d: 'M-40 119.26h720v241.48H-40z' }),
      _react2.default.createElement('path', { d: 'M423.42 239.998a103.419 103.419 0 1 1-206.838 0 103.419 103.419 0 1 1 206.837 0z' })
    )
  );
};
La = (0, _pure2.default)(La);
La.displayName = 'La';

exports.default = La;
//# sourceMappingURL=la.js.map