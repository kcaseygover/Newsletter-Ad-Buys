var webpack = require('webpack');
var path = require('path');

const config = {
    entry: [
        'babel-polyfill',
        'webpack-dev-server/client?http://localhost:8080/',
        './src/index.js'
    ],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
          {test: /\.js$/, use: 'babel-loader'}
        ]
    },
    plugins: [
      new webpack.NamedModulesPlugin(),
    ]
};

module.exports = config;
