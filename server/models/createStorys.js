/**
 * @file createStory
 * @author lanmingming@meituan.com
 */

const fs = require('fs')
const path = require('path')
const DATAPATH = path.join(__dirname, '../data/storyList.md')


module.exports = (model) => {
    fs.writeFileSync(DATAPATH, model)
}