/**
 * @file utils for apis
 */


const DADY_HOURS_RATE = 8

const dayTransfromHours = (str = '0h') => {
    let match = str.match(/(\d+)(h|d)$/)
    let type = match[2]
    let value = Number(match[1])
    return type === 'd' ? value * DADY_HOURS_RATE : value
}

const getMaxHours = (storys = []) => {
    return storys.reduce(
        (sacc, story) => {
            let tasks = story.tasks || []
            // console.log(tasks)
            let tasksHours = tasks.reduce((tacc, task) => {
                let timing = task.timing || []
                let maxIndex = timing.length - 1
                let maxVaue = dayTransfromHours(timing[maxIndex])
                
                // console.log(maxVaue)
                tacc = tacc + maxVaue
                return tacc
            }, 0)
            // console.log(tasksHours)
            sacc = sacc + tasksHours
            return sacc
        },
        0
    )
}

const timeToHours = function (eTime, sTime) {
    let days = (eTime - sTime) / (24 * 60 * 60 * 1000) + 1
    return days * DADY_HOURS_RATE
}

const computePersonalTime = function(storyModel) {
    let meta = storyModel.meta
    let storys = storyModel.storys
    
    // baseTime is start time of this project version
    // totalHours is max hours of this project version
    // story meta date must has start date
    
    let dateList = meta.storys.map(item => item.date.split('~'))

    console.log(dateList)

    let baseTime = dateList.reduce((acc, item) => {
        let startDate = new Date(item[0])
        let sTime = startDate.getTime()
        if (sTime < acc) {
            acc = sTime
        }
        return acc
    }, Infinity)

    let hasAuto = dateList.some(date => !date[1])
    let totalHours = 0
    if (hasAuto) {
        // 取task里的的timing来进行估算
        totalHours = getMaxHours(storys)
    }
    else {
        // 最大值减去最小值
        let maxTime = dateList.reduce((acc, item) => {
            let endDate = new Date(item[1])
            let eTime = endDate.getTime()
            if (eTime > acc) {
                acc = eTime
            }
            return acc
        }, 0)

        totalHours = timeToHours(maxTime, baseTime)
    }
    console.log('base: ', baseTime)
    console.log('hour: ', totalHours)
    return {
        baseTime,
        totalHours
    }
}


const computeGroupTime = function (storysGroup) {

    return storysGroup.reduce((acc, item) => {
        let meta = item.meta
        let baseDate = new Date(meta.baseTime)
        let totalHours = meta.totalHours

        let duringDay = Math.ceil(totalHours / DADY_HOURS_RATE)

        baseDate.setDate(baseDate.getDate() + duringDay)

        let endTime = baseDate.getTime()
        let baseTime = meta.baseTime

        if (endTime > acc.endTime) {
            acc.endTime = endTime
        }
        if (baseTime < acc.baseTime) {
            acc.baseTime = baseTime
        }
        return acc
    }, {
        baseTime: Infinity,
        endTime: 0
    })
}


module.exports = {
    computePersonalTime,
    computeGroupTime
}