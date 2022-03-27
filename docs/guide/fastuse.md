# 使用 

## [#](https://www.vuepress.cn/guide/using-vue.html#浏览器的-api-访问限制)简单介绍

VuePress 通过路由匹配对应目录下的md文档，并将对应的md文档加载为html，展示到浏览器。

所以你无需任何多余操作，只需要简单的配置路由并将写好的md文档放到对应的目录下就能轻松的通过vuepress发布一个网页。

同时vuepress支持热部署，修改过md文档的内容并不需要重启，vuepress会帮你重新加载到浏览器页面。

## [#](https://www.vuepress.cn/guide/using-vue.html#浏览器的-api-访问限制)开始之前

vuepress中配置的路由如果以 “/” 结尾则表示，默认匹配该目录下的README.md文件，如：

“/bank/csbank/” 表示匹配到 ：bank目录下的csbank目录中的README.md文件

“/bank/csbank” 表示匹配到 ：bank目录下的csbank.md文件（路由中的.md后缀通常会省略）

## [#](https://www.vuepress.cn/guide/using-vue.html#浏览器的-api-访问限制)开始

如果要添加某个银行的md文档到vuepress，只需要三个步骤：

1.在导航栏的项目列表添加银行的名称以及路由：

