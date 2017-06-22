/**
 * @file demo
 * @author lanmingming@meituan.com
 * @date
 */

const fs = require('fs')
const path = require('path')

const DATAPATH = path.join(__dirname, '../data/demo.md')
module.exports = () => {
  console.log(DATAPATH)
  fs.writeFileSync(DATAPATH, 'hello world')
}
