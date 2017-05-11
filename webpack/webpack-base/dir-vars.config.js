var path = require('path');
var moduleExports = {};

moduleExports.staticRootDir = path.resolve(__dirname, '../../'); // 项目根目录
moduleExports.srcRootDir = path.resolve(moduleExports.staticRootDir, './src'); // 项目资源目录
moduleExports.pagesDir = path.resolve(moduleExports.srcRootDir, './pages'); // 单页面入口文件目录
moduleExports.componentsDir = path.resolve(moduleExports.srcRootDir, './components'); // 组件目录

module.exports = moduleExports;
