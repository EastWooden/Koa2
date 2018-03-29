const Koa = require('koa');
const app = new Koa();
app.use(async(ctx)=>{
  let url = ctx.url;
  //从request中接受Get请求
  let request = ctx.request;
  let req_query = request.query;
  let req_querystring = request.querystring;
  //从CTX 中GET请求
  let ctx_query = ctx.query;
  let ctx_quertstring = ctx.querystring;

  ctx.body = {
    url,
    req_query,
    req_querystring,
    ctx_query,
    ctx_quertstring,
  }
});
app.listen(3000);
console.log('[demo02] is running at port:3000');