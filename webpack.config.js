var path = require("path");

module.exports = {
    context: path.join(__dirname, '/src'),
    entry: './client.js',
    output: {
        path: path.join(__dirname, '/public'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }
        }]
    }
};
