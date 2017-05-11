module.exports = {
  loaders: [{
    test: /\.jsx?$/,
    loader: 'babel-loader',
    exclude: /node_modules/,
    query: {
      presets: ['babel-preset-es2015', 'babel-preset-react', 'stage-0'],
      plugins: [
        ["import", {
          "libraryName": "antd",
          "style": 'css'
        }],
        ["transform-class-properties", {
          "spec": true
        }]
      ]
    }
  }, {
    test: /\.css$/,
    loader: "style-loader!css-loader"
  }, {
    test: /\.(png|jpg)$/,
    loader: 'url-loader?limit=40000'
  }, {
    test: /\.scss$/,
    loaders: ['style', 'css', 'sass']
  }]
}