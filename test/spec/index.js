import { equal, ok } from 'zoroaster/assert'
import Context from '../context'
import debuggerReport from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof debuggerReport, 'function')
  },
  async 'calls package without error'() {
    await debuggerReport()
  },
  async 'gets a link to the fixture'({ FIXTURE }) {
    const res = await debuggerReport({
      type: FIXTURE,
    })
    ok(res, FIXTURE)
  },
}

export default T
