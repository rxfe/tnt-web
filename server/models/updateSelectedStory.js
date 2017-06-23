/**
 * @file createStory
 * @author lanmingming@meituan.com
 */

const fs = require('fs')
const path = require('path')
const jsonfile = require('jsonfile')
const DATAPATH = path.join(__dirname, '../data/selectedStoryList.md')

const { findStorysByKeys, matchStorys } = require('./utils')

// {
//     errno: 0,
//     msg: ''
// }

module.exports = (model) => {
    // 1. meta author version project
    // 2. story



    let isExit = fs.existsSync(DATAPATH)

    if (!isExit) {
        return {
            errno: 1,
            msg: '请先去系统上选择需要做的story'
        }
    }

    let storysModel = jsonfile.readFileSync(DATAPATH)



    let matchs = {
        author: model.author,
        project: model.projectName,
        version: model.version
    }


    let allStorys = storysModel.allStorys

    let matchStory = findStorysByKeys(allStorys, matchs)

    if (!matchStory) {
        return {
            errno: 1,
            msg: '请先去系统上选择需要做的storys'
        }
    }
    else {
        // 如果有领取story， 那么去看rd有没有更改story
        let updateStorys = model.meta.storys
        let serveStorys = matchStory.meta.storys
        let shouldUpdate = matchStorys(updateStorys, serveStorys)

        if (shouldUpdate) {
            matchStory = model
        }
    }
    jsonfile.writeFileSync(DATAPATH, storysModel)
}