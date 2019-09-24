**Shadow DOM**
Shadow是HTML的一个规范,它允许浏览器开发者封装己自己的HTML标签,CSS样式和javascript代码,同时也可以让开发人员创建类似<video>这样的自定义标签,创建这些新标签相关的API被称为 Web Component。

**内容:**

学习一个Shadow需要了解的相关知识有:

Shadow Host: 一个常规的DOM节点 Shadow DOM 会被添加到这个节点上。

Shadow Three: Shadow DOM 内部的DOM树。

Shadow boundary: Shadow DOM 结束的地方 也是常规DOM 开始的地方。

Shadow root: Shadow Three 根结点。

**作用**

Shadow DOM 可以在WEB平台本地封装和组件化,而不必依赖像<iframe>这样的工具, 在组件中使用自己独立的样式和方法,并且保持自己的独立性。

**使用**

1、 创建一个Shadow 

```
const shadowEl = document.querySelector(".shadow-host");
const shadow = shadowEl.attachShadow({mode: 'open'});
```

2、将新元素添加到Shadow 中(和基本dom操作相似,只是需要加入shadow中)
```
shadow.appendChild(child);
```





