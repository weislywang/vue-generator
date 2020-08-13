# vue-generator
基于vue-cli的项目生成器

## 基本命令

npm run start 启动服务

npm run build 打包项目，生成的内容在dist文件夹中

npm run lint 检查项目

## 使用

项目根目录下执行npm install

成功后执行npm run start

## 目录结构介绍

### public文件夹 

放置html及icon

### src

项目源码

#### assets

静态资源，图片、svg等

#### components

业务组件

#### constans

常量目录，一般放置请求url及不变的项目级常量

#### global

全局使用的公共函数

#### routes

路由配置信息

#### store

vuex全套配置

#### util

工具函数

### vue.config.js

扩展vue-cli外的webpack配置
