const pathlib = require('path');
const Webpack = require('webpack');

module.exports = {
    mode: 'development',

    entry: './src/2.js',
    output: {
        path: pathlib.resolve('dest'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: 'css-loader'
        }]
    }
};
