(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{412:function(e,s,t){"use strict";t.r(s);var a=t(56),r=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"快速上手"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#快速上手"}},[e._v("#")]),e._v(" 快速上手")]),e._v(" "),t("p",[e._v("前提条件")]),e._v(" "),t("p",[e._v("VuePress 需要 "),t("a",{attrs:{href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node.js (opens new window)"),t("OutboundLink")],1),e._v(">= 8.6")]),e._v(" "),t("p",[e._v("本文会帮助你从头搭建一个简单的 VuePress 文档。如果你想在一个现有项目中使用 VuePress 管理文档，从步骤 3 开始。")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("创建并进入一个新目录")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("mkdir")]),e._v(" vuepress-starter "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" vuepress-starter\n")])])])]),e._v(" "),t("li",[t("p",[e._v("使用你喜欢的包管理器进行初始化")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" init "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# npm init")]),e._v("\n")])])])]),e._v(" "),t("li",[t("p",[e._v("将 VuePress 安装为本地依赖")]),e._v(" "),t("p",[e._v("我们已经不再推荐全局安装 VuePress")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" -D vuepress "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# npm install -D vuepress")]),e._v("\n")])])]),t("p",[e._v("注意")]),e._v(" "),t("p",[e._v("如果你的现有项目依赖了 webpack 3.x，我们推荐使用 "),t("a",{attrs:{href:"https://classic.yarnpkg.com/zh-Hans/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Yarn (opens new window)"),t("OutboundLink")],1),e._v("而不是 npm 来安装 VuePress。因为在这种情形下，npm 会生成错误的依赖树。")])]),e._v(" "),t("li",[t("p",[e._v("创建你的第一篇文档")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("mkdir")]),e._v(" docs "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'# Hello VuePress'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" docs/README.md\n")])])])]),e._v(" "),t("li",[t("p",[e._v("在 "),t("code",[e._v("package.json")]),e._v(" 中添加一些 "),t("a",{attrs:{href:"https://classic.yarnpkg.com/zh-Hans/docs/package-json#toc-scripts",target:"_blank",rel:"noopener noreferrer"}},[e._v("scripts(opens new window)"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("这一步骤是可选的，但我们推荐你完成它。在下文中，我们会默认这些 scripts 已经被添加。")]),e._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"scripts"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"docs:dev"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"vuepress dev docs"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"docs:build"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"vuepress build docs"')]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])]),e._v(" "),t("li",[t("p",[e._v("在本地启动服务器")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" docs:dev "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# npm run docs:dev")]),e._v("\n")])])]),t("p",[e._v("VuePress 会在 "),t("a",{attrs:{href:"http://localhost:8080/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://localhost:8080 (opens new window)"),t("OutboundLink")],1),e._v("启动一个热重载的开发服务器。")])])]),e._v(" "),t("p",[e._v("现在，你应该已经有了一个简单可用的 VuePress 文档。接下来，了解一下推荐的 "),t("a",{attrs:{href:"https://www.vuepress.cn/guide/directory-structure.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("目录结构"),t("OutboundLink")],1),e._v(" 和 VuePress 中的 "),t("a",{attrs:{href:"https://www.vuepress.cn/guide/basic-config.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("基本配置"),t("OutboundLink")],1),e._v("。")]),e._v(" "),t("p",[e._v("等你了解完上文介绍的基础概念，再去学习一下如何使用 "),t("a",{attrs:{href:"https://www.vuepress.cn/guide/assets.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("静态资源"),t("OutboundLink")],1),e._v("，"),t("a",{attrs:{href:"https://www.vuepress.cn/guide/markdown.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Markdown 拓展"),t("OutboundLink")],1),e._v(" 和 "),t("a",{attrs:{href:"https://www.vuepress.cn/guide/using-vue.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("在 Markdown 中使用 Vue"),t("OutboundLink")],1),e._v(" 来丰富你的文档内容。")]),e._v(" "),t("p",[e._v("当你的文档逐渐成型的时候，不要忘记 VuePress 的 "),t("a",{attrs:{href:"https://www.vuepress.cn/guide/i18n.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("多语言支持"),t("OutboundLink")],1),e._v(" 并了解一下如何将你的文档 "),t("a",{attrs:{href:"https://www.vuepress.cn/guide/deploy.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("部署"),t("OutboundLink")],1),e._v(" 到任意静态文件服务器上。")]),e._v(" "),t("h1",{attrs:{id:"目录结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#目录结构"}},[e._v("#")]),e._v(" 目录结构")]),e._v(" "),t("p",[e._v("VuePress 遵循 "),t("strong",[e._v("“约定优于配置”")]),e._v(" 的原则，推荐的目录结构如下：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(".\n├── docs\n│   ├── .vuepress (可选的)\n│   │   ├── components (可选的)\n│   │   ├── theme (可选的)\n│   │   │   └── Layout.vue\n│   │   ├── public (可选的)\n│   │   ├── styles (可选的)\n│   │   │   ├── index.styl\n│   │   │   └── palette.styl\n│   │   ├── templates (可选的, 谨慎配置)\n│   │   │   ├── dev.html\n│   │   │   └── ssr.html\n│   │   ├── config.js (可选的)\n│   │   └── enhanceApp.js (可选的)\n│   │ \n│   ├── README.md\n│   ├── guide\n│   │   └── README.md\n│   └── config.md\n│ \n└── package.json\n")])])]),t("p",[e._v("注意")]),e._v(" "),t("p",[e._v("请留意目录名的大写。")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("docs/.vuepress")]),e._v(": 用于存放全局的配置、组件、静态资源等。")]),e._v(" "),t("li",[t("code",[e._v("docs/.vuepress/components")]),e._v(": 该目录中的 Vue 组件将会被自动注册为全局组件。")]),e._v(" "),t("li",[t("code",[e._v("docs/.vuepress/theme")]),e._v(": 用于存放本地主题。")]),e._v(" "),t("li",[t("code",[e._v("docs/.vuepress/styles")]),e._v(": 用于存放样式相关的文件。")]),e._v(" "),t("li",[t("code",[e._v("docs/.vuepress/styles/index.styl")]),e._v(": 将会被自动应用的全局样式文件，会生成在最终的 CSS 文件结尾，具有比默认样式更高的优先级。")]),e._v(" "),t("li",[t("code",[e._v("docs/.vuepress/styles/palette.styl")]),e._v(": 用于重写默认颜色常量，或者设置新的 stylus 颜色常量。")]),e._v(" "),t("li",[t("code",[e._v("docs/.vuepress/public")]),e._v(": 静态资源目录。")]),e._v(" "),t("li",[t("code",[e._v("docs/.vuepress/templates")]),e._v(": 存储 HTML 模板文件。")]),e._v(" "),t("li",[t("code",[e._v("docs/.vuepress/templates/dev.html")]),e._v(": 用于开发环境的 HTML 模板文件。")]),e._v(" "),t("li",[t("code",[e._v("docs/.vuepress/templates/ssr.html")]),e._v(": 构建时基于 Vue SSR 的 HTML 模板文件。")]),e._v(" "),t("li",[t("code",[e._v("docs/.vuepress/config.js")]),e._v(": 配置文件的入口文件，也可以是 "),t("code",[e._v("YML")]),e._v(" 或 "),t("code",[e._v("toml")]),e._v("。")]),e._v(" "),t("li",[t("code",[e._v("docs/.vuepress/enhanceApp.js")]),e._v(": 客户端应用的增强。")])]),e._v(" "),t("p",[e._v("注意")]),e._v(" "),t("p",[e._v("当你想要去自定义 "),t("code",[e._v("templates/ssr.html")]),e._v(" 或 "),t("code",[e._v("templates/dev.html")]),e._v(" 时，最好基于 "),t("a",{attrs:{href:"https://github.com/vuejs/vuepress/blob/master/packages/%40vuepress/core/lib/client/index.dev.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("默认的模板文件 (opens new window)"),t("OutboundLink")],1),e._v("来修改，否则可能会导致构建出错。")]),e._v(" "),t("p",[t("strong",[e._v("同时阅读:")])]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.vuepress.cn/config/",target:"_blank",rel:"noopener noreferrer"}},[e._v("配置"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://www.vuepress.cn/theme/",target:"_blank",rel:"noopener noreferrer"}},[e._v("主题"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://www.vuepress.cn/theme/default-theme-config.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("默认主题配置"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"默认的页面路由"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#默认的页面路由"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://www.vuepress.cn/guide/directory-structure.html#%E9%BB%98%E8%AE%A4%E7%9A%84%E9%A1%B5%E9%9D%A2%E8%B7%AF%E7%94%B1",target:"_blank",rel:"noopener noreferrer"}},[e._v("#"),t("OutboundLink")],1),e._v("默认的页面路由")]),e._v(" "),t("p",[e._v("此处我们把 "),t("code",[e._v("docs")]),e._v(" 目录作为 "),t("code",[e._v("targetDir")]),e._v(" （参考 "),t("a",{attrs:{href:"https://www.vuepress.cn/api/cli.html#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95",target:"_blank",rel:"noopener noreferrer"}},[e._v("命令行接口"),t("OutboundLink")],1),e._v("），下面所有的“文件的相对路径”都是相对于 "),t("code",[e._v("docs")]),e._v(" 目录的。在项目根目录下的 "),t("code",[e._v("package.json")]),e._v(" 中添加 "),t("code",[e._v("scripts")]),e._v(" ：")]),e._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"scripts"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"dev"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"vuepress dev docs"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"build"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"vuepress build docs"')]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("p",[e._v("对于上述的目录结构，默认页面路由地址如下：")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("文件的相对路径")]),e._v(" "),t("th",[e._v("页面路由地址")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[t("code",[e._v("/README.md")])]),e._v(" "),t("td",[t("code",[e._v("/")])])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("/guide/README.md")])]),e._v(" "),t("td",[t("code",[e._v("/guide/")])])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("/config.md")])]),e._v(" "),t("td",[t("code",[e._v("/config.html")])])])])]),e._v(" "),t("h1",{attrs:{id:"基本配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本配置"}},[e._v("#")]),e._v(" 基本配置")]),e._v(" "),t("h2",{attrs:{id:"配置文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置文件"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://www.vuepress.cn/guide/basic-config.html#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6",target:"_blank",rel:"noopener noreferrer"}},[e._v("#"),t("OutboundLink")],1),e._v("配置文件")]),e._v(" "),t("p",[e._v("如果没有任何配置，这个网站将会是非常局限的，用户也无法在你的网站上自由导航。为了更好地自定义你的网站，让我们首先在你的文档目录下创建一个 "),t("code",[e._v(".vuepress")]),e._v(" 目录，所有 VuePress 相关的文件都将会被放在这里。你的项目结构可能是这样：")]),e._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(".\n├─ docs\n│  ├─ README.md\n│  └─ .vuepress\n│     └─ config.js\n└─ package.json\n")])])]),t("p",[e._v("一个 VuePress 网站必要的配置文件是 "),t("code",[e._v(".vuepress/config.js")]),e._v("，它应该导出一个 JavaScript 对象：")]),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[e._v("module"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("exports "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("title")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Hello VuePress'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("description")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Just playing around'")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("p",[e._v("对于上述的配置，如果你运行起 dev server，你应该能看到一个页面，它包含一个页头，里面包含一个标题和一个搜索框。VuePress 内置了基于 headers 的搜索 —— 它会自动为所有页面的标题、"),t("code",[e._v("h2")]),e._v(" 和 "),t("code",[e._v("h3")]),e._v(" 构建起一个简单的搜索索引。")]),e._v(" "),t("p",[e._v("参见 "),t("a",{attrs:{href:"https://www.vuepress.cn/config/",target:"_blank",rel:"noopener noreferrer"}},[e._v("配置"),t("OutboundLink")],1),e._v(" 来查看所有可配置的选项。")]),e._v(" "),t("p",[e._v("其他配置格式")]),e._v(" "),t("p",[e._v("你也可以使用 YAML ("),t("code",[e._v(".vuepress/config.yml")]),e._v(") 或是 TOML ("),t("code",[e._v(".vuepress/config.toml")]),e._v(") 格式的配置文件。")]),e._v(" "),t("h2",{attrs:{id:"主题配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#主题配置"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://www.vuepress.cn/guide/basic-config.html#%E4%B8%BB%E9%A2%98%E9%85%8D%E7%BD%AE",target:"_blank",rel:"noopener noreferrer"}},[e._v("#"),t("OutboundLink")],1),e._v("主题配置")]),e._v(" "),t("p",[e._v("一个 VuePress 主题应该负责整个网站的布局和交互细节。在 VuePress 中，目前自带了一个默认的主题（正是你现在所看到的），它是为技术文档而设计的。同时，默认主题提供了一些选项，让你可以去自定义导航栏（navbar）、 侧边栏（sidebar）和 首页（homepage） 等，详情请参见 "),t("a",{attrs:{href:"https://www.vuepress.cn/theme/default-theme-config.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("默认主题"),t("OutboundLink")],1),e._v(" 。")]),e._v(" "),t("p",[e._v("如果你想开发一个自定义主题，可以参考 "),t("a",{attrs:{href:"https://www.vuepress.cn/theme/",target:"_blank",rel:"noopener noreferrer"}},[e._v("自定义主题"),t("OutboundLink")],1),e._v("。")]),e._v(" "),t("h2",{attrs:{id:"应用级别的配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#应用级别的配置"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://www.vuepress.cn/guide/basic-config.html#%E5%BA%94%E7%94%A8%E7%BA%A7%E5%88%AB%E7%9A%84%E9%85%8D%E7%BD%AE",target:"_blank",rel:"noopener noreferrer"}},[e._v("#"),t("OutboundLink")],1),e._v("应用级别的配置")]),e._v(" "),t("p",[e._v("由于 VuePress 是一个标准的 Vue 应用，你可以通过创建一个 "),t("code",[e._v(".vuepress/enhanceApp.js")]),e._v(" 文件来做一些应用级别的配置，当该文件存在的时候，会被导入到应用内部。"),t("code",[e._v("enhanceApp.js")]),e._v(" 应该 "),t("code",[e._v("export default")]),e._v(" 一个钩子函数，并接受一个包含了一些应用级别属性的对象作为参数。你可以使用这个钩子来安装一些附加的 Vue 插件、注册全局组件，或者增加额外的路由钩子等：")]),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 使用异步函数也是可以的")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("export")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("default")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  Vue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// VuePress 正在使用的 Vue 构造函数")]),e._v("\n  options"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 附加到根实例的一些选项")]),e._v("\n  router"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 当前应用的路由实例")]),e._v("\n  siteData"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 站点元数据")]),e._v("\n  isServer "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 当前应用配置是处于 服务端渲染 或 客户端")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// ...做一些其他的应用级别的优化")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("h1",{attrs:{id:"静态资源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#静态资源"}},[e._v("#")]),e._v(" 静态资源")]),e._v(" "),t("h2",{attrs:{id:"相对路径"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#相对路径"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://www.vuepress.cn/guide/assets.html#%E7%9B%B8%E5%AF%B9%E8%B7%AF%E5%BE%84",target:"_blank",rel:"noopener noreferrer"}},[e._v("#"),t("OutboundLink")],1),e._v("相对路径")]),e._v(" "),t("p",[e._v("所有的 Markdown 文件都会被 webpack 编译成 Vue 组件，因此你可以，并且"),t("strong",[e._v("应该更倾向于")]),e._v("使用相对路径（Relative URLs）来引用所有的静态资源：")]),e._v(" "),t("div",{staticClass:"language-md extra-class"},[t("pre",{pre:!0,attrs:{class:"language-md"}},[t("code",[t("span",{pre:!0,attrs:{class:"token url"}},[t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),e._v("["),t("span",{pre:!0,attrs:{class:"token content"}},[e._v("An image")]),e._v("]("),t("span",{pre:!0,attrs:{class:"token url"}},[e._v("./image.png")]),e._v(")")]),e._v("\n")])])]),t("p",[e._v("同样地，这在 "),t("code",[e._v("*.vue")]),e._v(" 文件的模板中一样可以工作，图片将会被 "),t("code",[e._v("url-loader")]),e._v(" 和 "),t("code",[e._v("file-loader")]),e._v(" 处理，在运行生成静态文件的构建任务时，文件会被复制到正确的位置。")]),e._v(" "),t("p",[e._v("除此之外，你也使用 "),t("code",[e._v("~")]),e._v(" 前缀来明确地指出这是一个 webpack 的模块请求，这将允许你通过 webpack 别名来引用文件或者 npm 的依赖：")]),e._v(" "),t("div",{staticClass:"language-md extra-class"},[t("pre",{pre:!0,attrs:{class:"language-md"}},[t("code",[t("span",{pre:!0,attrs:{class:"token url"}},[t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),e._v("["),t("span",{pre:!0,attrs:{class:"token content"}},[e._v("Image from alias")]),e._v("]("),t("span",{pre:!0,attrs:{class:"token url"}},[e._v("~@alias/image.png")]),e._v(")")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token url"}},[t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),e._v("["),t("span",{pre:!0,attrs:{class:"token content"}},[e._v("Image from dependency")]),e._v("]("),t("span",{pre:!0,attrs:{class:"token url"}},[e._v("~some-dependency/image.png")]),e._v(")")]),e._v("\n")])])]),t("p",[e._v("Webpack 的别名可以通过 "),t("code",[e._v(".vuepress/config.js")]),e._v(" 中 "),t("a",{attrs:{href:"https://www.vuepress.cn/config/#configurewebpack",target:"_blank",rel:"noopener noreferrer"}},[e._v("configureWebpack"),t("OutboundLink")],1),e._v(" 来配置，如：")]),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[e._v("module"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("exports "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("configureWebpack")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("resolve")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("alias")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[e._v("'@alias'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'path/to/some/dir'")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("h2",{attrs:{id:"公共文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#公共文件"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://www.vuepress.cn/guide/assets.html#%E5%85%AC%E5%85%B1%E6%96%87%E4%BB%B6",target:"_blank",rel:"noopener noreferrer"}},[e._v("#"),t("OutboundLink")],1),e._v("公共文件")]),e._v(" "),t("p",[e._v("有时，你可能需要提供一个静态资源，但是它们并不直接被你的任何一个 markdown 文件或者主题组件引用 —— 举例来说，favicons 和 PWA 的图标，在这种情形下，你可以将它们放在 "),t("code",[e._v(".vuepress/public")]),e._v(" 中， 它们最终会被复制到生成的静态文件夹中。")]),e._v(" "),t("h2",{attrs:{id:"基础路径"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基础路径"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://www.vuepress.cn/guide/assets.html#%E5%9F%BA%E7%A1%80%E8%B7%AF%E5%BE%84",target:"_blank",rel:"noopener noreferrer"}},[e._v("#"),t("OutboundLink")],1),e._v("基础路径")]),e._v(" "),t("p",[e._v("如果你的网站会被部署到一个"),t("strong",[e._v("非根路径")]),e._v("，你将需要在 "),t("code",[e._v(".vuepress/config.js")]),e._v(" 中设置 "),t("code",[e._v("base")]),e._v("，举例来说，如果你打算将你的网站部署到 "),t("code",[e._v("https://foo.github.io/bar/")]),e._v("，那么 "),t("code",[e._v("base")]),e._v(" 的值就应该被设置为 "),t("code",[e._v('"/bar/"')]),e._v(" (应当总是以斜杠开始，并以斜杠结束)。")]),e._v(" "),t("p",[e._v("有了基础路径（Base URL），如果你希望引用一张放在 "),t("code",[e._v(".vuepress/public")]),e._v(" 中的图片，你需要使用这样路径："),t("code",[e._v("/bar/image.png")]),e._v("，然而，一旦某一天你决定去修改 "),t("code",[e._v("base")]),e._v("，这样的路径引用将会显得异常脆弱。为了解决这个问题，VuePress 提供了内置的一个 helper "),t("code",[e._v("$withBase")]),e._v("（它被注入到了 Vue 的原型上），可以帮助你生成正确的路径：")]),e._v(" "),t("div",{staticClass:"language-vue extra-class"},[t("pre",{pre:!0,attrs:{class:"language-vue"}},[t("code",[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("img")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v(":src")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("$withBase("),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("'")]),e._v("/foo.png"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("'")]),e._v(")"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),e._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("alt")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("foo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n")])])]),t("p",[e._v("值得一提的是，你不仅可以在你的 Vue 组件中使用上述的语法，在 Markdown 文件中亦是如此。")]),e._v(" "),t("p",[e._v("最后补充一句，一个 "),t("code",[e._v("base")]),e._v(" 路径一旦被设置，它将会自动地作为前缀插入到 "),t("code",[e._v(".vuepress/config.js")]),e._v(" 中所有以 "),t("code",[e._v("/")]),e._v(" 开始的资源路径中。")])])}),[],!1,null,null,null);s.default=r.exports}}]);