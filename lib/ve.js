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

var Ve = function Ve(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement(
        'g',
        { id: 'd', transform: 'translate(0 -36)' },
        _react2.default.createElement(
          'g',
          { id: 'c' },
          _react2.default.createElement(
            'g',
            { id: 'b' },
            _react2.default.createElement('path', { d: 'M0-5L-1.545-.245l2.853.927z', id: 'a' }),
            _react2.default.createElement('use', { transform: 'scale(-1 1)', width: '180', height: '120' })
          ),
          _react2.default.createElement('use', { transform: 'rotate(72)', width: '180', height: '120' })
        ),
        _react2.default.createElement('use', { transform: 'rotate(-72)', width: '180', height: '120' }),
        _react2.default.createElement('use', { transform: 'rotate(144)', width: '180', height: '120' })
      )
    ),
    _react2.default.createElement('path', { d: 'M0 0h128v96H0z' }),
    _react2.default.createElement('path', { d: 'M0 0h128v64H0z' }),
    _react2.default.createElement('path', { d: 'M0 0h128v32H0z' }),
    _react2.default.createElement(
      'g',
      { transform: 'matrix(.8 0 0 .8 64 67.2)' },
      _react2.default.createElement(
        'g',
        { id: 'f' },
        _react2.default.createElement(
          'g',
          { id: 'e' },
          _react2.default.createElement('use', { transform: 'rotate(10)', width: '180', height: '120' }),
          _react2.default.createElement('use', { transform: 'rotate(30)', width: '180', height: '120' })
        ),
        _react2.default.createElement('use', { transform: 'rotate(40)', width: '180', height: '120' })
      ),
      _react2.default.createElement('use', { transform: 'rotate(-80)', width: '180', height: '120' })
    )
  );
};
Ve = (0, _pure2.default)(Ve);
Ve.displayName = 'Ve';

exports.default = Ve;
//# sourceMappingURL=ve.js.map