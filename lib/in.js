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

var In = function In(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M0 0h640v160H0z' }),
    _react2.default.createElement('path', { d: 'M0 160h640v160H0z' }),
    _react2.default.createElement('path', { d: 'M0 320h640v160H0z' }),
    _react2.default.createElement(
      'g',
      { transform: 'matrix(3.2 0 0 3.2 320 240)' },
      _react2.default.createElement('circle', { r: '20' }),
      _react2.default.createElement('circle', { r: '17.5' }),
      _react2.default.createElement('circle', { r: '3.5' }),
      _react2.default.createElement(
        'g',
        { id: 'd' },
        _react2.default.createElement(
          'g',
          { id: 'c' },
          _react2.default.createElement(
            'g',
            { id: 'b' },
            _react2.default.createElement(
              'g',
              { id: 'a' },
              _react2.default.createElement('circle', { r: '.875', transform: 'rotate(7.5 -8.75 133.5)' }),
              _react2.default.createElement('path', { d: 'M0 17.5L.6 7 0 2l-.6 5L0 17.5z' })
            ),
            _react2.default.createElement('use', { height: '100%', width: '100%', transform: 'rotate(15)' })
          ),
          _react2.default.createElement('use', { height: '100%', width: '100%', transform: 'rotate(30)' })
        ),
        _react2.default.createElement('use', { height: '100%', width: '100%', transform: 'rotate(60)' })
      ),
      _react2.default.createElement('use', { height: '100%', width: '100%', transform: 'rotate(120)' }),
      _react2.default.createElement('use', { height: '100%', width: '100%', transform: 'rotate(-120)' })
    )
  );
};
In = (0, _pure2.default)(In);
In.displayName = 'In';

exports.default = In;
//# sourceMappingURL=in.js.map