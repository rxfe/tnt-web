/**
 * @file fetch list
 */

const fs = require('fs')
const path = require('path')
const DATAPATH = path.join(__dirname, '../data/storyList.md')

module.exports = (model) => {
    return fs.readFileSync(DATAPATH, 'utf8')
}