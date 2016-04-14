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

var Lr = function Lr(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement(
        'clipPath',
        { id: 'a' },
        _react2.default.createElement('path', { fillOpacity: '.67', d: 'M0 0h682.67v512H0z' })
      )
    ),
    _react2.default.createElement(
      'g',
      { 'clip-path': 'url(#a)', 'fill-rule': 'evenodd', transform: 'scale(.9375)' },
      _react2.default.createElement('path', { d: 'M0 .084h767.87v511.92H0z' }),
      _react2.default.createElement('path', { d: 'M0 0h232.74v232.75H0z' }),
      _react2.default.createElement('path', { d: 'M0 464.87h767.89v47.127H0z' }),
      _react2.default.createElement('path', { d: 'M0 465.43h767.89v46.574H0zM0 372.52h767.89v46.21H0zM0 279.26h765.96v46.7H0zM232.67.055h535.17v46.494H232.67zM232.67 186.06h535.17v46.796H232.67zM232.67 93.361h535.17v46.494H232.67z' }),
      _react2.default.createElement('path', { d: 'M166.35 177.47l-50.71-30.98-50.465 31.29 18.769-50.85-50.373-31.394 62.321-.438 19.328-50.691 19.744 50.574 62.321.067-50.115 31.693 19.184 50.732z' })
    )
  );
};
Lr = (0, _pure2.default)(Lr);
Lr.displayName = 'Lr';

exports.default = Lr;
//# sourceMappingURL=lr.js.map