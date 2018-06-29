const redis = require('redis');

let client = redis.createClient({
    host:'localhost',
    port:6379,
    password:123456
})

client.set('a',66,(err,msg)=>{
    if(err){
        console.log("设置失败",msg)
    }else{
        console.log('设置成功',msg)
    }
    client.quit()
})

