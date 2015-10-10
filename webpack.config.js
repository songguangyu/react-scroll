module.exports = {
	entry: "./src/js/scrollArea",
    output: {
        path: "./dist/js/",
        filename: "index.js"
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            { test: /\.js|\.jsx$/, exclude: /node_modules/, loader: 'babel-loader'}
        ]
    }
};
