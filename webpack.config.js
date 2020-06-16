const path = require('path');

module.exports = {
    // entry: ['@babel/polyfill', 'whatwg-fetch','./script.js'],
    entry: ['./script.js'],
    output: {
        path: path.resolve(__dirname, './'),
        filename: 'main.js',
    },
};
