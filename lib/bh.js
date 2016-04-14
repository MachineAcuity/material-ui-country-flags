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

var Bh = function Bh(props) {
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
      { 'fill-rule': 'evenodd', 'stroke-width': '1pt', 'clip-path': 'url(#a)' },
      _react2.default.createElement('path', { d: 'M-32.5 0h720v480h-720z' }),
      _react2.default.createElement('path', { d: 'M114.25 479.77L-32.5 480V0l146.06.075 94.242 30.306-93.554 29.542 93.554 30.458-93.554 29.542 93.554 30.458-93.554 29.54 93.554 30.46-93.554 29.54 93.554 30.46-93.554 29.54 93.554 30.46-93.554 29.54 93.554 30.46-93.554 29.54 93.554 30.46-93.554 29.54' })
    )
  );
};
Bh = (0, _pure2.default)(Bh);
Bh.displayName = 'Bh';

exports.default = Bh;
//# sourceMappingURL=bh.js.map