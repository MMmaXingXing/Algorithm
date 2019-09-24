### 共有特性
typeof与instacne都是js变量类型检测的运算符
#### typeOf
在js中，typeof是检测基础类型的神器，对于所有引用类型的返回都是object;
#### instanceOf
当检测某个实例是不是当前对象的实例的时候，就到了instance大展拳脚的时刻了。
### instanceOf的实现

```
// 左边表达式和右边表达式
instanceOf (L, R) {
    L = L.__proto__;
    R = R.prototype;
    While(true) {
        if (L == null) return false;
        if (L == R) return true;
        L = L.__proto__
    }
}
```