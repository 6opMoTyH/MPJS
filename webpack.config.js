module.exports = {
    entry: __dirname + "./src/index.js",
    output: {
        path: __dirname,
        filename: "./public/app.js"
    },
    module: {
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