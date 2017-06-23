/**
 * @file apis entry
 * @author lanmingming@meituan.com
 * @date
 */

const createStorys = require('./createStorys')
const fetchStorys = require('./fetchStorys')
const createSelectedStorys = require('./createSelectedStory')
const updateSelectedStorys = require('./updateSelectedStory')

module.exports = function * (next) {
  let url = this.req.url

  if (url === '/createStorys') {
    //console.log(this.request.body)
    createStorys.call(this)
  }

  if (url === '/fetchStorys') {
    fetchStorys.call(this)
  }

  if (url === '/createSelectedStorys') {
    createSelectedStorys.call(this)
  }

  if (url === '/updateSelectedStory') {
    updateSelectedStorys.call(this)
  }
}
