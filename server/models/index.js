/**
 * @file entry for models
 * @author lanmingming@meituan.com
 * @date
 */

const createStorys = require('./createStorys')
const fetchStorys = require('./fetchStorys')
const createSelectedStorys = require('./createSelectedStory')
const updateSelectedStorys = require('./updateSelectedStory')

module.exports = {
  createStorys,
  fetchStorys,
  createSelectedStorys
}
