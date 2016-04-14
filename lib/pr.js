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

var Pr = function Pr(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement(
        'clipPath',
        { id: 'a' },
        _react2.default.createElement('path', { fillOpacity: '.67', d: 'M-37.298 0h682.67v512h-682.67z' })
      )
    ),
    _react2.default.createElement(
      'g',
      { 'fill-rule': 'evenodd', 'clip-path': 'url(#a)', transform: 'translate(34.967) scale(.9375)' },
      _react2.default.createElement('path', { d: 'M-37.298 0h768v512h-768z' }),
      _react2.default.createElement('path', { d: 'M-37.298 102.4h768v102.4h-768zM-37.298 307.2h768v102.4h-768z' }),
      _react2.default.createElement('path', { d: 'M-37.298 0l440.69 255.67-440.69 255.34V0z' }),
      _react2.default.createElement('path', { d: 'M156.45 325.47l-47.447-35.432-47.214 35.78 17.56-58.144-47.128-35.904 58.305-.5L108.61 173.3l18.472 57.835 58.305.077-46.886 36.243 17.947 58.016z' })
    )
  );
};
Pr = (0, _pure2.default)(Pr);
Pr.displayName = 'Pr';

exports.default = Pr;
//# sourceMappingURL=pr.js.map