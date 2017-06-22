/**
 * @file demo
 * @author lanmingming@meituan.com
 * @date
 */

const { demo } = require('../models')

module.exports = function () {
  demo()
  this.body = this.req.url
}
