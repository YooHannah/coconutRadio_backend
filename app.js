
const Koa = require('koa');
const router = require('koa-router')();
const bodyParser= require('koa-bodyparser');
const controller = require('./controller');
const rest = require('./rest');
const fs = require('fs');
const https = require('https');
const http = require('http');

const app = new Koa();

var options = {
    key: fs.readFileSync('./ssl/214645895910665.key'),
    cert: fs.readFileSync('./ssl/214645895910665.pem')
};

app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

// parse request body:
app.use(bodyParser());

// bind .rest() for ctx:
app.use(rest.restify());

// add controllers:
app.use(controller());

// 在端口3000监听:
http.createServer(app.callback()).listen(80);
https.createServer(options, app.callback()).listen(443);
console.log('server is running....');