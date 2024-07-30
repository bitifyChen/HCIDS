const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const glob = require('glob');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const RemoveEmptyFilesPlugin = require('./remove-empty-files-plugin'); // 引入自定义插件

const pages = glob.sync('./src/pages/**/*.html').map(file => {
  const pageName = path.basename(path.dirname(file));
  return {
    template: file,
    filename: `${pageName}.html`,
    chunks: [pageName]
  };
});

module.exports = (env, argv) => {
  const isDevelopment = argv.mode === 'development';

  return {
    entry: pages.reduce((entries, page) => {
      const pageName = path.basename(path.dirname(page.template));
      entries[pageName] = `./src/pages/${pageName}/index.js`;
      return entries;
    }, {}),
    output: {
      filename: 'js/[name].js', // 所有的 JS 文件都放在 js 文件夹下
      path: path.resolve(__dirname, 'dist'),
      clean: true // 清理旧的构建文件
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: isDevelopment
            ? ['style-loader', 'css-loader', 'postcss-loader'] // 开发模式下使用 style-loader
            : [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'] // 生产模式下使用 MiniCssExtractPlugin
        },
        {
          test: /\.scss$/,
          use: isDevelopment
            ? ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'] // 开发模式下使用 style-loader
            : [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'] // 生产模式下使用 MiniCssExtractPlugin
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        }
      ]
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'), // 设置 @ 为 src 目录
      },
      extensions: ['.js', '.jsx', '.css', '.scss'] // 添加可省略的文件后缀
    },
    plugins: [
      new CleanWebpackPlugin(), // 清理 dist 文件夹
      ...pages.map(page => new HtmlWebpackPlugin({
        ...page,
        minify: {
          collapseWhitespace: false, // 不压缩空白
          preserveLineBreaks: true,  // 保留换行
          removeComments: false,     // 不移除注释
          keepClosingSlash: true,    // 保留结尾斜杠
          minifyJS: false,           // 不压缩JS
          minifyCSS: false,          // 不压缩CSS
        }
      })),
      !isDevelopment && new MiniCssExtractPlugin({
        filename: 'css/[name].css' // CSS 文件输出到 css 文件夹下
      }),
      new RemoveEmptyFilesPlugin() // 清除无内容之JS文件
    ].filter(Boolean),
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'), // 配置静态文件目录
      },
      compress: true,
      port: 5000,
      open: true, // 自动打开浏览器
      hot: true, // 启用热模块替换
      client: {
        overlay: false, // 关闭浏览器中的错误覆盖层（可选）
      },
      watchFiles: [
        '**/*.html', // 监视所有 HTML 文件
        '**/*.scss', // 监视所有 SCSS 文件
        '**/*.js'    // 监视所有 JS 文件
      ]
    }
  };
};