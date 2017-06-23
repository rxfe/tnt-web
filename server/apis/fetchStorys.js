/**
 * @file fetch storys
 */

const { fetchStorys } = require('../models')

module.exports = function () {
    let storyList = JSON.parse(fetchStorys())

    this.body = {
        errorno: 0,
        status: 0,
        storys: storyList
    }
}