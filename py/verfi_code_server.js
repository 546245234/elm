const koa = require('koa');
const router = require('koa-router');
const fs = require('fs');
const static = require('koa-static');
const cp = require('child_process');
const session = require('koa-session');

let server = new koa();
server.listen(8081);

server.keys = ['asd', 'asdfastwet3454', 'aserq4wrsea456y'];
server.use(session({
    key:'sess_id',
    maxAge:20*60*1000
},server))

let r = router();
server.use(r.routes());

r.get('/verfi_code', async ctx => {
    const seed = "abcdefhjkmnprstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ2345678";
    let arr = [];

    for (let i = 0; i < 5; i++) {
        arr.push(seed[Math.floor(Math.random() * seed.length)]);
    }

    let code = arr.join('');

    let {w,h} = ctx.request.query;
    ctx.response.body = await createVerfiCode(w,h,code);
    ctx.session.code = code.toLowerCase();
})

r.get('/reg',async ctx=>{
    const {user,pass,verfi} = ctx.request.query;

    if (verfi.toLowerCase() != ctx.session.code) {
        ctx.body = '验证码错误'
    }else{
        ctx.body = '注册成功'
    }
})

server.use(static('www'));

function createVerfiCode(w, h, str){
    return new Promise((resolve,reject)=>{
        cp.exec(`python 1.py ${w} ${h} ${str}`,function(err){
            if(err){
                reject(err)
            }else{
                fs.readFile('a.png',(err,buffer)=>{
                    if(err){
                        reject(err)
                    }else{  
                        resolve(buffer)
                    }
                })
            }
        })
    })
}

