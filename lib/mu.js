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

var Mu = function Mu(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement(
      'g',
      { 'fill-rule': 'evenodd', fillOpacity: '1' },
      _react2.default.createElement('path', { d: 'M0 360h640v120H0z' }),
      _react2.default.createElement('path', { d: 'M0 120h640v120H0z' }),
      _react2.default.createElement('path', { d: 'M0 0h640v120H0z' }),
      _react2.default.createElement('path', { d: 'M0 240h640v120H0z' })
    )
  );
};
Mu = (0, _pure2.default)(Mu);
Mu.displayName = 'Mu';

exports.default = Mu;
//# sourceMappingURL=mu.js.map