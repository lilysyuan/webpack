const path = require('path');

module.exports = {
    mode: 'production',
    entry : './src/index.js',//"production" | "development"| "none" 開發模式
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'script.js'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [{
                    loader: 'style-loader' //(順序2)
                },
                {
                    loader: 'css-loader', //(順序1)
                    options: {
                        modules: true
                    }
                }]
        }]
    },
    //plugins: []
};