本项目是PCL.Proto的子项目，用于PCL的i18n翻译。

## 使用方法

### 前端项目

1. 在你的项目中安装此包。

```sh
npm install @amagicpear/pcl-locales
```

2. 引入包即可开始使用。例如：

```javascript
import locales from '@amagicpear/pcl-locales'
console.log(locales[navigator.language].main_nav.home)
```

这将以你当前浏览器的语言打印出PCL主页面的导航名称。

> [!NOTE]
> 在原生node.js环境下，导入json文件时可能会遇到一点问题。但是在前端项目中使用是没有问题的。

#### 使用示例（i18n-Vue）

```ts
import App from './App.vue'
import { createApp } from 'vue'
import locales from '@amagicpear/pcl-locales'
import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  legacy: false,
  locale: navigator.language,
  fallbackLocale: 'en-US',
  messages: locales,
})

createApp(App).use(i18n).mount('#app')
```

### 其他项目

克隆本项目，然后读取`src/*.json`即可，文件名为语言标识符。
