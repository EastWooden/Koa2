const Koa = require('koa')
const app = new Koa()

app.use(async(ctx) => {   //ctx为Koa 自带的对象 context 上下文
  ctx.body = 'hello koa2'
})

app.listen(3000)   //设置监听端口;
console.log('[demo] start -quick is starting at prot 3000')