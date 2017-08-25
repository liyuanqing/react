# react-demo

### Usage
* 开发
```bash
$ npm install -g
$ npm start
```
* 打包
```bash
$ npm run build
```
### 技术点
* 本框架使用react react-router redux webpack less ant-design等技术

### 功能
* 可快速开发后台类系统
* webpack生成首页
* 热更新
* 路由分割

### 开发步骤
1. 在src/containers 文件下添加页面
2. 在src/router.js 文件里添加路由
3. 在src/actions 文件下添加页面对应的.js 文件（主要作用是发起dispatch,改变redux）
4. 在src/reducers 文件下添加页面对应的.js 文件（设置redux初始值,并根据不同情况进行相应改变）
5. 在src/reducers/index.js 文件将现有的reduces合并为一个大的状态机

### 待改进问题
* 打包代码压缩
* webpack添加环境变量，为快发环境和线上环境定制深度定制不同打包逻辑
* 登录页面加入打包，不单独列出
* 与后端进行接口标准制定，并统一改进接口反馈（包括成功提示，失败提示，404处理，错误处理等）
### 将来设想
* 构建自己的node.js服务器
* 进行服务器端渲染
