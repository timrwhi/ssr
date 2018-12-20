"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _app = _interopRequireDefault(require("./components/app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * If you call ReactDOM.hydrate() on a node that already has this server-rendered markup,
 * React will preserve it and only attach event handlers, allowing you to have a
 * very performant first-load experience.
 */
(0, _reactDom.hydrate)(_react.default.createElement(_app.default, null), document.querySelector('body'));