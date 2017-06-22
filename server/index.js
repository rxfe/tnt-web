/**
 * @file server entry
 * @author lanmingming@meituan.com
 * @date 2017-6
 */

const Koa = require('koa')

const koaStatic = require('koa-static')
const cors = require('koa-cors')
const koaBody = require('koa-body')
const router = require('./apis/index')
const path = require('path')

const app = new Koa()

app.use(cors())
app.use(koaBody())
console.log(path.join(__dirname, '/dist'))
app.use(koaStatic(path.join(__dirname, '/dist')))
app.use(router)

app.listen(3000)
