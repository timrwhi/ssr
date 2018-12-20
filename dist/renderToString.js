"use strict";

var _react = _interopRequireDefault(require("react"));

var _server = require("react-dom/server");

var _app = _interopRequireDefault(require("./components/app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function render(initialState) {
  return (0, _server.renderToString)(_react.default.createElement(_app.default, null));
};