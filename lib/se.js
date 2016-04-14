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

var Se = function Se(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement(
        'clipPath',
        { id: 'a' },
        _react2.default.createElement('path', { fillOpacity: '.67', d: 'M-53.421 0h682.67v512h-682.67z' })
      )
    ),
    _react2.default.createElement(
      'g',
      { 'clip-path': 'url(#a)', transform: 'translate(50.082) scale(.9375)' },
      _react2.default.createElement(
        'g',
        { 'fill-rule': 'evenodd', 'stroke-width': '1pt' },
        _react2.default.createElement('path', { d: 'M-121.103.302h256V205.1h-256zM-121.103 307.178h256v204.8h-256z' }),
        _react2.default.createElement('path', { d: 'M-121.103 204.984h256v102.4h-256z' }),
        _react2.default.createElement('path', { d: 'M133.843.01h102.4v511.997h-102.4z' }),
        _react2.default.createElement('path', { d: 'M232.995 205.013h460.798v102.4H232.995z' }),
        _react2.default.createElement('path', { d: 'M236.155 307.208h460.797v204.799H236.155zM236.155.302h460.797V205.1H236.155z' })
      )
    )
  );
};
Se = (0, _pure2.default)(Se);
Se.displayName = 'Se';

exports.default = Se;
//# sourceMappingURL=se.js.map