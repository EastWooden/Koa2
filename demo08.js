// koa2中使用 cookie

const Koa = require('Koa');
const app = new Koa();

app.use(async(ctx)=>{
  if(ctx.url === '/index'){
    ctx.cookies.set(
      'myname','jsdong',{
        domain: '127.0.0.1', //写cookie所在域名
        path: '/index',  //写cookie所在路径
        maxAge:1000*60*60*24, //COOKIE有效时间
        expires:new Date('2018-12-31'), //失效时间
        httpOnly: false, //是否只用于http请求
        overwrite:false  //是否允许重写
      }
    )
    ctx.body = 'cookie is ok'
  } else {
    if (ctx.cookies.get('myname')) {
      ctx.body = ctx.cookies.get('myname')
    } else {
      ctx.body = 'cookie is null'
    }
  }
})

app.listen(3000,()=>{
  console.log('[demo] server is running at port 3000');
})