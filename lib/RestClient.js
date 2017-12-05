const request = require('request-promise')
const crypto = require('crypto')
const ConnectionError = require('./ConnectionError')
const Swagger = require('./Swagger')

/**
 * Client class of BitFlyer's RestAPI
 * SEE: https://lightning.bitflyer.jp/docs
 * NOTE: I skip the test, because need to handle secret tokens.
 * @type {[type]}
 */
class RestClient {
  /**
   *
   * @param  {[String]} key
   * @param  {[String]} secret
   */
  constructor (key, secret) {
    this._key = key || ''
    this._secret = secret || ''
    this._permission = ''
    this._swagger = new Swagger()
    this.createMethod()
  }

  /**
   * Create method from swagger spec
   */
  createMethod () {
    this._swagger.paths.forEach((path) => {
      const path_object = this._swagger.getPathObject(path)
      Object.keys(path_object).forEach((method) => {
        this[path_object[method]['operationId']] = this.createRequest(path, method)
      })
    })
  }

  /**
   * Create function for api request
   * @param  {[type]} operation
   * @return {[type]}
   */
  createRequest (path, method) {
    return async (params='') => {
      if (await this.isPermmitted(path)) {
        return await this.fetch(method.toUpperCase(), path, params)
      } else {
        return new ConnectionError('You don`t have permmision', 'unauthorized access', 401)
      }
    }
  }

  /**
   * Request endpoint
   * @param  {[String]}  method
   * @param  {[String]}  path
   * @param  {[Object]}  params
   * @return {Promise}
   */
  async fetch (method, path, params='') {
    const timestamp = Date.now().toString()
    const body = JSON.stringify(params)
    const text = timestamp + method + `/${this._swagger.version}${path}` + body
    const sign = crypto.createHmac('sha256', this._secret).update(text).digest('hex')

    const opts = {
      url: this._swagger.host + path,
      method: method,
      body: body,
      headers: {
          'ACCESS-KEY': this._key,
          'ACCESS-TIMESTAMP': timestamp,
          'ACCESS-SIGN': sign,
          'Content-Type': 'application/json'
      }
    }
    return await request(opts).catch((err) => new ConnectionError(err['message'], err['name'], err['statusCode']))
  }

  /**
   * Check permission
   * https://lightning.bitflyer.jp/docs?lang=en#get-api-key-permissions
   * @return {[Boolean]}
   */
  async isPermmitted (path) {
    if (this._permission === '') {
      if (this._key != '' && this._secret != '') {
        this._permission = await this.fetch('GET', '/me/getpermissions')
      } else {
        this._permission = []
      }
    }
    return this._permission.includes(`/${this._swagger.version}${path}`)
  }
}
module.exports = RestClient
