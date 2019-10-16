# react中有几种获取ref的方法
### 具体实现

```
this.$ref.title //可以用于获取dom节点元素（对于html元素使用ref的情况，ref本身引用的就是该元素的实际dom节点）

ReactDOM.findDOMNdoe(ref) // 可以获取挂载后的真正dom节点
```

共两种