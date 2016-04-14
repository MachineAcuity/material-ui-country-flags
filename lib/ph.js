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

var Ph = function Ph(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M0 0h640v240H0z' }),
    _react2.default.createElement('path', { d: 'M0 240h640v240H0z' }),
    _react2.default.createElement('path', { d: 'M415.692 240L0 480V0' }),
    _react2.default.createElement(
      'g',
      { transform: 'translate(149.333 240) scale(5.33333)' },
      _react2.default.createElement('circle', { r: '9' }),
      _react2.default.createElement(
        'g',
        { id: 'd' },
        _react2.default.createElement(
          'g',
          { id: 'c' },
          _react2.default.createElement(
            'g',
            { id: 'b' },
            _react2.default.createElement('path', { d: 'M-1 0l.062.062L0 0l-.938-.062z', transform: 'scale(19)' }),
            _react2.default.createElement('path', { id: 'a', d: 'M-.884.116l.05.05L0 0z', transform: 'scale(19.2381)' }),
            _react2.default.createElement('use', { height: '100%', width: '100%', transform: 'scale(1 -1)' })
          ),
          _react2.default.createElement('use', { height: '100%', width: '100%', transform: 'rotate(45)' })
        ),
        _react2.default.createElement('use', { height: '100%', width: '100%', transform: 'rotate(90)' })
      ),
      _react2.default.createElement('use', { height: '100%', width: '100%', transform: 'scale(-1)' }),
      _react2.default.createElement(
        'g',
        { transform: 'translate(-2.02)' },
        _react2.default.createElement(
          'g',
          { id: 'f', transform: 'translate(37.962)' },
          _react2.default.createElement('path', { id: 'e', d: 'M5 0L1.618 1.176l-.073 3.58-2.163-2.854-3.427 1.037L-2 0z' }),
          _react2.default.createElement('use', { height: '100%', width: '100%', transform: 'scale(1 -1)' })
        ),
        _react2.default.createElement('use', { height: '100%', width: '100%', transform: 'rotate(120)' }),
        _react2.default.createElement('use', { height: '100%', width: '100%', transform: 'rotate(-120)' })
      )
    )
  );
};
Ph = (0, _pure2.default)(Ph);
Ph.displayName = 'Ph';

exports.default = Ph;
//# sourceMappingURL=ph.js.map