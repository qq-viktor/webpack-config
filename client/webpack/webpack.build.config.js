const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config');

const buildWebpackConfig = merge(baseWebpackConfig, {
   mode: 'production',
    output: {
        publicPath: './'
    },
    module: {
        rules: [{
            test: /\.(ttf|eot|svg|otf|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            exclude: /node_modules/,
            loader: 'file-loader',
            options: {
                name: `[hash].[ext]`,
                outputPath: `${baseWebpackConfig.externals.paths.assets}fonts`
            }
        }]
    },
    plugins: []
});

module.exports = new Promise((resolve, reject) => {
    resolve(buildWebpackConfig)
});