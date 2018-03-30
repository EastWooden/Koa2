// koa2的模板知识(ejs)
const Koa = require('Koa');
const app  =new Koa();
const view = require('koa-views');
const path = require('path'); //node的原生模板

//加载模板引擎
app.use(view(path.join(__dirname,'./views'),{
  extension: 'ejs'
}))
app.use(async(ctx)=>{
  let title = 'hello koa2';
  await ctx.render('index',{
    title
  })
})

app.listen(3000,()=>{
  console.log('[demo] server is running at port 3000');
})