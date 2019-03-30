const webpack =  require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config');

const devWebpackConfig = merge(baseWebpackConfig, {
    mode: 'development',
    output: {
        publicPath: '/'
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: baseWebpackConfig.externals.paths.dist,
        port: 8081,
        overlay: true
    },
    plugins: [
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map'
        })
    ]
});

module.exports = new Promise((resolve, reject) => {
    resolve(devWebpackConfig)
});
