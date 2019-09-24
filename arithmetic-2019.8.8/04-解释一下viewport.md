##### viewport 定义
viewport是用户网页的可视区域,中文翻译为视区.通俗理解即设备屏幕上用于显示我们网页的那一部分区域.
##### 属性
viewport 通过meta标签设置 示例如下
```
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0 user-scalable=no">
```
常见属性有
* width: viewport 值为一个数值 如 600、1200 也可以是一个特殊值 如 device-width指设备的宽度
* height 与width相对应 指定viewport的高度
* initial-scale 初始缩放比例 即当页面第一次 load 缩放的比例 值为数字 可以带小数
* maximum-scale 允许的用户缩放到的最大比例 值为数字 可以带小数
* minimum-scale 允许的用户缩放到的最小比例 值为数字 可以带小数
* user-scalable 是否允许用户手动缩放 值为 yes 或者 no

##### 常见用法
移动端自适应 常设置 
```
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
```
##### 三个viewport

* layout viewport ———— 布局视窗 大于或等于 浏览器视窗 使用 document.documentElement.clientWidth获取
* visual viewport ———— 视觉视窗 等于浏览器视窗大小 使用 document.documentElement.innerWidth获取
* ideal viewport ———— 理想视窗 完美适配移动设备的viewport,无论在何种密度屏,何种分辨率,不需要缩放和横向滚动条就可以显示所有屏幕内容 并且文字 图片 大小刚好合适
