const pathlib = require('path');
const Webpack = require('webpack');

module.exports={
    mode:'development',

    entry:'./src/1',
    output:{
        path:pathlib.resolve('dest'),
        filename:'bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules|bower_components/,
                use:'babel-loader'
            }
        ]
    }
}