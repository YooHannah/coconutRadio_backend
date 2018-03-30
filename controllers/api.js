// const products = require('../products');

const APIError = require('../rest').APIError;

module.exports = {
     'GET /': async (ctx,next) =>{
        console.log(ctx.request.body);
        let p = {data:'ok',color:'red'};
        ctx.rest(p)
    }
    'POST /api/userInfo': async (ctx,next) =>{
        console.log(ctx.request.body);
        let p = {data:'ok',color:'red'};
        ctx.rest(p)
    }
};