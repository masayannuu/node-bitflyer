const yaml = require('js-yaml')
const fs = require('fs')

/**
 * API model class from swagger
 * @type {[type]}
 */
class Swagger {
  /**
   *
   * @return {[Object]}
   */
  constructor () {
    this.spec = this.load()
  }

  /**
   * Get API hosts
   * @type {String}
   */
  get host () {
    const server = this.spec['servers'][0]
    return server['url'].replace(/{domain}/, server['variables']['domain']['default']).replace(/{version}/, server['variables']['version']['default'])
   }

   /**
    * Get default API version
    * @return {[String]}
    */
   get version () {
     return this.spec['servers'][0]['variables']['version']['default']
   }

   /**
    * Get all paths from swagger spec
    * @return {[type]} [description]
    */
   get paths () {
     return Object.keys(this.spec['paths'])
   }

   /**
    * Get path object
    * @param  {[String]} path
    * @return {[Object]}
    */
   getPathObject (path) {
     return this.spec['paths'][path]
   }

  /**
   * Load swagger.yaml
   * @return {[Object]} swagger specs
   */
  load () {
    try {
      return yaml.safeLoad(fs.readFileSync(`${__dirname}/../apis/v1/swagger.yaml`, 'utf8'))
    } catch(e) {
      throw new Error(e)
    }
  }
}
module.exports = Swagger
