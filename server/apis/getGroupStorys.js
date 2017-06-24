/**
 * @file get group storys
 */

const { filterStorys } = require('../models')
const { computeGroupTime } = require('./utils')

// const storys = require('../test/storys')

const querystring = require('querystring')



module.exports = function () {

    // console.log(querystring.parse(this.querystring))

    let {
        project,
        version
    } = querystring.parse(this.querystring);

    let storys = filterStorys({ project, version })

    let { baseTime, endTime } = computeGroupTime(storys.data)

    this.body = {
        errno: 0,
        data: {
            storys,
            baseTime,
            endTime
        }
    }
}