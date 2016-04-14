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

var Wf = function Wf(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement(
      'g',
      { 'fill-rule': 'evenodd', 'stroke-width': '1pt' },
      _react2.default.createElement('path', { d: 'M0-.001h640v480H0z' }),
      _react2.default.createElement('path', { d: 'M0-.001h213.337v480H0z' }),
      _react2.default.createElement('path', { d: 'M426.662-.001H640v480H426.662z' })
    )
  );
};
Wf = (0, _pure2.default)(Wf);
Wf.displayName = 'Wf';

exports.default = Wf;
//# sourceMappingURL=wf.js.map