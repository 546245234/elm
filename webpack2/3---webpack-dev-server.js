const pathlib=require('path');
const Webpack=require('webpack');

module.exports={
    entry:{
        index:'./src/1',
        app:'./src/app'
    },
    output:{
        path: pathlib.resolve('dest'),
        filename: '[name].bundle.js'
    },
    plugins:[
        new Webpack.HotModuleReplacementPlugin(),
    ],
    devServer:{
        contentBase: pathlib.resolve('public'),
        host: 'localhost',
        inline: true,
        port:8090,
        hot:true
    }
}