const path = require('path');

const PATHS = {
    SRC: path.join(__dirname, 'src'),
    DIST: path.join(__dirname, 'dist')
};

module.exports = {
    // Entry accepts a path or an object of entries. We'll be using the
    // latter form given it's convenient with more complex configurations.
    entry: {
        app: PATHS.SRC
    },
    output: {
        path: PATHS.DIST,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.scss/, loader: "style!css!sass" },
            { test: /\.js/, loader: "babel" },
        ]
    }
};