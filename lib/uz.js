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

var Uz = function Uz(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M0 320h640v160H0z' }),
    _react2.default.createElement('path', { d: 'M0 0h640v160H0z' }),
    _react2.default.createElement('path', { d: 'M0 153.6h640v172.8H0z' }),
    _react2.default.createElement('path', { d: 'M0 163.2h640v153.6H0z' }),
    _react2.default.createElement('circle', { cx: '134.4', cy: '76.8', r: '57.6' }),
    _react2.default.createElement('circle', { cx: '153.6', cy: '76.8', r: '57.6' }),
    _react2.default.createElement(
      'g',
      { transform: 'matrix(1.92 0 0 1.92 261.12 122.88)' },
      _react2.default.createElement(
        'g',
        { id: 'e' },
        _react2.default.createElement(
          'g',
          { id: 'd' },
          _react2.default.createElement(
            'g',
            { id: 'c' },
            _react2.default.createElement(
              'g',
              { id: 'b' },
              _react2.default.createElement('path', { id: 'a', d: 'M0-6L-1.854-.294 1 .633' }),
              _react2.default.createElement('use', { height: '100%', width: '100%', transform: 'scale(-1 1)' })
            ),
            _react2.default.createElement('use', { height: '100%', width: '100%', transform: 'rotate(72)' })
          ),
          _react2.default.createElement('use', { height: '100%', width: '100%', transform: 'rotate(-72)' }),
          _react2.default.createElement('use', { height: '100%', width: '100%', transform: 'rotate(144)' })
        ),
        _react2.default.createElement('use', { height: '100%', width: '100%', y: '-24' }),
        _react2.default.createElement('use', { height: '100%', width: '100%', y: '-48' })
      ),
      _react2.default.createElement('use', { height: '100%', width: '100%', x: '24' }),
      _react2.default.createElement('use', { height: '100%', width: '100%', x: '48' }),
      _react2.default.createElement('use', { height: '100%', width: '100%', x: '-48' }),
      _react2.default.createElement('use', { height: '100%', width: '100%', x: '-24' }),
      _react2.default.createElement('use', { height: '100%', width: '100%', x: '-24', y: '-24' })
    )
  );
};
Uz = (0, _pure2.default)(Uz);
Uz.displayName = 'Uz';

exports.default = Uz;
//# sourceMappingURL=uz.js.map