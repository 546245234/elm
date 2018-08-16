const express=require('express');
const fs=require('fs');

const topics=JSON.parse(fs.readFileSync('./.exported'));

let server=express();
server.listen(8090);
console.log(`running at 8090`);

server.use((req, res, next)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');

  next();
});

server.get('/list', (req, res)=>{
  let page=req.query.page||0;
  let pageSize=8;

  let datas=JSON.parse(JSON.stringify(topics));
  datas.forEach(item=>{
    delete item.answers;
  });

  datas=datas.slice(page*pageSize, (page+1)*pageSize);

  res.send(datas);
});

server.get('/detail', (req, res)=>{
  let id=req.query.id;

  let data=null;
  let datas=JSON.parse(JSON.stringify(topics));

  datas.forEach(item=>{
    if(item.question_ID==id){
      data=item;
    }
  });

  res.send(data);
});
