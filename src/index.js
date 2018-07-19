import { debuglog } from 'util'

const LOG = debuglog('debugger-report')

/**
 * A package to reproduce a bug in VS Code when debugger opens incorrect file.
 * @param {Config} config Configuration object.
 * @param {string} config.type The type.
 */
export default async function debuggerReport(config = {}) {
  const {
    type,
  } = config
  LOG('debugger-report called with %s', type)
  return type
}

/**
 * @typedef {Object} Config
 * @property {string} type The type.
 */
