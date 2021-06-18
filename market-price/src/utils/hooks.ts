import type { Debugger } from 'debug'
import type { Hooks } from 'ky'

const createDebugHooks = (debug: Debugger): Hooks => {
  return {
    beforeRequest: [
      (request) => {
        debug(request.url)
      },
    ],
    afterResponse: [
      (request) => {
        debug(request.url)
      },
    ],
  }
}

export { createDebugHooks }
