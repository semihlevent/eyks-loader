
const path = require('path');

module.exports = {
    mode: 'production',
    devtool: 'inline-source-map',
    entry: path.join(__dirname, "src", "lib", "index.js"),
    output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
      filename: 'index.js',
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
    resolve: {
      alias: {
        'react': path.resolve('node_modules/react'),
        'react-dom': path.resolve('node_modules/react-dom'),
      }
    },
    externals: {
      // Don't bundle react or react-dom      
      react: {
        commonjs: "react",
        commonjs2: "react",
        amd: "React",
        root: "React"
      },
      "react-dom": {
        commonjs: "react-dom",
        commonjs2: "react-dom",
        amd: "ReactDOM",
        root: "ReactDOM"
      }
    }
  };