const pathlib = require('path');

module.exports = {
    entry: {
        js1:'./src/1',
        js2:'./src/app'
    },
    output: {
        path: pathlib.resolve('dest'),
        filename: '[name].bundle.js'
    }
}