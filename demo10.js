const Koa = require('Koa');
const static = require('koa-static');
const path = require('path');

const app = new Koa();

const staticPath = './static';

app.use(static(path.join(__dirname, staticPath)));
app.use(async(ctx)=>{
  ctx.body = 'hello world'
})
app.listen(3000,()=>{
  console.log('[demo] server is running at port 3000')
})