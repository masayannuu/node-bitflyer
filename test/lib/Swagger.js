'use strict'
const assert = require('assert')
const Swagger = require('../../lib/Swagger')

const swagger = new Swagger()
const test_path = '/markets'

describe(Swagger.name, () => {
  describe('constructor', () => {
    it('set properties', () => {
      assert.ok(swagger.spec)
    })
  })

  describe('get host', () => {
    it('return host', () => {
      assert.deepEqual(swagger.host, 'https://api.bitflyer.jp/v1')
    })
  })

  describe('get version', () => {
    it('return host', () => {
      assert.deepEqual(swagger.version, 'v1')
    })
  })

  describe('get paths', () => {
    it('return paths array', () => {
      assert.deepEqual(swagger.paths[0], test_path)
    })
  })

  describe('getPathObject', () => {
    it('return path object', () => {
      assert.ok(swagger.getPathObject(test_path))
    })
  })

  describe('load', () => {
    it('return swagger specs', () => {
      assert.ok(swagger.load())
    })
  })
})
