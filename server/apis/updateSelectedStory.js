/**
 * @file fetch storys
 */

const { updateSelectedStory } = require('../models')

module.exports = function () {
    let body = this.request.body
    updateSelectedStory()
    this.body = {
        errorno: 0,
        status: 0,
        storys: storyList
    }
}