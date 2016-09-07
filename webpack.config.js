var path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname,
        filename: "./public/app.js"
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: 'eslint',
                include: path.resolve(__dirname, 'src/')
            }
        ],
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['es2015','angular2']
                }
            }
        ]
    }
};