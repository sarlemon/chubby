## chubby-akio component library
## 使用 React+typescript 打造的组件库

### 安装最后已经发布的组件库来试试

~~~javascript
npm install chubby-akio --save
~~~

### 使用

~~~javascript
// 加载样式
import 'chubby-akio/dist/index.css'
// 引入组件
import { Button } from 'chubby-akio'
~~~

### 组件库亮点

* 🔥typescript with React Hooks
* ⛑️使用 react-testing-library 完成单元测试
* 📚使用 storybook 本地调试和生成文档页面
* 📚使用 react-doc-gen 自动生成文档
* 📦使用第三方库扩充组件-(react-fontawesome, react-transition-group)

### 一些本地开发命令

~~~bash
//启动本地环境
npm run stroybook

//跑单元测试
npm test

//build可发布静态文件
npm run build
