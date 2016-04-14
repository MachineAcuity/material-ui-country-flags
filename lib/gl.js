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

var Gl = function Gl(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement(
        'clipPath',
        { id: 'a' },
        _react2.default.createElement('path', { fillOpacity: '.67', d: 'M-62.883 0h682.67v512h-682.67z' })
      )
    ),
    _react2.default.createElement(
      'g',
      { 'fill-rule': 'evenodd', 'clip-path': 'url(#a)', transform: 'translate(58.95) scale(.94)' },
      _react2.default.createElement('path', { d: 'M661.1 512h-766.65V0H661.1z' }),
      _react2.default.createElement('path', { d: 'M661.1 512h-766.65V256.45H661.1zM347.57 255.85c0-86.577-70.184-156.766-156.763-156.766-86.576 0-156.765 70.185-156.765 156.765' }),
      _react2.default.createElement('path', { d: 'M347.57 255.75c0 86.577-70.184 156.766-156.763 156.766-86.576 0-156.765-70.185-156.765-156.765' })
    )
  );
};
Gl = (0, _pure2.default)(Gl);
Gl.displayName = 'Gl';

exports.default = Gl;
//# sourceMappingURL=gl.js.map