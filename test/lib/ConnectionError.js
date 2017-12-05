'use strict'
const assert = require('assert')
const ConnectionError = require('../../lib/ConnectionError')

describe(ConnectionError.name, () => {
  describe('constructor', () => {
    it('set properties', () => {
      const message = 'error'
      const name = 'name'
      const code = 401
      const error = new ConnectionError(message, name, code)
      assert.ok(error)
      assert.deepEqual(error.message, message)
      assert.deepEqual(error.name, name)
      assert.deepEqual(error.code, code)
    })
  })
})
