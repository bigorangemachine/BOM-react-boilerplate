var webpack = require('webpack'),
    path = require('path'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'www-assets/'),
    APP_DIR = path.resolve(__dirname, 'pkg/');

var config = {
        //'devtool': "source-map", // source-map|inline-source-map -> not needed?
        'entry': APP_DIR + '/jsxpkg/index.jsx', // this can be a hastable  with arrays {'something': [ ... ], 'soemthing-else': [ ... ] }
        'output': {
            'path': BUILD_DIR,
            'filename': 'js/bundle.js'
        },
        'module': {
            'loaders': [{
                'test': /\.jsx?/,// makes it so webpack will run jsx through babel
                'include': APP_DIR,
                'loaders': ['babel']
            },
            {
                'test': /\.css$/,//allow nodejs to use css without a prefix - otherwise require('css!./../css/app.css');
                'loaders': ['style-loader?sourceMap', 'css-loader?sourceMap'],
                'include': APP_DIR + 'css'
            },
            // {
            //     'test': /\.scss$/,//allow nodejs to use sass without a prefix?
            //     'loaders': ['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap'],
            //     'include': APP_DIR + 'scss' //not needed?
            // }
            {
                'test': /\.scss$/,//allow nodejs to use sass without a prefix?
                'loader': ExtractTextPlugin.extract('style-loader!css-loader!sass-loader'),
                'include': APP_DIR + 'scss' //not needed?
            }
        ]
        },
        'plugins': [new ExtractTextPlugin(BUILD_DIR+'css.css')]
    };

module.exports = config;
