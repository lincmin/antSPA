var path = require('path');
var webpack = require('webpack');

if (process.env.NODE_ENV === 'dev') {
    var config = {
        devtool: 'eval-source-map',
        module: require('./module.config.js'),
        resolve: {
            extensions: ['', '.js', '.jsx']
        },
        plugins: [],
    };
}

if (process.env.NODE_ENV === 'production') {
    var config = {
        devtool: false,
        module: require('./module.config.js'),
        resolve: {
            extensions: ['', '.js', '.jsx']
        },
        plugins: [
            new webpack.optimize.UglifyJsPlugin({
                minimize: true,
                output: {
                    comments: false, 
                },
                compress: {
                    warnings: false
                }
            }),
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify(process.env.NODE_ENV),
                },
            }),
        ]
    };
}

module.exports = config;