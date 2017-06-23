/**
 * @file model utils
 * @author lanmingming@meituan.com
 * @date
 */

let isMatch = (model, matchs) => {
    return Object.keys(matchs).every(
        key => matchs[key] === model[key]
    )
}

let findStorysByKeys = (models, matchs) => {

    return models.find(item => isMatch(item.meta, matchs))
}

let matchStorys = (updateList = [], currList = []) => {
    if (updateList.length !== currList.length) {
        return false
    }

    return updateList.every((item, index) => {
        return item.text === currList[index].text
    })
}

module.exports = {
    findStorysByKeys,
    matchStorys
}