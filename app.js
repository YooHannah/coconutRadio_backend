
const Koa = require('koa');
const router = require('koa-router')();
const bodyParser= require('koa-bodyparser');
const controller = require('./controller');
const rest = require('./rest');

const app = new Koa();

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
app.listen(8080);
console.log('app started at port 8080...');