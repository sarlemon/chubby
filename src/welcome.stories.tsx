import React from 'react'
import { storiesOf } from '@storybook/react'

const markdownText = `
### 使用 React+typescript 打造的组件库
vikingship 是为慕课网打造的一套教学组件库，使用 React Hooks 和 typescript

### 安装试试

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

### 课程亮点

* 🔥typescript with React Hooks
* ⛑️使用 react-testing-library 完成单元测试
* 📚使用 storybook 本地调试和生成文档页面
* 📚使用 react-doc-gen 自动生成文档
* 📦使用第三方库扩充组件-(react-fontawesome, react-transition-group)
* 🌹样式（Sass）文件从零开始，掌握大型应用的 CSS 组织方法
* 🎉涉及全部流程，包括最后的 npm publish，husky提交发布前验证，travis CI/CD 集成，发布文档站点等
`
storiesOf('欢迎使用', module)
  .add('welcome', () => {
    return (
      <h2>欢迎来到 chubby-akio 组件库</h2>
    )
  }, { info: { text: markdownText, source: false, } })