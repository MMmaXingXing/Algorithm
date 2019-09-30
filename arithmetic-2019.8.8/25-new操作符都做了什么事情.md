## new操作符都做了什么

### 介绍
new操作符可以快速创建构造函数的实例，以下
```
    function Person(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
    }

    Person.prototype.sayHello = () {
        alert("hello");
    }

    let man = new Person('zucker', 18, 'job')
    console.log(man);
    man.sayHello();
```

以上 经历了四个步骤，  

1、内部创建一个新对象  
2、将构造函数的作用域赋值给新对象，（设置原型链，因此this就指向了这个新对象）  
3、执行构造函数中的代码  
4、返回新对象

### 实现一个new对象
```
function New(obj, ...arr) {
    len ans = {};
    ans.__proto__ = obj.prototype; // 连接原型对象
    // Object.setPrototypeOf(ans, obj.prototype)

    // let ans = Object.create(obj.prototype);

    let result = obj.apply(ans, arr); //获得构造函数的返回值
    return ans === Object ? ans : result;
    // 判断构造函数的返回值是否与创造的实例不同 
}
```