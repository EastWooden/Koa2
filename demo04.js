//post 请求
const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser');
app.use(bodyParser());
app.use(async (ctx) => {
  if (ctx.url === '/' && ctx.method === 'GET') {
    let html = `
      <h1>THis is request POST</h1>
      <form action="/" method='POST'>
        <P>username</P>
        <input type="text" name='username' placeholder="请输入您的用户名"/> <br/>
        <p>password</p>
        <input type="password" name="password" > <br/>
        <p>website</p>
        <input type="text" name="website" > <br/>
        <input type="submit" placeholder="提交"/>
      </form>
    `
    ctx.body = html;
  } else if (ctx.url === '/' && ctx.method === 'POST') {
    let postData = ctx.request.body;
    let resultdata = postData;
    ctx.body = resultdata;

  } else {
    return ctx.body = '<h1>404 NOT FOUND</h1>'
  }
});
//接收数据方法
function parsePostData(ctx) {
  return new Promise((resolve, reject) => {
    try {
      let postdata = '';
      ctx.req.on('data', (data) => {  //data为接收到的数据 使用ctx.req的on方法进行接收
        postdata += data;
      })
      ctx.req.addListener('end', () => {   //监听是否接收完毕.接收完毕，返回值
        resolve(postdata);
      })
    } catch (error) {
      reject(error);
    }
  })
}
//将数据转换成json格式
function zhjsonData(data) {
  let queryData = {};
  let postdataList = data.split('&');
  console.log(postdataList);
  for (let [index, item] of postdataList.entries()) {
    let itemList = item.split('=');
    console.log(itemList)
    queryData[itemList[0]] = decodeURIComponent(itemList[1]); //decodeURIComponent 对url进行解码  encodeURIComponent对url进行编码
  }
  return queryData;
}
app.listen(3000, () => {
  console.log('[demo] server is running at port 3000')
})