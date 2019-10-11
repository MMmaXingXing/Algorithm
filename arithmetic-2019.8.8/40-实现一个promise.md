# 实现一个Promise

### Promise 

Promise采用面向对象的方式封装了回调函数，可以将回调金字塔改为链式调用。Promise是一种规范，ES6选择了Promise A+的方案

### 代码实现

```
// 简易版
class Promise {
    constructor(init) {
        this.PromiseStste = 'pending';
        let resolve = (val) => {
            if (this.resolveCallBack) {
                this.PromiseStste = 'fulfilled';
                this.resolveCallBack(val);
            }
        }

        let reject = (val) => {
            if (this.resolveCallBack) {
                this.PromiseStste = 'reject';
                this.rejectCallBack(val);
            }
        }

        if (init) {
            init(resolve, reject);
        }
    }
    then(onFulfill, onReject) {
        this.resolveCallBack = onFulfill;
        this.rejectCallBack = onReject;
        return this
    }
}
```