/**
 * @file api
 * @author lanmingming@meituan.com
 */

const HOST = 'http://localhost:3000'

export default {
    createStorys: HOST + '/createStorys',
    fetchStorys: HOST + '/fetchStorys',
    createSelectedStorys: HOST + '/createSelectedStorys',
    fetchPersonalStory: HOST + '/getPersonalStory'
}