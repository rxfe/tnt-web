/**
 * @file createStory
 * @author lanmingming@meituan.com
 */

const fs = require('fs')
const path = require('path')
const jsonfile = require('jsonfile')
const DATAPATH = path.join(__dirname, '../data/selectedStoryList.md')

const { findStorysByKeys, matchStorys } = require('./utils')


module.exports = (model) => {
    // 1. meta author version project
    // 2. story
    let isExit = fs.existsSync(DATAPATH)
    
    if (!isExit) {
        return {
            errno: 1,
            msg: '账号或者项目名或者迭代版本错误'
        }
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
        return {
            errno: 1,
            msg: '请先去系统上选择需要做的storys'
        }
    }

    // 如果有领取story， 那么去看rd有没有更改story
    let updateStorys = model.meta.storys
    let serveStorys = matchStory.meta.storys

    let shouldUpdate = matchStorys(updateStorys, serveStorys)

    if (!shouldUpdate) {
        return {
            errno: 1,
            msg: 'story有改动，请和pm确认后修改'
        }
    }
    let replaceIndex = allStorys.indexOf(matchStory)
    storysModel.allStorys[replaceIndex] = model
    jsonfile.writeFileSync(DATAPATH, storysModel)
    return {
        errno: 0,
        msg: '更新成功'
    }
}