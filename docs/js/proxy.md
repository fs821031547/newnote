# 概述
Proxy 用于修改某些操作的默认行为，等同于在语言层面做出修改，所以属于一种“元编程”（meta programming），即对编程语言进行编程。
Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。

proxy和Object.defineProperty的区别
Object.defineProperty的缺点
>不能监听数组，因为数组没有getter和setter，
因为数组长度不确定，如果太长对性能负担太大
只能监听某个属性，而不是整个对象；需要遍历属性
只能监听属性变化，不能监听属性的删减


proxy的优点
>可以监听整个对象而非属性
可以监听数组
13种拦截方法
返回新对象而不是直接修改原对象。


### get方法
get方法用于拦截某个属性的读取操作，可以接受三个参数，依次为目标对象、属性名和 proxy 实例本身

```
var person = {
  name: "张三"
};

var proxy = new Proxy(person, {
  get: function(target, propKey) {
    if (propKey in target) {
      return target[propKey];
    } else {
      throw new ReferenceError("参数 \"" + propKey + "\" 不存在.");
    }
  }
});
```
### set方法

set方法用来拦截某个属性的赋值操作，可以接受四个参数，依次为目标对象、属性名、属性值

假定Person对象有一个age属性，该属性应该是一个不大于 150 的整数，那么可以使用Proxy保证age的属性值符合要求
```
let validator = {
  set: function(obj, prop, value) {
    if (prop === 'age') {
      if (!Number.isInteger(value)) {
        throw new TypeError('年龄不是整数类型');
      }
      if (value > 150) {
        throw new RangeError('年龄无效');
      }
    }

    // The default behavior to store the value
    obj[prop] = value;

    // 表示成功
    return true;
  }
};

let person = new Proxy({}, validator);

person.age = 100;

console.log(person.age);
// 100

person.age = 'young';
// 抛出异常: Uncaught TypeError: 年龄不是整数类型

person.age = 300;
// 抛出异常: Uncaught RangeError: 年龄无效
```

### apply

apply方法拦截函数的调用、call和apply操作。
```
var target = function () { return 'I am the target'; };
var handler = {
  apply: function () {
    return 'I am the proxy';
  }
};

var p = new Proxy(target, handler);

p()
```

### construct

construct()方法用于拦截new命令