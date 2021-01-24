## 扩展 webpack

1. 新建`vue.config.js`文件

2. 简单配置, 该配置会被`webpack-merge`合并到最终的 webpack 配置中

```js
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@layouts': path.resolve(__dirname, 'src/layouts'),
      },
    },
  },
};
```

## 支持 SCSS

1. 安装依赖

```bash
npm i -D node-sass sass-loader
```