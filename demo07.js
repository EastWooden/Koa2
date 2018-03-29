//koa-router 路由层级

//全局设置前缀
// const router = new Router({
//   prefix: '/jspang'
// })

const Koa = require('Koa');
const Router = require('koa-router');
const app = new Koa();

//home 子路由层级
const home = new Router();
home
  .get('/jsdong',async(ctx)=>{
    ctx.body = 'this is home jsdong page'
  })
  .get('/todo',async(ctx)=>{
    ctx.body = 'this is home todo page'
  })

  //page 子路由层级
const page = new Router();
page
  .get('/jsdong',async(ctx)=> {
    ctx.body = 'this is page jsdong page'
  })
  .get('/todo',async(ctx)=> {
    ctx.body = 'this is page todo page'
  })

  //主路由层级
const router = new Router();
router.get('/',async(ctx)=> {
  ctx.body = 'this is index '
})
// router.use('/',router.routes,router.allowedMethods());
router.use('/home',home.routes(),home.allowedMethods());
router.use('/page',page.routes(),page.allowedMethods());



app
  .use(router.routes())
  .use(router.allowedMethods());

app.use(async(ctx,next) => {

});


app.listen(3000,()=>{
  console.log('[demo] server is running at port 3000');
})