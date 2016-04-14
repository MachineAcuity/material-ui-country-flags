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

var Fi = function Fi(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement(
        'clipPath',
        { id: 'a' },
        _react2.default.createElement('path', { fillOpacity: '.67', d: 'M-19.45 0h682.67v512H-19.45z' })
      )
    ),
    _react2.default.createElement(
      'g',
      { 'fill-rule': 'evenodd', 'clip-path': 'url(#a)', transform: 'translate(18.23) scale(.94)', 'stroke-width': '1pt' },
      _react2.default.createElement('path', { d: 'M-105.62 325.66h249.35V512h-249.35z' }),
      _react2.default.createElement('path', { d: 'M143.57 0h149.94v512H143.57z' }),
      _react2.default.createElement('path', { d: 'M-105.62 186.18h897.67v139.64h-897.67z' }),
      _react2.default.createElement('path', { d: 'M-105.62.003h249.35v186.34h-249.35zM293.35 325.66h498.7V512h-498.7zm0-325.658h498.7v186.34h-498.7zM-105.62 325.66h249.35V512h-249.35z' }),
      _react2.default.createElement('path', { d: 'M143.57 0h149.94v512H143.57z' }),
      _react2.default.createElement('path', { d: 'M-105.62.003h249.35v186.34h-249.35zM293.35 325.66h498.7V512h-498.7zm0-325.658h498.7v186.34h-498.7z' })
    )
  );
};
Fi = (0, _pure2.default)(Fi);
Fi.displayName = 'Fi';

exports.default = Fi;
//# sourceMappingURL=fi.js.map