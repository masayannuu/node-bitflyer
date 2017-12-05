/**
 * Custom Error
 * @type {[Object]}
 */
class ConnectionError extends Error {
  constructor (message, name, code) {
    super(message)
    this.name = name
    this.code = code
  }
}
module.exports = ConnectionError
