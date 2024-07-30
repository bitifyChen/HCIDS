class RemoveEmptyFilesPlugin {
    apply(compiler) {
      compiler.hooks.emit.tapAsync('RemoveEmptyFilesPlugin', (compilation, callback) => {
        const fs = require('fs');
        const path = require('path');
  
        // 遍历所有生成的文件
        Object.keys(compilation.assets).forEach((filename) => {
          const asset = compilation.assets[filename];
  
          // 检查文件内容是否为空
          if (asset.size() === 0) {
            delete compilation.assets[filename]; // 删除空文件
          }
        });
  
        callback();
      });
    }
  }
  
  module.exports = RemoveEmptyFilesPlugin;