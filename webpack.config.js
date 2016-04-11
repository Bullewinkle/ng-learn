const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

const PATHS = {
    SRC: path.join(__dirname, 'src'),
    DIST: path.join(__dirname, 'dist')
};

module.exports = {
    // Entry accepts a path or an object of entries. We'll be using the
    // latter form given it's convenient with more complex configurations.
    entry: {
        app: path.join(PATHS.SRC, 'app/app.module'),
        vendor: path.join(PATHS.SRC, 'vendor/vendor.module')
    },
    output: {
        path: PATHS.DIST,
        filename: '[name].js'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!postcss!css" },
            { test: /\.scss/, loader: "style!css!postcss!sass" },
            { test: /\.js/,
                loader: "babel",
                exclude: /(node_modules|bower_components)/,
                query: {
                    presets: ['es2015'],
                    plugins: ['transform-runtime']
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'eMailer',
            template: `${PATHS.SRC}/index.html`,
            filename: `${PATHS.DIST}/index.html`
        }),
        new ngAnnotatePlugin({
            add:true
        })
    ],
    postcss: function () {
        return [require('precss'), require('autoprefixer')];
    }
};