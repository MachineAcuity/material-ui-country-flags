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

var Sg = function Sg(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement(
        'clipPath',
        { id: 'a' },
        _react2.default.createElement('path', { fillOpacity: '.67', d: 'M0 0h640v480H0z' })
      )
    ),
    _react2.default.createElement(
      'g',
      { 'fill-rule': 'evenodd', 'clip-path': 'url(#a)' },
      _react2.default.createElement('path', { d: 'M-20 0h720v480H-20z' }),
      _react2.default.createElement('path', { d: 'M-20 0h720v240H-20z' }),
      _react2.default.createElement('path', { d: 'M146.05 40.227c-33.243 7.622-57.944 32.237-64.927 65.701-9.488 45.469 20.124 89.99 65.687 99.488-46.031 13.125-93.59-13.332-106.594-58.932-12.996-45.6 13.46-93.16 59.063-106.162 16.007-4.565 30.745-4.594 46.773-.095z' }),
      _react2.default.createElement('path', { d: 'M132.98 109.953l4.894 15.119-12.932-9.23-12.87 9.317 4.783-15.144-12.833-9.354 15.876-.137 4.932-15.106 5.031 15.069 15.889.025zM150.539 162.012l4.894 15.119-12.932-9.23-12.87 9.317 4.783-15.143-12.833-9.355 15.877-.137 4.931-15.106 5.032 15.07 15.888.024zM208.964 161.637l4.894 15.119-12.932-9.23-12.87 9.317 4.783-15.143-12.833-9.355 15.877-.137 4.931-15.106 5.032 15.07 15.888.024zM226.392 110l4.894 15.118-12.932-9.23-12.87 9.317 4.783-15.143-12.833-9.354 15.877-.137 4.932-15.106 5.03 15.069 15.89.025zM180.136 75.744l4.894 15.118-12.932-9.23-12.87 9.317 4.783-15.143-12.833-9.355 15.876-.136 4.932-15.106 5.032 15.068 15.888.025z' })
    )
  );
};
Sg = (0, _pure2.default)(Sg);
Sg.displayName = 'Sg';

exports.default = Sg;
//# sourceMappingURL=sg.js.map