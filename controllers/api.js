// const products = require('../products');

const APIError = require('../rest').APIError;

module.exports = {
     'GET /api': async (ctx,next) =>{
        console.log(ctx.request.body);
        let p = {data:'ok',color:'red'};
        ctx.rest(p)
    },
    'GET /api/userInfo': async (ctx,next) =>{
        console.log(ctx.request.body);
        let p = {data:'ok',color:'red'};
        ctx.rest(p)
    }
};