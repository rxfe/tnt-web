/**
 * @file get group storys
 */

const { filterStorys } = require('../models')

const storys = require('../test/storys')

const querystring = require('querystring')

const compute = function (storyGroup) {

    return storyGroup.reduce((acc, item) => {
        let meta = item.meta
        let baseDate = new Date(meta.baseTime)
        let totalHours = meta.totalHours

        let duringDay = Math.ceil(totalHours / 8)

        baseDate.setDate(baseDate.getDate() + duringDay)

        let endTime = baseDate.getTime()
        let baseTime = meta.baseTime

        if (endTime > acc.endTime) {
            acc.endTime = endTime
        }
        if (baseTime < acc.baseTime) {
            acc.baseTime = baseTime
        }
        return acc
    }, {
        baseTime: Infinity,
        endTime: 0
    })
}

module.exports = function () {

    // console.log(querystring.parse(this.querystring))

    let {
        project,
        version
    } = querystring.parse(this.querystring);

    // let storys = filterStorys({ project, version })
    // console.log(storys.data)

    let { baseTime, endTime } = compute(storys.data)

    this.body = {
        errno: 0,
        data: {
            storys,
            baseTime,
            endTime
        }
    }
}