/**
 * @file createStory
 * @author lanmingming@meituan.com
 */

const { createSelectedStorys } = require('../models')


module.exports = function () {
    let body = this.request.body
    createSelectedStorys(body)
    this.body = {
        errorno: 0,
        status: 0,
        msg: '创建成功'
    }
}