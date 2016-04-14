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

var Jo = function Jo(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement(
        'clipPath',
        { id: 'a' },
        _react2.default.createElement('path', { fillOpacity: '.67', d: 'M-117.82 0h682.67v512h-682.67z' })
      )
    ),
    _react2.default.createElement(
      'g',
      { 'clip-path': 'url(#a)', transform: 'translate(110.46) scale(.9375)' },
      _react2.default.createElement(
        'g',
        { 'fill-rule': 'evenodd', 'stroke-width': '1pt' },
        _react2.default.createElement('path', { d: 'M-117.82 0H906.182v170.667H-117.82z' }),
        _react2.default.createElement('path', { d: 'M-117.82 170.667H906.182v170.667H-117.82z' }),
        _react2.default.createElement('path', { d: 'M-117.82 341.334H906.182v170.667H-117.82z' }),
        _react2.default.createElement('path', { d: 'M-117.82 512.001l512.001-256L-117.82 0v512.001z' }),
        _react2.default.createElement('path', { d: 'M24.528 288.964l5.664-24.82H4.743l22.928-11.045-15.867-19.9 22.93 11.05 5.664-24.82 5.661 24.82 22.93-11.05-15.866 19.9 22.93 11.045H50.602l5.663 24.82-15.867-19.92z' })
      )
    )
  );
};
Jo = (0, _pure2.default)(Jo);
Jo.displayName = 'Jo';

exports.default = Jo;
//# sourceMappingURL=jo.js.map