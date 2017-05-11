
var dirVars = require('../webpack-base/dir-vars.config.js');
var commonConf = require('../webpack-base/common.config.js');
var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');

var BUILD_PATH = path.resolve(dirVars.staticRootDir, './build/demo');

commonConf.entry = {
    demo: path.resolve(dirVars.pagesDir, './demo/demo.js')
  };

commonConf.output = {
    path: BUILD_PATH,
    filename: '[name]-[hash].js'
  };

commonConf.devServer = {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    port:2001,
    proxy: {
        '/api/*': {
            target: '',
            secure: false,
            changeOrigin: true,
        }
    },
  };

var htmlPlugin = new HtmlwebpackPlugin({
      title: 'demo',
      filename: 'demo.html',
      template: path.resolve(dirVars.srcRootDir,"./templates/template.html")
    });
commonConf.plugins.push(htmlPlugin);

module.exports = commonConf;