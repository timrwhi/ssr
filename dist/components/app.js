"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default() {
  return _react.default.createElement("div", {
    onClick: function onClick() {
      return alert('this handler was attached client side');
    }
  }, "CLICK HERE");
};

exports.default = _default;