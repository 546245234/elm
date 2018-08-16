const pathlib=require('path');
const Webpack=require('webpack');

module.exports={
    mode:'development',
    entry:'./src/3.js',
    output:{
        path:pathlib.resolve('dest'),
        filename:'bundle.js'
    },
    module:{
        rules:[
            {
                test: /\.(jpg|png|gif|svg|tif)$/,
                use: ['file-loader', 'image-webpack-loader']
            }
        ]
    }
}