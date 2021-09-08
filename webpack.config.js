
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: path.join(__dirname, "src", "index.js"),
    output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
      // filename: 'index.js',
    },
    module: {
      rules: [
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          use:{
            loader: "babel-loader",
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          },
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        }
      ],
    },
    // resolve: {
    //   alias: {
    //     'react': path.resolve('node_modules/react'),
    //     'react-dom': path.resolve('node_modules/react-dom'),
    //   }
    // },
    // externals: {
    //   // Don't bundle react or react-dom      
    //   react: {
    //     commonjs: "react",
    //     commonjs2: "react",
    //     amd: "React",
    //     root: "React"
    //   },
    //   "react-dom": {
    //     commonjs: "react-dom",
    //     commonjs2: "react-dom",
    //     amd: "ReactDOM",
    //     root: "ReactDOM"
    //   }
    // },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "public", "index.html"),
      }),
    ],
    devServer: {
      historyApiFallback: true,
      // Enable hot reloading
      hot: true,
      port: 3000,  
    },
  };