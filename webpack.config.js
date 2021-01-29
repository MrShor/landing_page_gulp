module.exports = {
    mode: 'development',
    entry: './src/js/main.js',
    output: {
        filename: 'index.js',
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                  presets: ['@babel/env'],
                },
            },
        ],
    },
};