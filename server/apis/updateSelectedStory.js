/**
 * @file fetch storys
 */

const { updateSelectedStorys } = require('../models')

module.exports = function () {
    let body = this.request.body
    console.log(JSON.stringify(body, null, 2))


    const resMap = {
        0: {
            errno: 1,
            msg: '账号或者项目名或者迭代版本错误'
        },

        1: {
            errno: 1,
            msg: '请先去系统上选择需要做的storys'
        },

        2: {
            errno: 1,
            msg: 'story有改动，请和pm确认后修改'
        },
        3: {
            errno: 0,
            msg: '更新成功'
        }
    }

    let res = resMap[updateSelectedStorys(body)]
    console.log(res)
    this.body = res
}