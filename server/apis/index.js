/**
 * @file apis entry
 * @author lanmingming@meituan.com
 * @date
 */

const demo = require('./demo')

module.exports = function * (next) {
  let url = this.req.url
  if (url === '/demo') {
    demo.call(this)
  }
}
