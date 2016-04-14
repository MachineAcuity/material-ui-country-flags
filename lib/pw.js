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

var Pw = function Pw(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement(
        'clipPath',
        { id: 'a' },
        _react2.default.createElement('path', { fillOpacity: '.67', d: 'M-70.28 0h640v480h-640z' })
      )
    ),
    _react2.default.createElement(
      'g',
      { 'fill-rule': 'evenodd', 'clip-path': 'url(#a)', transform: 'translate(70.28)', 'stroke-width': '1pt' },
      _react2.default.createElement('path', { d: 'M-173.44 0h846.32v480h-846.32z' }),
      _react2.default.createElement('path', { d: 'M335.633 232.117a135.876 130.111 0 1 1-271.752 0 135.876 130.111 0 1 1 271.752 0z' })
    )
  );
};
Pw = (0, _pure2.default)(Pw);
Pw.displayName = 'Pw';

exports.default = Pw;
//# sourceMappingURL=pw.js.map