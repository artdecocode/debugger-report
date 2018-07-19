"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = debuggerReport;

var _util = require("util");

const LOG = (0, _util.debuglog)('debugger-report');
/**
 * A package to reproduce a bug in VS Code when debugger opens incorrect file.
 * @param {Config} config Configuration object.
 * @param {string} config.type The type.
 */

async function debuggerReport(config = {}) {
  const {
    type
  } = config;
  LOG('debugger-report called with %s', type);
  return type;
}
/**
 * @typedef {Object} Config
 * @property {string} type The type.
 */
//# sourceMappingURL=index.js.map