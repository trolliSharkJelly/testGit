const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'), // './dist'의 절대 경로를 리턴합니다.
    filename: 'app.bundle.js',
  },
  module: {                                           // javascript 모듈을 생성할 규칙을 지정 (node_module을 제외한.js 파일을 babel-loader로 불러와 모듈을 생성
        rules: [
            {
                test: /\.js$/,                          // .js, .jsx로 끝나는 babel이 컴파일하게 할 모든 파일
                exclude: /node_module/,                 // node module 폴더는 babel 컴파일에서 제외
                use:{
                  loader: 'babel-loader',
                  options: {
                    presets: [
                    "@babel/preset-env",
                  ["@babel/preset-react", {"runtime": "automatic"}]
                ]
                },
                }
            },
            {
              test: /\.css$/,
              use: ["style-loader", "css-loader"],
              exclude: /node_modules/,
            },
      ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: path.resolve(__dirname, "./public/index.html")
  })],
};