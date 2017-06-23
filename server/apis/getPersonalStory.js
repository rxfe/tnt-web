/**
 * @file personal story for chart
 */

let { getStory } = require('../models')

let querystring = require('querystring')

module.exports = function () {

    // console.log(querystring.parse(this.querystring))

    let {
        author,
        project,
        version
    } = querystring.parse(this.querystring);

    let story = getStory({ author, project, version })

    if (story) {
        this.body = {
            error: 0,
            data: story
        }
    }
    else {
        this.body = {
            error: 0,
            msg: '没有找到相关story'
        }
    }
}