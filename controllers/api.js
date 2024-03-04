// const products = require('../products');

const APIError = require('../rest').APIError;

module.exports = {
     'GET /api': async (ctx,next) =>{
        console.log(111);
        let p = {data:'ok',coslor:'blue'};
        ctx.rest(p)
    },
    'GET /api/userInfo': async (ctx,snext) =>{
        console.log(ctx.request.body);
        let p = {data:'ok',color:'red'};
        ctx.rest(p)
    }
};