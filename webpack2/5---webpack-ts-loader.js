const pathlib = require('path');
const Webpack = require('webpack');

module.exports = {
    mode: 'development',

    entry: './src/1.ts',
    output: {
        path: pathlib.resolve('dest'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader'
        }]
    }
};
