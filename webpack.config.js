const path = require('path');
const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module: {
    rules: [
      {
        test: [/\.js$/, /\.jsx$/],
        exclude: /node_modules/,
        use:{
            loader: "babel-loader"
        }
    }, 
    {
        test: /\.css$/,
        loader: 'style-loader'
    }, 
    {
        test: /\.css$/,
        loader: 'css-loader',
        query: {
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]'
        }
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader'
    }
    // {
    //   test: /\.(pdf|jpg|png|gif|svg|ico)$/,
    //   use: [
    //       {
    //           loader: 'file-loader'
    //       },
    //   ]
    // }
    ]
  }
}
