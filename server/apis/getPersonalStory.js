/**
 * @file personal story for chart
 */

const { getStory } = require('../models')

const querystring = require('querystring')

const { computePersonalTime } = require('./utils')


module.exports = function () {

    // console.log(querystring.parse(this.querystring))

    let {
        author,
        project,
        version
    } = querystring.parse(this.querystring);

    let story = getStory({ author, project, version })

    if (story) {
        let { baseTime, totalHours } = computePersonalTime(story)
        story.meta = Object.assign(story.meta, {
            baseTime,
            totalHours
        })
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