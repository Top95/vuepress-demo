# 快速上手

前提条件

VuePress 需要 [Node.js (opens new window)](https://nodejs.org/en/)>= 8.6

本文会帮助你从头搭建一个简单的 VuePress 文档。如果你想在一个现有项目中使用 VuePress 管理文档，从步骤 3 开始。

1. 创建并进入一个新目录

   ```bash
   mkdir vuepress-starter && cd vuepress-starter
   ```

2. 使用你喜欢的包管理器进行初始化

   ```bash
   yarn init # npm init
   ```

3. 将 VuePress 安装为本地依赖

   我们已经不再推荐全局安装 VuePress

   ```bash
   yarn add -D vuepress # npm install -D vuepress
   ```

   注意

   如果你的现有项目依赖了 webpack 3.x，我们推荐使用 [Yarn (opens new window)](https://classic.yarnpkg.com/zh-Hans/)而不是 npm 来安装 VuePress。因为在这种情形下，npm 会生成错误的依赖树。

4. 创建你的第一篇文档

   ```bash
   mkdir docs && echo '# Hello VuePress' > docs/README.md
   ```

5. 在 `package.json` 中添加一些 [scripts(opens new window)](https://classic.yarnpkg.com/zh-Hans/docs/package-json#toc-scripts)

   这一步骤是可选的，但我们推荐你完成它。在下文中，我们会默认这些 scripts 已经被添加。

   ```json
   {
     "scripts": {
       "docs:dev": "vuepress dev docs",
       "docs:build": "vuepress build docs"
     }
   }
   ```

6. 在本地启动服务器

   ```bash
   yarn docs:dev # npm run docs:dev
   ```

   VuePress 会在 [http://localhost:8080 (opens new window)](http://localhost:8080/)启动一个热重载的开发服务器。

现在，你应该已经有了一个简单可用的 VuePress 文档。接下来，了解一下推荐的 [目录结构](https://www.vuepress.cn/guide/directory-structure.html) 和 VuePress 中的 [基本配置](https://www.vuepress.cn/guide/basic-config.html)。

等你了解完上文介绍的基础概念，再去学习一下如何使用 [静态资源](https://www.vuepress.cn/guide/assets.html)，[Markdown 拓展](https://www.vuepress.cn/guide/markdown.html) 和 [在 Markdown 中使用 Vue](https://www.vuepress.cn/guide/using-vue.html) 来丰富你的文档内容。

当你的文档逐渐成型的时候，不要忘记 VuePress 的 [多语言支持](https://www.vuepress.cn/guide/i18n.html) 并了解一下如何将你的文档 [部署](https://www.vuepress.cn/guide/deploy.html) 到任意静态文件服务器上。

# 目录结构

VuePress 遵循 **“约定优于配置”** 的原则，推荐的目录结构如下：

```
.
├── docs
│   ├── .vuepress (可选的)
│   │   ├── components (可选的)
│   │   ├── theme (可选的)
│   │   │   └── Layout.vue
│   │   ├── public (可选的)
│   │   ├── styles (可选的)
│   │   │   ├── index.styl
│   │   │   └── palette.styl
│   │   ├── templates (可选的, 谨慎配置)
│   │   │   ├── dev.html
│   │   │   └── ssr.html
│   │   ├── config.js (可选的)
│   │   └── enhanceApp.js (可选的)
│   │ 
│   ├── README.md
│   ├── guide
│   │   └── README.md
│   └── config.md
│ 
└── package.json
```

注意

请留意目录名的大写。

- `docs/.vuepress`: 用于存放全局的配置、组件、静态资源等。
- `docs/.vuepress/components`: 该目录中的 Vue 组件将会被自动注册为全局组件。
- `docs/.vuepress/theme`: 用于存放本地主题。
- `docs/.vuepress/styles`: 用于存放样式相关的文件。
- `docs/.vuepress/styles/index.styl`: 将会被自动应用的全局样式文件，会生成在最终的 CSS 文件结尾，具有比默认样式更高的优先级。
- `docs/.vuepress/styles/palette.styl`: 用于重写默认颜色常量，或者设置新的 stylus 颜色常量。
- `docs/.vuepress/public`: 静态资源目录。
- `docs/.vuepress/templates`: 存储 HTML 模板文件。
- `docs/.vuepress/templates/dev.html`: 用于开发环境的 HTML 模板文件。
- `docs/.vuepress/templates/ssr.html`: 构建时基于 Vue SSR 的 HTML 模板文件。
- `docs/.vuepress/config.js`: 配置文件的入口文件，也可以是 `YML` 或 `toml`。
- `docs/.vuepress/enhanceApp.js`: 客户端应用的增强。

注意

当你想要去自定义 `templates/ssr.html` 或 `templates/dev.html` 时，最好基于 [默认的模板文件 (opens new window)](https://github.com/vuejs/vuepress/blob/master/packages/%40vuepress/core/lib/client/index.dev.html)来修改，否则可能会导致构建出错。

**同时阅读:**

- [配置](https://www.vuepress.cn/config/)
- [主题](https://www.vuepress.cn/theme/)
- [默认主题配置](https://www.vuepress.cn/theme/default-theme-config.html)

## [#](https://www.vuepress.cn/guide/directory-structure.html#默认的页面路由)默认的页面路由

此处我们把 `docs` 目录作为 `targetDir` （参考 [命令行接口](https://www.vuepress.cn/api/cli.html#基本用法)），下面所有的“文件的相对路径”都是相对于 `docs` 目录的。在项目根目录下的 `package.json` 中添加 `scripts` ：

```json
{
  "scripts": {
    "dev": "vuepress dev docs",
    "build": "vuepress build docs"
  }
}
```

对于上述的目录结构，默认页面路由地址如下：

| 文件的相对路径     | 页面路由地址   |
| ------------------ | -------------- |
| `/README.md`       | `/`            |
| `/guide/README.md` | `/guide/`      |
| `/config.md`       | `/config.html` |

# 基本配置

## [#](https://www.vuepress.cn/guide/basic-config.html#配置文件)配置文件

如果没有任何配置，这个网站将会是非常局限的，用户也无法在你的网站上自由导航。为了更好地自定义你的网站，让我们首先在你的文档目录下创建一个 `.vuepress` 目录，所有 VuePress 相关的文件都将会被放在这里。你的项目结构可能是这样：

```text
.
├─ docs
│  ├─ README.md
│  └─ .vuepress
│     └─ config.js
└─ package.json
```

一个 VuePress 网站必要的配置文件是 `.vuepress/config.js`，它应该导出一个 JavaScript 对象：

```js
module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around'
}
```

对于上述的配置，如果你运行起 dev server，你应该能看到一个页面，它包含一个页头，里面包含一个标题和一个搜索框。VuePress 内置了基于 headers 的搜索 —— 它会自动为所有页面的标题、`h2` 和 `h3` 构建起一个简单的搜索索引。

参见 [配置](https://www.vuepress.cn/config/) 来查看所有可配置的选项。

其他配置格式

你也可以使用 YAML (`.vuepress/config.yml`) 或是 TOML (`.vuepress/config.toml`) 格式的配置文件。

## [#](https://www.vuepress.cn/guide/basic-config.html#主题配置)主题配置

一个 VuePress 主题应该负责整个网站的布局和交互细节。在 VuePress 中，目前自带了一个默认的主题（正是你现在所看到的），它是为技术文档而设计的。同时，默认主题提供了一些选项，让你可以去自定义导航栏（navbar）、 侧边栏（sidebar）和 首页（homepage） 等，详情请参见 [默认主题](https://www.vuepress.cn/theme/default-theme-config.html) 。

如果你想开发一个自定义主题，可以参考 [自定义主题](https://www.vuepress.cn/theme/)。

## [#](https://www.vuepress.cn/guide/basic-config.html#应用级别的配置)应用级别的配置

由于 VuePress 是一个标准的 Vue 应用，你可以通过创建一个 `.vuepress/enhanceApp.js` 文件来做一些应用级别的配置，当该文件存在的时候，会被导入到应用内部。`enhanceApp.js` 应该 `export default` 一个钩子函数，并接受一个包含了一些应用级别属性的对象作为参数。你可以使用这个钩子来安装一些附加的 Vue 插件、注册全局组件，或者增加额外的路由钩子等：

```js
// 使用异步函数也是可以的
export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData, // 站点元数据
  isServer // 当前应用配置是处于 服务端渲染 或 客户端
}) => {
  // ...做一些其他的应用级别的优化
}
```

# 静态资源

## [#](https://www.vuepress.cn/guide/assets.html#相对路径)相对路径

所有的 Markdown 文件都会被 webpack 编译成 Vue 组件，因此你可以，并且**应该更倾向于**使用相对路径（Relative URLs）来引用所有的静态资源：

```md
![An image](./image.png)
```

同样地，这在 `*.vue` 文件的模板中一样可以工作，图片将会被 `url-loader` 和 `file-loader` 处理，在运行生成静态文件的构建任务时，文件会被复制到正确的位置。

除此之外，你也使用 `~` 前缀来明确地指出这是一个 webpack 的模块请求，这将允许你通过 webpack 别名来引用文件或者 npm 的依赖：

```md
![Image from alias](~@alias/image.png)
![Image from dependency](~some-dependency/image.png)
```

Webpack 的别名可以通过 `.vuepress/config.js` 中 [configureWebpack](https://www.vuepress.cn/config/#configurewebpack) 来配置，如：

```js
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': 'path/to/some/dir'
      }
    }
  }
}
```

## [#](https://www.vuepress.cn/guide/assets.html#公共文件)公共文件

有时，你可能需要提供一个静态资源，但是它们并不直接被你的任何一个 markdown 文件或者主题组件引用 —— 举例来说，favicons 和 PWA 的图标，在这种情形下，你可以将它们放在 `.vuepress/public` 中， 它们最终会被复制到生成的静态文件夹中。

## [#](https://www.vuepress.cn/guide/assets.html#基础路径)基础路径

如果你的网站会被部署到一个**非根路径**，你将需要在 `.vuepress/config.js` 中设置 `base`，举例来说，如果你打算将你的网站部署到 `https://foo.github.io/bar/`，那么 `base` 的值就应该被设置为 `"/bar/"` (应当总是以斜杠开始，并以斜杠结束)。

有了基础路径（Base URL），如果你希望引用一张放在 `.vuepress/public` 中的图片，你需要使用这样路径：`/bar/image.png`，然而，一旦某一天你决定去修改 `base`，这样的路径引用将会显得异常脆弱。为了解决这个问题，VuePress 提供了内置的一个 helper `$withBase`（它被注入到了 Vue 的原型上），可以帮助你生成正确的路径：

```vue
<img :src="$withBase('/foo.png')" alt="foo">
```

值得一提的是，你不仅可以在你的 Vue 组件中使用上述的语法，在 Markdown 文件中亦是如此。

最后补充一句，一个 `base` 路径一旦被设置，它将会自动地作为前缀插入到 `.vuepress/config.js` 中所有以 `/` 开始的资源路径中。
