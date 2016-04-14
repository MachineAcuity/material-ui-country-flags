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

var Rw = function Rw(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M0 0h640v480H0z' }),
    _react2.default.createElement('path', { d: 'M0 0h640v360H0z' }),
    _react2.default.createElement('path', { d: 'M0 0h640v240H0z' }),
    _react2.default.createElement(
      'g',
      { transform: 'translate(511 125.4) scale(.66667)' },
      _react2.default.createElement(
        'g',
        { id: 'b' },
        _react2.default.createElement('path', { id: 'a', d: 'M116.1 0L35.692 4.7l76.452 25.35L33.26 13.776l67.286 44.273L28.56 21.915l53.535 60.18-60.18-53.534 36.135 71.986L13.777 33.26l16.272 78.884L4.7 35.692 0 116.1-1-1z' }),
        _react2.default.createElement('use', { height: '100%', width: '100%', transform: 'scale(1 -1)' })
      ),
      _react2.default.createElement('use', { height: '100%', width: '100%', transform: 'scale(-1 1)' }),
      _react2.default.createElement('circle', { r: '34.3', stroke: '#00a1de', 'stroke-width': '3.4' })
    )
  );
};
Rw = (0, _pure2.default)(Rw);
Rw.displayName = 'Rw';

exports.default = Rw;
//# sourceMappingURL=rw.js.map