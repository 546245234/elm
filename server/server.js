const koa = require('koa');
const static = require('koa-static');
const Router = require('koa-router');
const db = require('./libs/database');
const config = require('./config');
const pathlib = require('path');
const betterBody = require('koa-better-body');
const convert = require('koa-convert');
const tokenSession = require('./libs/token-session');

const server = new koa();
server.listen(config.PORT);

server.use(convert(betterBody()));


server.use(async (ctx,next)=>{
	ctx.set({'Access-Control-Allow-Origin':'*'});//设置跨域
	ctx.set({'Access-Control-Allow-Headers': '*'});//因为跨域了，要设置请求头
		
	let token = ctx.request.headers['x-token'];

	ctx.session = tokenSession();

	if (token) {
		let res = await db.select('token_table', '*', {token})
		if(res.length == 0){
			ctx.status = 404;
		}else{
			ctx.token = token
			await next();
		}
	}else{
		await next();
	}

	
})

let router = new Router();
router.use('/api/',require('./routers/api.router'));

server.use(router.routes());


server.use(static(pathlib.resolve(__dirname,'www')));