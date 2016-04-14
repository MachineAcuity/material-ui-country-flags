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

var Cu = function Cu(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement(
        'clipPath',
        { id: 'a' },
        _react2.default.createElement('path', { fillOpacity: '.67', d: 'M-32 0h682.67v512H-32z' })
      )
    ),
    _react2.default.createElement(
      'g',
      { 'fill-rule': 'evenodd', 'clip-path': 'url(#a)', transform: 'translate(30) scale(.94)' },
      _react2.default.createElement('path', { d: 'M-32 0h768v512H-32z' }),
      _react2.default.createElement('path', { d: 'M-32 102.4h768v102.4H-32zm0 204.8h768v102.4H-32z' }),
      _react2.default.createElement('path', { d: 'M-32 0l440.69 255.67L-32 511.01V0z' }),
      _react2.default.createElement('path', { d: 'M161.75 325.47l-47.447-35.432-47.214 35.78 17.56-58.144-47.13-35.904 58.306-.5 18.084-57.97 18.472 57.836 58.305.077-46.886 36.243 17.948 58.016z' })
    )
  );
};
Cu = (0, _pure2.default)(Cu);
Cu.displayName = 'Cu';

exports.default = Cu;
//# sourceMappingURL=cu.js.map