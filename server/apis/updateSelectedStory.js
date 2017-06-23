/**
 * @file fetch storys
 */

const { updateSelectedStorys } = require('../models')

module.exports = function () {
    let body = this.request.body
    console.log(JSON.stringify(body, null, 2))
    let res = updateSelectedStorys(body)
    console.log('---------------')
    console.log(res)

    this.body = updateSelectedStorys(body)
}