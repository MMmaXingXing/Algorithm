##### word-break
作用: 自动换行的处理方法 针对英文类单词字符 中文日文无效
属性: 
* normal (浏览器默认换行方法) 
* break-all(任何地方都可换行) 
* keep-all(半角连接符处换行)
##### word-wrap
作用: 单词URL是否换行
属性: 
* mormal(浏览器默认 只在允许的断字点换行) 
* break-word(在长单词或url内部换行)
##### white-space
作用: 段落中文本的显示格式
属性: 
* normal(空白 会被浏览器忽略) 
* nowrap(强制不换行) 
* pre-line(合并空白符 保留换行) 
* pre-wrap(保留空白符 正常换行(实测换行)) 
* pre(按照书写的正常输出 保留换行 类似`<pre/>`标签) 
* inherit(继承父元素)