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

let findStoryByKeys = (models, matchs) => {

    return models.find(item => isMatch(item.meta, matchs))
}

let filterStorysByKeys = (models, matchs) => {
    return models.filter(item => isMatch(item.meta, matchs))
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
    findStoryByKeys,
    matchStorys,
    filterStorysByKeys
}