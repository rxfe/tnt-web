/**
 * @file createStory
 * @author lanmingming@meituan.com
 */

const fs = require('fs')
const path = require('path')
const jsonfile = require('jsonfile')
const DATAPATH = path.join(__dirname, '../data/selectedStoryList.md')

const { findStoryByKeys } = require('./utils')

module.exports = (model) => {

    model = JSON.parse(model)

    let isExit = fs.existsSync(DATAPATH)
    let storysModel = null
    if (isExit) {
        storysModel = jsonfile.readFileSync(DATAPATH)
    }
    else {
        storysModel = {
            allStorys: []
        }
    }
    let meta = {
        project: model.projectName,
        version: model.version,
        author: model.author,
        storys: model.storys
    }

    let matchs = {
        author: model.author,
        project: model.projectName,
        version: model.version
    }
    let allStorys = storysModel.allStorys

    let matchStory = findStoryByKeys(allStorys, matchs)

    if (matchStory) {
        matchStory.storys = model.storys
    }
    else {
        allStorys.push({ meta })
    }

    jsonfile.writeFileSync(DATAPATH, storysModel)
}