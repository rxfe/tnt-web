/**
 * @file filter
 */
const path = require('path')
const jsonfile = require('jsonfile')
const DATAPATH = path.join(__dirname, '../data/selectedStoryList.md')

const { filterStorysByKeys } = require('./utils')

module.exports = (keys) => {
    
    let storyModel = jsonfile.readFileSync(DATAPATH)
    
    let allStorys = storyModel.allStorys

    return filterStorysByKeys(allStorys, keys)
}