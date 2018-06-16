const net = require('net');
const assert = require('assert');

host = 'smtp.163.com';
port = 25;
user = 'y546245234@163.com';
pass = 'y613377';

function sendMail(host,port,user,pass,to,content){
    return new Promise((resolve,reject)=>{
        let client = net.createConnection({host,port},()=>{
            console.log('connected to server!');

            try {
                (async () => {
                    let code;

                    code = await getData();
                    assert(code == 220);
                    sendData(`HELO ${host}`);

                    code = await getData();
                    assert(code == 250);
                    sendData(`auth login`);

                    code = await getData();
                    assert(code == 334);
                    sendData(new Buffer(user).toString('base64'));

                    code = await getData();
                    assert(code == 334);
                    sendData(new Buffer(pass).toString('base64'));

                    code = await getData();
                    assert(code == 235);
                    sendData(`MAIL FROM:<${user}>`);

                    code = await getData();
                    assert(code == 250);
                    sendData(`RCPT TO:<${to}>`);

                    code = await getData();
                    assert(code == 250);
                    sendData(`DATA`);

                    code = await getData();
                    assert(code == 354);
                    sendData(`${content}\r\n.`);

                    sendData(`QUIT`);

                    resolve();

                })()
            } catch (e) {
                reject(e)
            }

        })
    })
}

function getData(){
    return new Promise((resolve,reject)=>{
        next();
        function next(){
            if(data){
                let tmp = data;
                data = null;
                resolve(parseInt(tmp.toString()));
            }else{
                setTimeout(next, 0);
            }
        }
    })
}

function sendData(data){
    console.log('发送',data);
    client.write(data+'\r\n');
}

let data = null;
client.on('data', d => {
    console.log('接到', d.toString());

    data = d;
})


client.on('end',()=>{
    console.log('服务器关闭')
})

