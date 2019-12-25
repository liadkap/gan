const HtmlWebPackPlugin = require("html-webpack-plugin");
const { join, resolve } = require('path');

module.exports = {
  entry:{ 
    main:'./index.js'
  },
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist')
  },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
            test: /\.html$/,
            use: [
              {
                loader: "html-loader"
              }
            ]
          }
        ]
      },
      plugins: [
        new HtmlWebPackPlugin({
          template: join(__dirname,'index.html'),
          filename: './index.html'
        })
      ]
    };