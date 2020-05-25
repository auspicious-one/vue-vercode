# 一款 Vue 手机短信验证码组件

### 博客地址：https://blog.csdn.net/lovefive5/article/details/84257062

NPM 直接安装使用

```
npm install @auspicious/vue-vercode
```

或者
```
npm install vue-vercode5
```

这里我为了减少 publish 的文件，去掉了打包到浏览器的 js 文件 ， 如果需要打包到浏览器使用，需要借助 webpack 并且配置 webpack-loader

1. 配置 package.js

```js

{
  "scripts": {
    "build": "webpack --mode production --progress --hide-modules"
  },
  "dependencies": {
    "@babel/core": "^7.9.6",
    "babel": "^6.23.0",
    "babel-loader": "^8.1.0",
    "css-loader": "^3.5.3",
    "style-loader": "^1.2.1",
    "vue": "^2.6.11",
    "vue-loader": "^15.9.2",
    "vue-template-compiler": "^2.6.11",
    "webpack": "^4.43.0"
  },
  "devDependencies": {
    "@vue/cli-plugin-babel": "~4.3.0",
    "@vue/cli-plugin-eslint": "~4.3.0",
    "@vue/cli-service": "~4.3.0",
    "babel-eslint": "^10.1.0",
    "eslint": "^6.7.2",
    "eslint-plugin-vue": "^6.2.2",
    "vue-template-compiler": "^2.6.11",
    "webpack-cli": "^3.3.11"
  },
  "eslintConfig": {
    "root": true,
    "env": {
      "node": true
    },
    "extends": [
      "plugin:vue/essential",
      "eslint:recommended"
    ],
    "parserOptions": {
      "parser": "babel-eslint"
    },
    "rules": {}
  }
}

```

2. webpakc.config.js

```js
const { VueLoaderPlugin } = require("vue-loader");
const path = require("path");

module.exports = {
  entry: path.resolve(__dirname + "/src/index.js"),
  output: {
    path: path.resolve(__dirname + "/dist/"),
    filename: "vue-vercode.js",
    library: "vue-vercode",
    libraryTarget: "umd",
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: __dirname,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.vue$/,
        use: {
          loader: "vue-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          }
        ]
      }
    ]
  },
  plugins: [new VueLoaderPlugin()]
};
```
