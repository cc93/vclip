const webpack = require('webpack');

module.exports = {
    entry: './vue/vclip.vue',
    output: {
        path: './js',
        filename: 'vclip.bundle.js',
        library: 'VClip',
        libraryTarget: 'umd'
    },
    module: {
        loaders: [
            //{
            //    test: /\.jsx?$/,
            //    exclude: /node_modules/,
            //    loader: 'babel',
            //},
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
}