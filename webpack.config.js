const webpack = require('webpack');

module.exports = {
    entry: './vue/vclip.vue',
    output: {
        path: './js',
        publicPath: 'js',
        filename: 'vclip.bundle.js',
        library: 'VClip',
        libraryTarget: 'umd'
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            }
        ]
    },
    plugins: [
        //new webpack.optimize.UglifyJsPlugin({
        //    compress: {
        //        warnings: false,
        //    },
        //    output: {
        //        comments: false,
        //    },
        //}),
    ]
};
