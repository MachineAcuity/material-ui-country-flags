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

var Bs = function Bs(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement(
        'clipPath',
        { id: 'a' },
        _react2.default.createElement('path', { fillOpacity: '.67', d: 'M-12 0h640v480H-12z' })
      )
    ),
    _react2.default.createElement(
      'g',
      { 'fill-rule': 'evenodd', 'clip-path': 'url(#a)', transform: 'translate(12)' },
      _react2.default.createElement('path', { d: 'M968.53 480H-10.45V1.77h978.98z' }),
      _react2.default.createElement('path', { d: 'M968.53 344.48H-10.45V143.3h978.98z' }),
      _react2.default.createElement('path', { d: 'M968.53 480H-10.45V320.59h978.98zm0-318.69H-10.45V1.9h978.98z' }),
      _react2.default.createElement('path', { d: 'M-10.913 0c2.173 0 391.71 236.82 391.71 236.82l-392.8 242.38L-10.916 0z' })
    )
  );
};
Bs = (0, _pure2.default)(Bs);
Bs.displayName = 'Bs';

exports.default = Bs;
//# sourceMappingURL=bs.js.map