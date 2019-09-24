#### 1、a==1 && a==2 && a==3
```
var a = { value: 0 };
a.valueOf = function (){
  return this.value += 1
}

console.log((a==1 && a==2 && a==3));
```

##### 在 js == 比对中，js代码会执行类型的强制转换，转换规则如下
&emsp;1、如果类型为基本类型，就返回这个值;
&emsp;2、如果类型为对象，就返回对象的valueOf(),如果返回类型为基本类型，就返回这个值;
&emsp;3、以上均未通过，则执行值的toString();
&emsp;4、还不行，就抛出类型错误;

#### 2、a===1 && a===2 && a===3

```
var value = 0;
Object.defineProperty(window, 'a', {
  get: function () {
    return this.value += 1
  }
})

console.log(a===1 && a===2 && a===3);
```
##### 在 js === 比对中，为什么也可以返回true呢？

*当当当，主要原因是Proprety(属性描述符)函数*

属性描述符函数，有两个方法，get 和 set，通过get或者set，可以强制键值，设定可选键值，正常对象通过Proprety设置的强制键值，可以用Object. 来使用，因此，以上方法先设置一个可以拿到的值，然后比对，就实现了题目需求（注：由于题目是直接 a === b, 因此，首先将a挂载到了windows上）。

