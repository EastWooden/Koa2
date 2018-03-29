const Koa = require('Koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();

router
  .get('/',(ctx,next)=>{
    ctx.body = 'hello jsdong'
  })
  .get('/todo',(ctx,next) => {
    ctx.body  = 'this is todo html'
  })

app
  .use(router.routes())
  .use(router.allowedMethods());

app.use(async(ctx,next) => {

});


app.listen(3000,()=>{
  console.log('[demo] server is running at port 3000');
})