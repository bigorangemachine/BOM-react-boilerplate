var argv = require('yargs').argv,
    _ = require('underscore'),
    webpack = require('webpack'),//not needed?
    path = require('path'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

var PROCESS_BIN = _.last(argv['$0'].split(/(\/|\\)/)).toLowerCase(),//if you don't want to use yargs you can use process.argv[1] - but test for yourself :)
    BUILD_DIR = path.resolve(__dirname, './www-assets/'),
    APP_DIR = path.resolve(__dirname, './pkg/');

var config = {
        'devtool': "source-map", // source-map|inline-source-map -> not needed?
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
                'loader': ExtractTextPlugin.extract('style?sourceMap', 'css?sourceMap')
            },
            {
                'test': /(\.scss|\.sass)$/,//allow nodejs to use sass without a prefix?
                'loader': ExtractTextPlugin.extract('css-loader?sourceMap!sass-loader?sourceMap')
            }
        ]},
        'plugins': [
            new ExtractTextPlugin('css/css.css')//where to put all the css
        ]
    };
//test mode!
if(PROCESS_BIN.indexOf('mocha-webpack') === 0){//we've been executed through the npm run test (of some sort)
    config.target = 'node';// in order to ignore built-in modules like path, fs, etc.
    if(typeof(config.externals)!=='object'){config.externals=[];}
    config.externals.push(require('webpack-node-externals')());// in order to ignore all modules in node_modules folder

    //config.set({'frameworks': ['mocha', 'chai', 'sinon']});

}

module.exports = config;
