/**
 * @file createStory
 * @author lanmingming@meituan.com
 */

const fs = require('fs')
const path = require('path')
const jsonfile = require('jsonfile')
const DATAPATH = path.join(__dirname, '../data/selectedStoryList.md')

const { findStorysByKeys, matchStorys } = require('./utils')

const KEYERROR = 0
const NOSTORY = 1
const STORYCHANGE = 2
const SUCCESS = 3



module.exports = (model) => {
    // 1. meta author version project
    // 2. story
    let isExit = fs.existsSync(DATAPATH)
    
    if (!isExit) {
        return KEYERROR
    }

    let storysModel = jsonfile.readFileSync(DATAPATH)


    let matchs = {
        author: model.meta.author,
        project: model.meta.project,
        version: model.meta.version
    }
    // console.log(matchs)

    let allStorys = storysModel.allStorys

    let matchStory = findStorysByKeys(allStorys, matchs)

    if (!matchStory) {
        return NOSTORY
    }

    // 如果有领取story， 那么去看rd有没有更改story
    let updateStorys = model.meta.storys
    let serveStorys = matchStory.meta.storys

    let shouldUpdate = matchStorys(updateStorys, serveStorys)

    if (!shouldUpdate) {
        return STORYCHANGE
    }
    let replaceIndex = allStorys.indexOf(matchStory)
    storysModel.allStorys[replaceIndex] = model

    jsonfile.writeFileSync(DATAPATH, storysModel)
    return SUCCESS
}