/**
 * @file apis entry
 * @author lanmingming@meituan.com
 * @date
 */

const createStorys = require('./createStorys')
const fetchStorys = require('./fetchStorys')
const createSelectedStorys = require('./createSelectedStory')
const updateSelectedStorys = require('./updateSelectedStory')
const getPersonalStory = require('./getPersonalStory')
const getGroupStorys = require('./getGroupStorys')

module.exports = function * (next) {
  let path = this.path
  console.log('---------------------')
  console.log(path)
  console.log('---------------------')
  // pm create story
  if (path === '/createStorys') {
    //console.log(this.request.body)
    createStorys.call(this)
  }

  // rd get story list
  if (path === '/fetchStorys') {
    fetchStorys.call(this)
  }

  // rd select story
  if (path === '/createSelectedStorys') {
    createSelectedStorys.call(this)
  }

  // rd sync mrd story
  if (path === '/syncStory') {
    updateSelectedStorys.call(this)
  }

  // chart personal story
  if (path === '/getPersonalStory') {
    getPersonalStory.call(this)
  }

  // chart total stories
  if (path == '/getGroupStorys') {
    getGroupStorys.call(this)
  }
}
