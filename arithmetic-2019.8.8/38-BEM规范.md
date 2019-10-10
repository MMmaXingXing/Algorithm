# BEM规范

### 什么是BEM规范 
BEM是一套CSS的命名规范。
#### 规则
将CSS分出三个部分的概念  
* 块 block
* 元素 element
* 修饰符 modifier
* 以上与--和__连接

命名约定格式如下

* .block {} 此为高级别的抽象组件
* .block__element {} 此为block的后代，用于形成一个完整的block整体
* .block--modifier {} 此为block的不同状态或不同版本